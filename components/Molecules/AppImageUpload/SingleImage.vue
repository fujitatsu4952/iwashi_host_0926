<template>
    <div class="single-image">
        <label
            class="single-image__label"
            v-show="!b64Local"
            @change="getImageFile"
        >
            <input class="single-image__input" type="file" />
            <!-- 以下は装飾 -->
        </label>
        <!-- <div v-if="b64Local" class="single-image__image-item">
      <image-item :src="b64Local" @delete-img="removeImg" />
    </div> -->

        <span style="display: none;">
            <input v-model="b64Local" type="text" />
        </span>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Emit, Prop, Watch } from "nuxt-property-decorator";
import { getImage, readUploadedFileAsBase64 } from "@/Util/imageUtil";
import { S3Object } from "iwashi_abr_1023/iwashiabr";
import { hostStorageInteractor } from "@/client/amplify/storage";
// component
import ImageItem from "./ImageItem.vue";

@Component({
    components: {
        ImageItem
    }
})
export default class ImageUploadSingle extends Vue {
    @Prop() s3Object!: S3Object;

    // file
    @Prop() file!: File | null;
    @Emit("update:file") public emitFile(file: File | null) {}
    public get localFile() {
        return this.file;
    }
    public set localFile(file: File | null) {
        this.emitFile(file);
    }

    public b64Local: string | null = null;

    public async getImageFile(event: any) {
        const imageData = await getImage(event);
        // データの取得
        this.b64Local = imageData.base64;
        // Emit
        this.emitFile(imageData.file);
    }

    @Watch("file")
    public async changeView() {
        if (this.localFile) {
            this.b64Local = await readUploadedFileAsBase64(this.localFile);
        }
    }

    public removeImg() {
        this.b64Local = null;
        this.emitFile(null);
    }
}
</script>

<style lang="stylus" scoped>
// .single-image {
//     margin: 0 0 1rem;
// }

// .single-image__label {
//     position: relative;
//     display: block;
//     max-width: 630px;
//     margin: 0 0 2rem;
// }

// .single-image__input {
//     position: absolute;
//     display: block;
//     width: 100%;
//     height: 160px;
//     border-width: inherit;
//     border-width: inherit;
//     cursor: pointer;
//     opacity: 0;
// }

// .single-image__input-box {
//     border: 1px solid #969696;
//     border-radius: 5px;
//     box-sizing: border-box;
//     color: #969696;
//     cursor: pointer;
//     padding: 2.3rem 1rem;
//     text-align: center;

//     & img {
//         width: 40px;
//         height: auto;
//     }
// }

// .single-image__input-box__text {
//     margin: 0;
// }

// .single-image__input-box__sub-text {
//     font-size: 12px;
// }

// .single-image__image-item {
//     width: 100%;
//     max-width: 400px;
// }
</style>
