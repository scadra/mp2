import IConfigurationService from 'Interfaces/configuration.interface';
// Dependencies
import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import axios, { AxiosRequestConfig } from "axios";
import { serialize } from 'object-to-formdata';
import { Inject } from 'inversify-props';
// Models
import { CamundaRequest } from "Models/api/camunda-request";
import { StepResponse } from "Models/step/step-response";
import { EnvVariable } from 'Models/enum/env.variables.enum';

/**
 * Define the camunda module
 * @Module
 */
@Module({ namespaced: true})
class CamundaStore extends VuexModule {
  //Injection of configuration service
  @Inject()
  private configurationService!: IConfigurationService;

  private header: AxiosRequestConfig = { 
    auth: {
      username: null,
      password: null
     }
  };
  
  private path: string = "api/bpm";

  /**
   * States
   * @StepResponse step: The actual step
   * @string | @null errorMsg: The error message to display
   * @string path: path of camunda endpoint
   */
  step: StepResponse = null;
  errorMsg: string | null = null;

  //Getters
  get returnNextStep() {
    return this.step;
  }

  get returnErrorMsg() {
    return this.errorMsg;
  }

  //Mutations
  @Mutation
  setStep(step: StepResponse) {
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
        `/${this.path}/${
          await this.configurationService.getConfig(EnvVariable.CAMUNDA_PROCESS_ID)
        }/next`,
        request,
        this.header
      );
      if (response.data) {
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
    this.header.auth.username = await this.configurationService.getConfig(EnvVariable.CAMUNDA_USER);
    this.header.auth.password = await this.configurationService.getConfig(EnvVariable.CAMUNDA_PASSWORD);
    try {
      this.context.commit("setErrorMsg", null);
      const response = await axios.post(
        `/${this.path}/${
          await this.configurationService.getConfig(EnvVariable.CAMUNDA_PROCESS_ID)
        }/start`,
        serialize(request.variables),
        this.header
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
