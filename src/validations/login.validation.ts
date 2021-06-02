// Dependencies
import { required, email } from "vuelidate/lib/validators";

/**
 * Validation model for the creation of an user
 * @const
 */
export const ValidationLoginModel = {
    user : {
        username : {
            required, email
        },
        password: {
            required
        }
    }
}