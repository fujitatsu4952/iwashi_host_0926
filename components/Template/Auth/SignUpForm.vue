<template>
    <div class="sign-form-container">
        <app-title value="新規ユーザー登録"></app-title>
        <validation-observer v-slot="{ invalid }">
            <company-policy class="company-policy"></company-policy>
            <div class="flex">
                <app-toggle name="SignUpAgree" v-model="isAgree" />
                <div
                    @click="isAgree ? (isAgree = false) : (isAgree = true)"
                    style="color: black"
                >
                    上記に同意する
                </div>
            </div>
            <div class="sign-policy-container">
                必ず
                <a style="color: red">利用規約</a>
                /
                <a style="color: red">プライバシーポリシー</a>
                に同意の上でご利用ください。
            </div>
            <div class="sign-input-container">
                <app-input
                    v-model="newEmail"
                    name="登録用メールアドレス"
                    rule="required|email"
                    placeholder="登録用メールアドレス"
                ></app-input>
            </div>
            <div class="sign-input-container">
                <app-password-input
                    v-model="newPassword"
                    name="パスワード（8文字以上/英大小字/数字/記号の各要素が必須です）"
                    :rule="{
                        regex,
                    }"
                    placeholder="パスワード（8文字以上/英大小字/数字/記号の各要素が必須）"
                ></app-password-input>
            </div>
            <div class="sign-button-container">
                <app-button
                    class="sign-button"
                    @click="signUp"
                    :disabled="invalid || !isAgree"
                    >登録申請する</app-button
                >
            </div>
        </validation-observer>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from "nuxt-property-decorator";
import { hostUserAuthInteractor } from "@/client/amplify/auth";
// import { infoStore } from '@/store';
import AppTitle from "@/components/Atoms/Text/AppTextH2.vue";
import AppInput from "@/components/Atoms/Input/AppInput.vue";
import AppPasswordInput from "@/components/Atoms/Input/AppInputPassword.vue";
import AppButton from "@/components/Atoms/Button/AppButton.vue";
import AppToggle from "@/components/Atoms/Input/AppInputToggle.vue";

@Component({
    components: {
        AppInput,
        AppPasswordInput,
        AppTitle,
        AppButton,
        AppToggle,
    },
})
export default class SignUpForm extends Vue {
    public regex = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$*.{}?\"!@#%&/,><':;|_~`^\\]\\[\\)\\(]).{6,}"
    );
    public newEmail: string = "";
    public newPassword: string = "";
    public verifyCode: string = "";
    public isAgree: boolean = false;

    @Prop() public emailSended!: boolean;
    @Emit("update:emailSended") public emitemailSended(emailSended: boolean) {}
    public get localemailSended() {
        return this.emailSended;
    }
    public set localemailSended(emailSended: boolean) {
        this.emitemailSended(emailSended);
    }

    public async signUp(): Promise<void> {
        try {
            await hostUserAuthInteractor.signUp(
                this.newEmail,
                this.newPassword
            );
            // infoStore.addInfo({
            //     type: 'INFO',
            //     message: {
            //         default: '認証メールを送信いたしました。メールをご確認ください。',
            //     },
            // });
            this.localemailSended = !this.localemailSended;
        } catch (err) {
            throw console.log(err);
        }
    }
}
</script>
<style lang="stylus" scoped>
.sign-form-container {
    .sign-input-container {
        margin: $margin_sign_input_container;

        .company-policy {
            margin-top: 40px;
        }
    }

    .flex {
        display: flex;
        justify-content: center;
        cursor: pointer;
    }

    .sign-policy-container {
        margin: 0px 3px 10px;
        font-size: 12px;
    }

    .sign-button-container {
        .sign-button {
            width: $percent_width_sign_button_container;
        }
    }
}
</style>
