<template>
    <div class="auth-contents-container">
        <sign-in-form></sign-in-form>
        <div class="auth-contents-link-container">
            <nuxt-link :to="{ name: 'auth-signup' }">
                <span class="auth-contents-link-signin"
                    >新規ユーザー登録>></span
                >
            </nuxt-link>
        </div>
        <div class="auth-contents-link-container">
            <nuxt-link :to="{ name: 'auth-forgotpassword' }">
                <span class="auth-contents-link-signin"
                    >パスワードを忘れた場合>></span
                >
            </nuxt-link>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
// component
import SignInForm from "@/components/Template/Auth/SignInForm.vue";

@Component({
    components: {
        SignInForm,
    },
})
export default class SignIn extends Vue {}
</script>