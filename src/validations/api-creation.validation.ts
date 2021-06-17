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
      fileFormat(api: File): boolean {
        return (
          api !== undefined && Checker.allowedFormat(api.name, ["json", "yaml"])
        );
      },
    },
    overview: {
      required,
      fileFormat(api: File): boolean {
        return (
          api !== undefined &&
          Checker.allowedFormat(api.name, ["zip", "rar", "7z"])
        );
      },
    },
    documentation: {
      required,
      fileFormat(api: File): boolean {
        return (
          api !== undefined &&
          Checker.allowedFormat(api.name, ["zip", "rar", "7z"])
        );
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
