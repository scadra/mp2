// Dependencies
import { container } from 'inversify-props';
// Interfaces
import IConfigurationService from "Interfaces/configuration.interface";
// Services
import ConfigurationService from "Services/configuration.service";

/**
 * Container for services
 * @void
 */
export default function buildDependencyContainer(): void {
    container.addTransient<IConfigurationService>(ConfigurationService);
}
  