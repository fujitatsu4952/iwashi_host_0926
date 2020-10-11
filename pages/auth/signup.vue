<template>
    <div class="container">
        <div>
            <h1 class="title">サインアップ</h1>

            <p>メールアドレスは？</p>
            <input type="text" v-model="newEmail" />
            <p>パスワードは？</p>
            <input type="text" v-model="newPassword" />
            <button @click="signUp">登録！</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator";
import { hostUserAuthInteractor } from "@/client/amplify/auth";

@Component({
    components: {},
})
export default class BookingPage extends Vue {
    public newEmail: string = "";
    public newPassword: string = "";

    public async signUp(): Promise<void> {
        try {
            await hostUserAuthInteractor.signUp(
                this.newEmail,
                this.newPassword
            );
        } catch (err) {
            console.log(err);
            if ((err.code = "UsernameExistsException")) {
                console.log(this.newEmail);
                await hostUserAuthInteractor.signUpResend(this.newEmail);
            }
        }
    }

    public goPlan() {
        this.$router.push({ name: "items-plan" });
    }
    public goRoom() {
        this.$router.push({ name: "items-room" });
    }
    public goPolicy() {
        this.$router.push({ name: "items-policy" });
    }
}
</script>
<style scoped lang="stylus">
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}
</style>
