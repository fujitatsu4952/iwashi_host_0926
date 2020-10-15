<template>
    <div class="contents-container">
        <div class="auth-contents-container" v-if="loginEmail && verifyCode">
            <reset-password
                :loginEmail="loginEmail"
                :verifyCode="verifyCode"
            ></reset-password>
        </div>
        <div class="auth-contents-link-container">
            <nuxt-link :to="{ name: 'auth-signin' }">
                <span class="auth-contents-link-signin"
                    >ログインページへ戻る>></span
                >
            </nuxt-link>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import ResetPassword from "@/components/Template/Auth/ResetPassword.vue";
@Component({
    components: {
        ResetPassword,
    },
})
export default class SignIn extends Vue {
    public loginEmail: string = "";
    public verifyCode: string = "";
    public async created() {
        this.loginEmail = unescape(this.$route.query.username as string);
        this.verifyCode = unescape(this.$route.query.verify_code as string);
        if (!(this.loginEmail && this.verifyCode)) {
            alert("パスワード再設定メールを確認してください。");
        }
    }
}
</script>
<style lang="stylus" scoped>
.contents-container {
    display: inline-block;
    // padding: $padding_auth_container;
    // min-width: $min_width_auth_contents;

    .logo-container {
        // margin: $margin_logo_container;
    }

    .auth-contents-container {
        // background-color: $backgournd_color__auth_contents_container;
        // padding: $padding_auth_contents_container;
        // border-radius: $border_radius_auth_contents_container;

        .auth-contents-link-container {
            text-align: right;

            .auth-contents-link-signin {
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
}
</style>
