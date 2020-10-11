<template>
    <span>
        <button class="app-save-button" @click="click" :disabled="disabled">
            <!-- 文言の入力だけ流し込んでもらう -->
            <slot></slot>
        </button>
    </span>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from "nuxt-property-decorator";

@Component({})
export default class AppSaveButton extends Vue {
    @Prop() public disabled?: boolean;
    @Emit("click")
    public click() {}
}
</script>
<style lang="stylus" scoped>
.app-save-button {
    min-width: 180px;
    height: 40px;
    line-height: 36px;
    @extend $button_primary_base;
}
</style>
