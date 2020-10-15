<template>
    <div class="chillnn__editor__content" :style="styleLocal">
        <div class="chillnn__editor__bg-mask" :style="isShadow">
            <template v-if="noChangeBgImg === false">
                <div @click="click" class="img-icon">
                    <img src="~/assets/img/icon/images-light.svg" class />
                </div>
                <input class="single-image__input" type="file" @change="getImageFile" id="bgimage" />
            </template>
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch } from 'nuxt-property-decorator';
import { S3Object } from 'chillnn-abr-hotel';
import { hostStorageInteractor } from '@/amplify/storage';
import { resizeImage, base64ToFile } from '@/util/imageUtil';
// mixins
import SingleImage from '@/components/Molecules/AppImageUpload/SingleImage.vue';

@Component({
    mixins: [SingleImage],
})
export default class EditBackgroundImage extends Vue {
    // 設定パラメーター
    @Prop({ default: false }) public noBgImg!: string | boolean; // BGなし
    @Prop({ default: false }) public noChangeBgImg!: string; // BGの変更なし
    @Prop({ default: false }) public noShadow!: boolean; // BGにshadowをかけない

    public get showBGImg() {
        if (this.noBgImg !== false) {
            return false;
        }
        return true;
    }

    @Prop() s3Object!: S3Object;
    public b64Local: string | null = null;
    // BackGround
    public style() {
        if (this.showBGImg) {
            return {
                backgroundImage: `url(${this.b64Local || hostStorageInteractor.getImageUrl(this.s3Object)})`,
            };
        }
        return {};
    }
    public get isShadow() {
        if (this.noShadow === false && !this.b64Local) {
            return {
                backgroundColor: 'black',
            };
        }
        return {
            backgroundColor: 'white',
        };
    }
    public styleLocal: {} = {};
    @Watch('b64Local')
    public watchStyle() {
        if (this.b64Local) {
            this.styleLocal = this.style();
        }
    }
    public click() {
        const element = document.getElementById('bgimage')!;
        element.click();
    }
}
</script>
<style lang="stylus" scoped>
.chillnn__editor__content {
    background-repeat: no-repeat;
    background-attachment: fixed;
    // background-color: black;
    background-size: cover;
    background-position: center;
    background-blend-mode: lighten;
    position: relative;
    z-index: 0;

    .chillnn__editor__bg-mask {
        padding: 80px 50px;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);

        .img-icon {
            cursor: pointer;

            img {
                filter: brightness(0) invert(1);
            }
        }

        .single-image__input {
            display: none;
        }
    }
}

.chillnn__editor__content::before {
    content: '';
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background: inherit;
    filter: blur(5px);
    /* position:absoluteのせいで最前面に来てしまうため */
    z-index: -1;
}
</style>
