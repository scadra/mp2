//Models
import { ApiCreation } from "Models/api/api-creation";

/**
 * step response after a start or next process
 * @interface
 */
export interface StepResponse {
  complete: boolean;
  error: string;
  msgDetail: string;
  nextStep: string;
  processInstanceId: string;
  variables: ApiCreation;
}
