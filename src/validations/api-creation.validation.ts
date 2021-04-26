// Dependencies
import { required, url } from "vuelidate/lib/validators";
// Utils
import { Checker } from "Utils/checker";

/**
 * Validation model for the creation of an api
 * @const
 */
export const ValidationApiModel = {
  api: {
    productName: {
      required,
    },
    organization: {
      required,
    },
    swagger: {
      required,
      fileFormat(api: any) {
        return (
          api !== undefined && Checker.allowedFormat(api.name, ["json", "yaml"])
        );
      },
    },
    overview: {
      required,
      fileFormat(api: any) {
        return api !== undefined && Checker.allowedFormat(api.name, ["html"]);
      },
    },
    documentation: {
      required,
      fileFormat(api: any) {
        return api !== undefined && Checker.allowedFormat(api.name, ["html"]);
      },
    },
    host: {
      required,
      url,
    },
    authorizationModel: {
      required,
    },
    authorizationTokenUrl: {
      required,
      url,
    },
    authorizationUrl: {
      required,
      url,
    },
  },
};
