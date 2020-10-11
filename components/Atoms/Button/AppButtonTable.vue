<template>
    <div class="table_button" @click="click">
        <div
            class="table_button_img"
            @mouseover="isShow = true"
            @mouseleave="isShow = false"
        >
            <slot></slot>
        </div>
        <div>
            <transition name="tablebutton">
                <span class="table_button_explanation" v-show="isShow">{{
                    explanation
                }}</span>
            </transition>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit } from "nuxt-property-decorator";

@Component({})
export default class AppTableButton extends Vue {
    @Prop() public explanation!: string;
    public isShow: boolean = false;

    @Emit() public click() {}
}
</script>

<style lang="stylus" scoped>
.table_button {
    width: 36px;
    height: 36px;
    border: 1px solid #979797;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0.5;
    text-align: center;

    &:hover {
        opacity: 1;
    }

    .table_button_img {
        position: relative;
        top: 6px;
    }

    .table_button_explanation {
        position: relative;
        top: 8px;
    }

    .tablebutton-enter-active, .tablebutton-leave-active {
        transition: opacity 0.5s;
    }

    .tablebutton-enter, .tablebutton-leave-to {
        opacity: 0;
    }
}
</style>
