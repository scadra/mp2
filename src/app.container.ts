import ConfigurationService from "Services/configuration.service";
import IConfigurationService from "Interfaces/configuration.interface";
// Dependencies
import { container } from "inversify-props";

/**
 * Container for services
 * @void
 */
export function buildDependencyContainer(): void {
  container.addSingleton<IConfigurationService>(ConfigurationService);
}
