// Interfaces
import IApiService from "Interfaces/api/api.interface";
// Models
// import { Api } from "Models/api/api.model";
// Dependencies
import { injectable } from "inversify-props";
import axios from "axios";

@injectable()
export default class ApiService implements IApiService {
  private path = "api";

  /**
   * getApiCards
   * @return Promise function with api data
   */
  async getApiCards(): Promise<void> {
    try {
      await axios.get(`${this.path}/api-cards`);
    } catch (error) {
      console.log("Error: " + error + " - " + typeof error);
      throw Error(error);
    }
  }
}
