<template>
    <div class="expand_accordion">
        <!-- Title -->
        <div class="item_title" :class="{ open: isShow }" @click="isShow = !isShow">
            <div>{{ value }}</div>
        </div>
        <!-- contents -->
        <transition name="accordion" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @before-leave="beforeLeave" @leave="leave">
            <div v-show="isShow" class="item_content">
                <slot></slot>
            </div>
        </transition>
        <hr />
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
// component

@Component({
    components: {},
})
export default class ExpandAccordion extends Vue {
    public isShow: boolean = false;
    @Prop() public value!: string;

    // accordionの挙動はここを参照 https://qiita.com/randy39/items/67d956f5b10ebce7a0a5
    public beforeEnter(el: HTMLElement) {
        el.style.height = '0';
    }
    public enter(el: HTMLElement) {
        el.style.height = el.scrollHeight + 'px';
    }
    public afterEnter(el: HTMLElement) {
        el.style.height = '100%';
    }
    public beforeLeave(el: HTMLElement) {
        el.style.height = el.scrollHeight + 'px';
        el.style.height = el.scrollHeight + 'px';
    }
    public leave(el: HTMLElement) {
        el.style.height = '0';
    }
}
</script>
<style lang="stylus" scoped>
.expand_accordion {
    .item_title {
        cursor: pointer;
        padding-bottom: 10px;
        position: relative;
        font-size: 20px;

        &:after {
            content: '';
            position: absolute;
            top: 8px;
            right: 0;
            width: 10px;
            height: 10px;
            border: 0px;
            border-bottom: solid 2px #4c4c4c;
            border-right: solid 2px #4c4c4c;
            transform: rotate(45deg);
        }
    }

    .open {
        &:after {
            top: 15px;
            transform: rotate(225deg);
        }
    }

    .item_content {
        // margin: 0 0 0 -30px;
        // padding: 0 0 0 30px;
        // border-left: solid 1px #4c4c4c;
    }

    .accordion-enter-active, .accordion-leave-active {
        transition: all .4s;
        overflow: hidden;
    }

    .accordion-enter, .accordion-leave-to {
        height: 0;
        transition: all .4s;
    }
}
</style>
