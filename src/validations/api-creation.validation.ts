import { ApiCreation } from "Models/api/api-creation";
import { required, requiredIf } from "vuelidate/lib/validators";
import { Checker } from "Utils/checker";

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
  },
};
