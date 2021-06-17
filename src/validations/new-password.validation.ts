import { required, minLength, sameAs } from "vuelidate/lib/validators";

export const NewPasswordValidation = {
  resetPassword: {
    email: {
      required,
    },
    validation: {
      required,
    },
    password: {
      required,
      valid: function(value: string): boolean {
        const containsUppercase = /[A-Z]/.test(value);
        const containsLowercase = /[a-z]/.test(value);
        const containsNumber = /[0-9]/.test(value);
        const containsSpecial = /[#?!@$%^&*-]/.test(value);
        return (
          containsUppercase &&
          containsLowercase &&
          containsNumber &&
          containsSpecial
        );
      },
      minLength: minLength(10),
    },
    repeatPassword: {
      required,
      sameAsPassword: sameAs('password')
    }
  },
};
