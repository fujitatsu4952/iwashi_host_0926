<template>
    <div class="app-side-menu-content">
        <nuxt-link class="side-menu-content-link" :to="{ name: routeName }">
            <app-side-menu-sub-title :value="title" :routeName="routeName" :isActive="isActive"></app-side-menu-sub-title>
            <app-sub-text :value="text"></app-sub-text>
        </nuxt-link>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'nuxt-property-decorator';
import AppSideMenuSubTitle from '@/components/Atoms/Text/AppTextH3.vue';
import AppSubText from '@/components/Atoms/Text/AppTextH5.vue';

@Component({
    components: {
        AppSideMenuSubTitle,
        AppSubText,
    },
})
export default class AppSideMenuSubContent extends Vue {
    @Prop() public routeName!: string;
    @Prop() public title!: string;
    @Prop() public text!: string;
    public isActive: boolean = false;

    @Watch('$route')
    public routerWatcher() {
        if (this.$route.name) {
            const partialMatch = this.$route.name.match(this.routeName + '/*');
            this.isActive = partialMatch ? true : false;
        }
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
