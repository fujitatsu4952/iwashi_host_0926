<template>
    <div>
        <div @click="isShow = !isShow" class="app-side-menu-summary" :class="{ 'app-side-menu-summary--opened': isShow }">
            <app-title :value="title" :isActive="isActive"></app-title>
            <app-sub-text :value="text"></app-sub-text>
        </div>
        <transition name="accordion" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
            >
            <div v-show="isShow" class="app-side-menu-summary__contents">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'nuxt-property-decorator';
import AppTitle from '@/components/Atoms/Text/AppTextH2.vue';
import AppSubText from '@/components/Atoms/Text/AppTextH5.vue';

@Component({
    components: {
        AppTitle,
        AppSubText,
    },
})
export default class AppSideMenuSummary extends Vue {
    @Prop() public title!: string;
    @Prop() public text!: string;
    @Prop() public summaryRoute!: string;
    public isShow: boolean = false;
    public isActive: boolean = false;

    @Watch('$route')
    public routerWatcher() {
        if (this.$route.name) {
            const partialMatch = this.$route.name.match(this.summaryRoute + '/*');
            this.isActive = partialMatch ? true : false;
            this.isShow = partialMatch ? true : false;
        }
    }

    mounted() {
        this.routerWatcher();
    }

    // accordionの挙動はここを参照 https://qiita.com/randy39/items/67d956f5b10ebce7a0a5
    public beforeEnter(el: any) {
        el.style.height = '0';
    }
    public enter(el: any) {
        el.style.height = el.scrollHeight + 'px';
    }
    public beforeLeave(el: any) {
        el.style.height = el.scrollHeight + 'px';
    }
    public leave(el: any) {
        el.style.height = '0';
    }
}
</script>

<style lang="stylus" scoped>
.app-side-menu-summary {
    cursor: pointer;
    margin-bottom: 10px;
    position: relative;

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

.app-side-menu-summary--opened {
    &:after {
        top: 15px;
        transform: rotate(225deg);
    }
}

.app-side-menu-.app-side-menu-summary__contents {
    left: 100px;
    padding: 100px;
}

.accordion-enter-active, .accordion-leave-active {
    transition: all 0.4s;
    overflow: hidden;
}

.accordion-enter, .accordion-leave-to {
    height: 0;
    transition: all 0.4s;
}

.app-side-menu-summary__contents {
    margin: 0 0 0 1rem;
    padding: 0;
}
</style>
