<template>
    <div class="app-side-menu-content">
        <nuxt-link class="side-menu-content-link" :to="{ name: routeName }">
            <app-title :value="title" :routeName="routeName" :isActive="isActive"></app-title>
            <app-sub-text :value="text"></app-sub-text>
        </nuxt-link>
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
export default class AppSideMenuContent extends Vue {
    @Prop() public routeName!: string;
    @Prop() public title!: string;
    @Prop() public text!: string;
    public isActive: boolean = false;

    @Watch('$route')
    public routerWatcher() {
        this.isActive = this.routeName === this.$route.name;
    }

    mounted() {
        this.routerWatcher();
    }
}
</script>

<style lang="stylus" scoped>
.side-menu-content-link {
    text-decoration: none;
}
</style>
