// Dependencies
import axios from "axios";
import { serialize } from 'object-to-formdata'; 
import { injectable } from "inversify-props";
// Service interface
import ICamundaService from "Interfaces/api/camunda.interface";
//Models
import { CamundaRequest } from "Models/api/camunda-request";
import { StepResponse } from "Models/step/step-response";

@injectable()
export default class CamundaService implements ICamundaService {
  private path ="api/bpm";

  private headers = { 
    auth: { 
      username: process.env.GRIDSOME_CAMUNDA_USER, 
      password:  process.env.GRIDSOME_CAMUNDA_PASSWORD 
    } 
  } 

  /**
   * start
   * @CamundaRequest request: The request camunda with variables
   * @return Promise function with type void
   */
  async start(request: CamundaRequest): Promise<StepResponse> {
    const result = await axios.post(
      `/${this.path}/${process.env.GRIDSOME_CAMUNDA_PROCESS_ID}/start`,
      serialize(request),
      this.headers
    );
    return result.data;
  }

  /**
   * next
   * @CamundaRequest request: The request camunda with variables
   * @return Promise function with type void
   */
  async next(request: CamundaRequest): Promise<StepResponse> {
    const result = await axios.post(
      `/${this.path}/${process.env.GRIDSOME_CAMUNDA_PROCESS_ID}/next`,
      serialize(request),
      this.headers
    );
    return result.data;
  }
}
