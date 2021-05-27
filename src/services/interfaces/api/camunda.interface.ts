import { CamundaRequest } from 'Models/api/camunda-request';
import { StepResponse } from 'Models/step/step-response';

//Default interface of camunda service
export default interface ICamundaService {
    start(request: CamundaRequest): Promise<StepResponse>;
    next(request: CamundaRequest): Promise<StepResponse>;
}
