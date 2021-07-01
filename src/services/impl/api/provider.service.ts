// Interfaces
import IProviderService from "Interfaces/api/provider.interface";
// Dependencies
import { injectable } from "inversify-props";
import axios from "axios";

@injectable()
export default class ProviderService implements IProviderService {
  private path = "api";

  /**
   * getApiCards
   * @return Promise function with api data
   */
  async getApiProviders(): Promise<void> {
    try {
      await axios.get(`${this.path}/api-providers`);
    } catch (error) {
      throw Error(error);
    }
  }
}
