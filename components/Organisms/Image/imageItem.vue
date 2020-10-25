<template>
    <div v-if="imageMast">
        <img class="image_item_image" :src="b64Local" />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop, Emit } from "nuxt-property-decorator";
import { S3Object } from "iwashi_abr_1023/iwashiabr";
import { hostStorageInteractor } from "@/client/amplify/storage";

@Component({
    components: {}
})
export default class ImageItem extends Vue {
    @Prop() public imageMast!: S3Object;
    public b64Local: string | null = null;
    public async created() {
        this.b64Local = hostStorageInteractor.getImageUrl(this.imageMast);
    }
}
</script>
<style scoped lang="stylus">
.image_item_image {
    width: 100%;
    height: 100%
}
</style>
