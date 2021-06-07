import { required, email } from "vuelidate/lib/validators";

export const ResetPasswordValidation = {
  email: {
    required,
    email,
  },
};
