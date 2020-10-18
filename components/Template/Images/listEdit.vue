<template>
    <div>
        <app-button @click="addImage">画像を追加</app-button>
        <single-image :file.sync="localValue" />
        <div v-if="imageMasts" class="image_items_container">
            <div
                class="image_item"
                v-for="imageMast in imageMasts"
                :key="imageMast.imageID"
            >
                <image-item :imageMast="imageMast" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop, Emit } from "nuxt-property-decorator";
import { S3Object } from "@/entity/type";
import { getUniqueID } from "@/Util/generateUuid";
import Methods from "@/methods/planMethods";

import SingleImage from "@/components/Molecules/AppImageUpload/SingleImage.vue";
import ImageItem from "@/components/Organisms/Image/imageItem.vue";
import AppButton from "@/components/Atoms/Button/AppButtonSave.vue";

@Component({
    components: { SingleImage, ImageItem, AppButton }
})
export default class ImageList extends Vue {
    @Prop() public imageMasts: S3Object[] | null | undefined;
    @Prop() public value!: File;
    // ========= v-model ==========
    @Emit("input")
    public input(value: File) {}
    private get localValue(): File {
        return this.value;
    }
    private set localValue(value: File) {
        this.input(value);
    }

    @Emit("addImage") public addImage(file: File | null) {}
}
</script>

<style lang="stylus" scoped>
.image_items_container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 50px 0 0 0;
    .image_item {
        width: 30%;
    }
}
</style>
