//Models
import { ApiCreation } from 'Models/api/api-creation';

/**
 * request send to camunda to start process or go to next
 * @class
 */
export class CamundaRequest {
    variables: ApiCreation | FormData; 
}