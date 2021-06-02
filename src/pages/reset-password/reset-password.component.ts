// Dependencies
import { Component } from "vue-property-decorator";
import Vue from "vue";
import ResetForm from "Components/reset/reset-form/reset-form.vue";
import { Validations } from "vuelidate-property-decorators";
import { ResetPasswordValidation } from "Validations/reset-password.validation";
import { namespace } from "vuex-class";

const AuthenticationStore = namespace("AuthenticationStore");

@Component({
    metaInfo: "Reset password",
    components: {
        ResetForm
    }
})
export default class ResetPassword extends Vue {
    email: String = '';

    @Validations() validation = ResetPasswordValidation;

    @AuthenticationStore.Action
    resetPassword!: (email: String) => Promise<void>

    @AuthenticationStore.Getter
    returnIsLoading!: () => boolean

    async reset() {
        await this.resetPassword(this.email)
    }
}