import { injectable } from "inversify-props";
import IConfigurationService from "Interfaces/configuration.interface";

@injectable()
export default class ConfigurationService implements IConfigurationService {
  async getConfig(key: string): Promise<string> {
    let url =
      process.env.GRIDSOME_APP_CONFIG_LOCATION !== ""
        ? process.env.GRIDSOME_APP_CONFIG_LOCATION
        : "/configuration.json";
    let data = await fetch(url as RequestInfo);
    let json = await data.json();
    return json[key];
  }
}
