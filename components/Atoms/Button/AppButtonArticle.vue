<template>
    <div>
        <button class="app-button" @click="click">
            <div v-if="state === 'input'">
                <div>
                    <img
                        src="~/assets/img/icon/lv1/icon/file/alt/solidarticle-black.svg"
                    />
                </div>
                <span>
                    記事コンテンツ
                    <br />を作成
                </span>
                <div>
                    <img
                        src="~/assets/img/icon/lv1/icon/arrow/right/regular_2article-arrow-right.svg"
                    />
                </div>
            </div>
            <div v-if="state === 'complete'">
                <div>
                    <img
                        src="~/assets/img/icon/lv1/icon/file/alt/lightarticle-white.svg"
                    />
                </div>
                <span>入力を完了する</span>
                <div>
                    <img
                        src="~/assets/img/icon/lv1/icon/arrow/left/regular_2article-arrow-left.svg"
                    />
                </div>
            </div>
        </button>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from "nuxt-property-decorator";

@Component({})
export default class AppButton extends Vue {
    @Prop() public state!: string;

    @Emit("click")
    public click() {}
}
</script>

<style lang="stylus" scoped>
.app-button {
    // @extend $button_secondary_base;
    width: 200px;
    height: 200px;

    &:hover {
        img {
            filter: brightness(0) invert(1);
        }
    }
}
</style>
