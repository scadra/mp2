// Interfaces
import IApiService from "Interfaces/api/api.interface";
// Dependencies
import axios from "axios";

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
      throw Error(error);
    }
  }
}
