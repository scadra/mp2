// Dependencies
import { container } from 'inversify-props';
// Interfaces
import IConfigurationService from "Interfaces/configuration.interface";
import ICamundaService from 'Interfaces/api/camunda.interface';
// Services
import ConfigurationService from "Services/configuration.service";
import CamundaService from 'Services/api/camunda.service';

/**
 * Container for services
 * @void
 */
export default function buildDependencyContainer(): void {
    container.addTransient<IConfigurationService>(ConfigurationService);
    container.addTransient<ICamundaService>(CamundaService);
}
  