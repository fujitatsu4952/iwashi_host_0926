<template>
    <div class="sign-form-container">
        <app-title value="ログイン"></app-title>
        <!-- <validation-observer v-slot="{ invalid }"> -->
        <div class="sign-input-container">
            <app-input
                v-model="loginEmail"
                name="メールアドレス"
                rule="required|email"
                placeholder="メールアドレス"
            ></app-input>
        </div>
        <div class="sign-input-container">
            <app-password-input
                v-model="loginPassword"
                name="パスワード（8文字以上/英大小字/数字/記号の各要素が必須です）"
                :rule="{
                    regex,
                }"
                placeholder="パスワード（8文字以上/英大小字/数字/記号の各要素が必須）"
            ></app-password-input>
        </div>
        <div class="sign-button-container">
            <app-button class="sign-button" @click="signIn"
                >ログイン</app-button
            >
        </div>
        <!-- </validation-observer> -->
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { hostUserAuthInteractor } from "@/client/amplify/auth";
// import { getUniqueID } from 'chillnn-abr-hotel';
import AppTitle from "@/components/Atoms/Text/AppTextH2.vue";
import AppInput from "@/components/Atoms/Input/AppInput.vue";
import AppPasswordInput from "@/components/Atoms/Input/AppInputPassword.vue";
import AppButton from "@/components/Atoms/Button/AppButton.vue";

@Component({
    components: {
        AppInput,
        AppPasswordInput,
        AppTitle,
        AppButton,
    },
})
export default class SignInForm extends Vue {
    public regex = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$*.{}?\"!@#%&/,><':;|_~`^\\]\\[\\)\\(]).{6,}"
    );
    public loginEmail: string = "";
    public loginPassword: string = "";
    public show: boolean = true;

    public async signIn(): Promise<void> {
        try {
            await hostUserAuthInteractor.signIn(
                this.loginEmail,
                this.loginPassword
            );
        } catch (err) {
            console.log(err);
        }
        const user = await hostUserAuthInteractor.isSignIn();
        console.log(user);
        this.$router.push({ name: "index" });
    }
}
</script>
<style lang="stylus" scoped>
.sign-form-container {
    .sign-input-container {
    }

    .sign-button-container {
        .sign-button {
        }
    }
}
</style>
