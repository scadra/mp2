// Dependencies
import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import axios from "axios";
// Models
import { CamundaRequest } from "Models/api/camunda-request";
import { StepResponse } from "Models/step/step-response";

/**
 * Define the camunda module
 * @Module
 */
@Module({ namespaced: true })
class CamundaStore extends VuexModule {
  /**
   * States
   * @StepResponse step: The actual step
   * @string | @null errorMsg: The error message to display
   * @string path: path of camunda endpoint
   */
  step: StepResponse = null;
  errorMsg: string | null = null;
  path: string = "api/bpm";

  //Getters
  get returnNextStep() {
    return this.step;
  }

  get returnErrorMsg() {
    return this.errorMsg;
  }

  //Mutations
  @Mutation
  setStep(step: any) {
    this.step = step;
  }

  @Mutation
  setErrorMsg(error: string) {
    this.errorMsg = error;
  }

  /**
   * go to next step
   * @CamundaRequest request: the variables
   */
  @Action
  public async next(request: CamundaRequest) {
    try {
      this.context.commit("setErrorMsg", null);
      const response = await axios.post(
        `${process.env.GRIDSOME_CAMUNDA_URL}/${this.path}/${
          process.env.GRIDSOME_CAMUNDA_PROCESS_ID
        }/next`,
        request
      );
      if (response.data && response.data.nextStep) {
        this.context.commit("setStep", response.data);
      }
    } catch (err) {
      this.context.commit("setErrorMsg", err.response.data.msgDetail);
    }
  }

  /**
   * start the processe
   * @CamundaRequest request: the variables
   */
  @Action
  public async start(request: CamundaRequest) {
    try {
      this.context.commit("setErrorMsg", null);
      const response = await axios.post(
        `${process.env.GRIDSOME_CAMUNDA_URL}/${this.path}/${
          process.env.GRIDSOME_CAMUNDA_PROCESS_ID
        }/start`,
        request
      );
      if (response.data && response.data.nextStep) {
        this.context.commit("setStep", response.data);
      }
    } catch (err) {
      this.context.commit("setErrorMsg", err.response.data.msgDetail);
    }
  }
}

export default CamundaStore;
