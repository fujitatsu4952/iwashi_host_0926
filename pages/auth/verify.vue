<template></template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { hostUserAuthInteractor } from "@/client/amplify/auth";

@Component({})
export default class VerifyEmail extends Vue {
    public async created() {
        try {
            if (process.client) {
                await hostUserAuthInteractor.signUpConfirmed(
                    unescape(this.$route.query.username as string),
                    unescape(this.$route.query.verify_code as string)
                );
                this.$router.push({
                    name: "auth-signin",
                });
            }
        } catch (err) {
            // 再度ログイン時のエラー
            if (
                err.message ===
                    "User cannot be confirmed. Current status is CONFIRMED" ||
                err.message ===
                    "Invalid code provided, please request a code again."
            ) {
                this.$router.push({
                    name: "auth-signin",
                });
                return;
            }
            throw console.log(err);
        }
    }
}
</script>
