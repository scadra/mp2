import { injectable } from "inversify-props";
import IConfigurationService from "Interfaces/configuration.interface";

@injectable()
export default class ConfigurationService implements IConfigurationService {
  async getConfig(key: string): Promise<string> {
    const url =
      process.env.GRIDSOME_APP_CONFIG_LOCATION !== ""
        ? process.env.GRIDSOME_APP_CONFIG_LOCATION
        : "/configuration.json";
    const data = await fetch(url as RequestInfo);
    const json = await data.json();
    return json[key];
  }
}
