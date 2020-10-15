<template>
    <div class="container">
        <div>
            <h1 class="title">iwashi200915</h1>
            <button @click="goPlan">プラン作成</button>
            <button @click="goRoom">ルーム作成</button>
            <button @click="goPolicy">ポリシー作成</button>
            <single-image :file.sync="mainKeyVisual" />
            <button @click="uploadImageAndRegister">画像をあげる</button>
            {{ mainKeyVisual }}
            <div>
                <button @click="signOut">サインアウトする</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator";
import { hostUserAuthInteractor } from "@/client/amplify/auth";
import { hostStorageInteractor } from "@/client/amplify/storage";
import { Auth } from "@/client/abr/decorator/authDecorator";
import SingleImage from "@/components/Molecules/AppImageUpload/SingleImage.vue";

@Component({
    layout: "hotelDefault",
    components: { SingleImage }
})
export default class BookingPage extends Vue {
    public newEmail: string = "";
    public newPassword: string = "";
    public mainKeyVisual: File | null = null;

    @Auth
    public async created() {
        const user = await hostUserAuthInteractor.isSignIn();
        console.log(await hostUserAuthInteractor.getSignInfo());
        console.log(user);
        console.log("これは正常に作動しているのだろうか？");
    }

    /**
     * 画像のアップロード
     */
    public async uploadImageAndRegister() {
        try {
            if (this.mainKeyVisual) {
                await hostStorageInteractor.uploadPublicImg(
                    `tryed`,
                    "main-kv-image",
                    this.mainKeyVisual
                );
            }
        } catch (err) {
            console.log(err);
        }
    }

    public async signOut(): Promise<void> {
        try {
            await hostUserAuthInteractor.signOut();
        } catch (err) {
            console.log(err);
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
