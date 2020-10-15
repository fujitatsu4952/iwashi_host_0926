<template>
    <div class="local_menu_template">
        <app-chapter class="local_menu_chapter" :value="title" />
        <app-info-button v-if="infoButton" class="info_button" @mouseenter="showInfo" @mouseleave="showInfo" />
        <app-title class="local_menu_sub_title" middle :value="subTitle" />
        <app-text class="local_menu_sub_text" :value="subText" v-if="localshowInfo" />
        <div class="local_menu_text">
            -
            <app-title bold :value="text" v-if="text" />
            <app-text bold value="Questions" />
        </div>
        <slot></slot>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop, Emit } from 'nuxt-property-decorator';
// component
import AppChapter from '@/components/Atoms/Text/AppTextH1.vue';
import AppTitle from '@/components/Atoms/Text/AppTextH2.vue';
import AppText from '@/components/Atoms/Text/AppTextH4.vue';
import AppInfoButton from '@/components/Atoms/Button/AppButtonInfo.vue';

@Component({
    components: {
        AppChapter,
        AppTitle,
        AppText,
        AppInfoButton,
    },
})
export default class QuestionTemplate extends Vue {
    @Prop() public title!: string;
    @Prop() public subTitle!: string;
    @Prop() public text!: string;
    @Prop() public subText!: string;
    public infoButton: boolean = false;
    public localshowInfo: boolean = false;

    public created() {
        if (this.subText) {
            this.infoButton = true;
        }
    }

    public showInfo() {
        this.localshowInfo = !this.localshowInfo;
    }
}
</script>

<style lang="stylus" scoped>
.local_menu_template {
    .local_menu_chapter {
        display: inline-flex;
        margin: 0 0 10px 0;
    }

    .info_button {
        position: relative;
        bottom: 40px;
    }

    .local_menu_sub_title {
        margin: 0 0 20px;
    }

    .local_menu_sub_text {
        margin: 0 0 35px;
    }

    .local_menu_text {
        margin: 40px 0;
        display: flex;
        align-items: center;
    }
}
</style>
