<template>
    <div>
        <image-list
            :imageMasts="imageMasts"
            v-model="mainKeyVisual"
            @addImage="uploadImageAndRegister"
        />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop, Emit } from "nuxt-property-decorator";
import { hostStorageInteractor } from "@/client/amplify/storage";
import { getUniqueID } from "@/Util/generateUuid";
import { S3Object } from "iwashi_abr_1023/iwashiabr";
import { imageInteractor } from "@/abr/index";
// components
import ImageList from "@/components/Template/Images/listEdit.vue";
import AppButton from "@/components/Atoms/Button/AppButtonSave.vue";
import SingleImage from "@/components/Molecules/AppImageUpload/SingleImage.vue";

@Component({
    layout: "hotelDefault",
    components: { ImageList, AppButton, SingleImage }
})
export default class PageImageTable extends Vue {
    public mainKeyVisual: File | null = null;
    public newS3Object: S3Object | null = null;
    public imageMasts: S3Object[] | null | undefined = null;
    public async created() {
        this.imageMasts = await imageInteractor.fetchPlanMasts(undefined);
    }
    public async uploadImageAndRegister() {
        console.log("ここは作動しているのだろうか");
        try {
            if (this.mainKeyVisual) {
                this.newS3Object = await hostStorageInteractor.uploadPublicImg(
                    `images`,
                    `main-kv-image.${new Date().getTime()}`,
                    this.mainKeyVisual
                );
                console.log(this.imageMasts);
                let response = await imageInteractor.addMast(this.newS3Object);
            }
        } catch (err) {
            console.log(err);
        }
    }
}
</script>

<style></style>
