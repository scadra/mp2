import ConfigurationService from 'Services/configuration.service';
import IConfigurationService  from 'Interfaces/configuration.interface';
// Dependencies
import { container } from 'inversify-props';
// Interfaces
import ICamundaService from 'Interfaces/api/camunda.interface';
import IAuthenticationService from 'Interfaces/api/authentication.interface';
// Services
import CamundaService from 'Services/api/camunda.service';
import AuthenticationService from 'Services/api/authentication.service';

/**
 * Container for services
 * @void
 */
export default function buildDependencyContainer(): void {
    container.addSingleton<ICamundaService>(CamundaService);
    container.addSingleton<IConfigurationService>(ConfigurationService)
    container.addSingleton<IAuthenticationService>(AuthenticationService);
}
  