<template>
    <div class="contents-container">
        <div class="auth-contents-container" v-if="!emailSended">
            <forgot-password :emailSended.sync="emailSended"></forgot-password>
            <div class="auth-contents-link-container">
                <nuxt-link :to="{ name: 'auth-signin' }">
                    <span class="auth-contents-link-signin"
                        >ログインページへ戻る>></span
                    >
                </nuxt-link>
            </div>
        </div>
        <!-- <app-auth-mail v-if="emailSended" class="email-sended-container"></app-auth-mail> -->
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { hostUserAuthInteractor } from "@/client/amplify/auth";
// import { infoStore } from "@/store";
import ForgotPassword from "@/components/Template/Auth/ForgotPassword.vue";
// import AppAuthMail from "@/components/Organisms/Notify/AppAuthMail.vue";

@Component({
    components: {
        ForgotPassword,
        // AppAuthMail,
    },
})
export default class SignIn extends Vue {
    public emailSended: boolean = false;
}
</script>
<style lang="stylus" scoped>
.contents-container {
    padding: $padding_auth_container;
    display: inline-block;
    min-width: $min_width_auth_contents;

    .logo-container {
        margin: $margin_logo_container;
    }

    .auth-contents-container {
        background-color: $backgournd_color__auth_contents_container;
        padding: $padding_auth_contents_container;
        border-radius: $border_radius_auth_contents_container;

        .auth-contents-link-container {
            text-align: right;

            .auth-contents-link-signin {
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }

    .email-sended-container {
        background-color: $backgournd_color__auth_contents_container;
        border-radius: $border_radius_auth_contents_container;
        padding: 100px 20px; // konopaddinghaめーる文言だけでは小さくなりすぎてしまうために置いている。
    }
}
</style>
