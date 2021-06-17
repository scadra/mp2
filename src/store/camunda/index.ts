import IConfigurationService from "Interfaces/configuration.interface";
// Dependencies
import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { Inject } from "inversify-props";
// Models
import { CamundaRequest } from "Models/api/camunda-request";
import { StepResponse } from "Models/step/step-response";
// Services
import ICamundaService from "Interfaces/api/camunda.interface";

/**
 * Define the camunda module
 * @Module
 */
@Module({ namespaced: true })
class CamundaStore extends VuexModule {
  @Inject()
  private camundaService!: ICamundaService;

  @Inject()
  private configurationService!: IConfigurationService;

  /**
   * States
   * @StepResponse step: The actual step
   * @string | @null errorMsg: The error message to display
   */
  private step: StepResponse = null;
  private errorMsg: string | null = null;

  //Getters
  get returnNextStep(): StepResponse {
    return this.step;
  }

  get returnErrorMsg(): string | null {
    return this.errorMsg;
  }

  //Mutations
  @Mutation
  setStep(step: StepResponse): void {
    this.step = step;
  }

  @Mutation
  setErrorMsg(error: string): void {
    this.errorMsg = error;
  }

  /**
   * go to next step
   * @CamundaRequest request: the variables
   */
  @Action
  public async next(request: CamundaRequest): Promise<void> {
    try {
      this.context.commit("setErrorMsg", null);
      const response = await this.camundaService.next(request);
      this.context.commit("setStep", response);
    } catch (err) {
      this.context.commit("setErrorMsg", err.response.data.msgDetail);
    }
  }

  /**
   * start the processe
   * @CamundaRequest request: the variables
   */
  @Action
  public async start(request: CamundaRequest): Promise<void> {
    try {
      this.context.commit("setErrorMsg", null);
      const response = await this.camundaService.start(request);
      this.context.commit("setStep", response);
    } catch (err) {
      this.context.commit("setErrorMsg", err.response.data.msgDetail);
    }
  }
}

export default CamundaStore;
