<template>
    <div class="sign-form-container">
        <app-title value="新規パスワード設定"></app-title>
        <app-text value="新規パスワードを設定してください。"></app-text>
        <div class="sign-input-container">
            <app-input
                v-model="newPassword"
                name="新規パスワード（英大小字/数字/記号）"
                :rule="{
                    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&])[A-Za-z\d#$^+=!*()@%&]{8,}$/,
                }"
                placeholder="新規パスワード（英大小字/数字/記号）"
            ></app-input>
        </div>
        <div class="sign-button-container">
            <app-button
                class="sign-button"
                @click="resetPasswordConfirm"
                :disabled="invalid"
                >パスワードをリセット</app-button
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
export default class SignIn extends Vue {
    @Prop({ required: true }) public loginEmail!: string;
    @Prop({ required: true }) public verifyCode!: string;
    public newPassword: string = "";

    public async resetPasswordConfirm(): Promise<void> {
        try {
            await hostUserAuthInteractor.resetPasswordConfirm(
                this.loginEmail,
                this.verifyCode,
                this.newPassword
            );
            this.$router.push({ name: "auth-signin" });
        } catch (err) {
            throw console.log(err);
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
