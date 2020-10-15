<template>
    <div class="sign-form-container">
        <app-title value="パスワードをリセット"></app-title>
        <app-text
            value="登録されたメールアドレスを元にパスワードをリセットします。"
        ></app-text>
        <div class="sign-input-container">
            <app-input
                v-model="loginEmail"
                name="登録済メールアドレス"
                rule="required|email"
                placeholder="登録済メールアドレス"
            ></app-input>
        </div>
        <div class="sign-button-container">
            <app-button class="sign-button" @click="forgotPassword"
                >認証コード送信</app-button
            >
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "nuxt-property-decorator";
import { hostUserAuthInteractor } from "@/client/amplify/auth";
// import { infoStore } from '@/store';
import AppText from "@/components/Atoms/Text/AppTextH4.vue";
import AppTitle from "@/components/Atoms/Text/AppTextH2.vue";
import AppInput from "@/components/Atoms/Input/AppInput.vue";
import AppButton from "@/components/Atoms/Button/AppButton.vue";

@Component({
    components: {
        AppText,
        AppTitle,
        AppInput,
        AppButton,
    },
})
export default class forgotPassword extends Vue {
    public loginEmail: string = "";
    public newPassword: string = "";
    public verifyCode: string = "";

    @Prop() public emailSended!: boolean;
    @Emit("update:emailSended") public emitemailSended(emailSended: boolean) {}
    public get localemailSended() {
        return this.emailSended;
    }
    public set localemailSended(emailSended: boolean) {
        this.emitemailSended(emailSended);
    }

    public async forgotPassword(): Promise<void> {
        try {
            await hostUserAuthInteractor.forgotPassword(this.loginEmail);
            // infoStore.addInfo({
            //     type: 'INFO',
            //     message: {
            //         default: '認証メールを送信いたしました。メールをご確認ください。',
            //     },
            // });
            this.localemailSended = !this.localemailSended;
        } catch (err) {
            console.log(err);
        }
    }
}
</script>
<style lang="stylus" scoped>
.sign-form-container {
    .sign-input-container {
        // margin: $margin_sign_input_container;
    }

    .sign-button-container {
        .sign-button {
            // width: $percent_width_sign_button_container;
        }
    }
}
</style>
