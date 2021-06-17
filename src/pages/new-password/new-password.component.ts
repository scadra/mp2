import { ResetPassword } from "Models/user/reset-password";
import Vue from "vue";
import { Prop, Component } from "vue-property-decorator";
import NewPasswordForm from "Components/reset/new-password-form/new-password-form.vue";
import { Validations } from "vuelidate-property-decorators";
import { NewPasswordValidation } from "Validations/new-password.validation";
import { namespace } from "vuex-class";
import Notification from "Components/shared/notification/notification.vue";

const AuthenticationStore = namespace("AuthenticationStore");

@Component({
  metaInfo: {
    title: "Reset password",
  },
  components: {
    NewPasswordForm,
    Notification,
  },
})
export default class ResetPasswordForm extends Vue {
  @Prop() email!: string;
  @Prop() validator!: string;

  @AuthenticationStore.Action
  changePassword!: (resetPassword: ResetPassword) => Promise<void>;

  @AuthenticationStore.Action
  reinitMessage!: () => void;

  @AuthenticationStore.Getter
  returnIsLoading!: () => boolean;

  @AuthenticationStore.Getter
  returnErrorMessage!: () => string | null;

  resetPassword: ResetPassword = new ResetPassword(
    this.$route.query.email as string,
    this.$route.query.validator as string
  );

  beforeMount(): void {
    this.reinitMessage();
  }

  @Validations() validation = NewPasswordValidation;

  async sendPassword(): Promise<void> {
    await this.changePassword(this.resetPassword);
    if (this.returnErrorMessage === null) {
      this.$router.push("/login?passwordUpdated=true");
    }
  }
}
