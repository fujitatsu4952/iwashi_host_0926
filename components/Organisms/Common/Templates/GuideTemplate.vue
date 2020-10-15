<template>
    <div class="guide_template">
        <div class="guide_template_badge_container">
            <app-badge class="guide_template_badge">{{ badgeText }}</app-badge>
        </div>
        <app-title class="guide_template_title" :value="title"></app-title>
        <app-text class="guide_template_text" :value="text"></app-text>
        <nuxt-link :to="{ name: this.routerName }">
            <div class="guide_template_button_container">
                <app-button class="guide_template_button">{{ buttonText }}</app-button>
            </div>
        </nuxt-link>
        <div class="guide_template_button_container" v-if="isSkipable">
            <app-button class="guide_template_button" @click="$emit('skip')">スキップ</app-button>
        </div>
        <a href="https://d3bh749m5kndq3.cloudfront.net/public/assets/CHILLNN_GUIDE_1.3.pdf" target="_blanc" class="guide_template_dl">CHILLNN ご利用ガイド</a>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop, Emit } from 'nuxt-property-decorator';
// component
import AppTitle from '@/components/Atoms/Text/AppTextH2.vue';
import AppText from '@/components/Atoms/Text/AppTextH4.vue';
import AppButton from '@/components/Atoms/Button/AppButton.vue';
import AppBadge from '@/components/Atoms/Badge/AppBadgeQuestion.vue';

@Component({
    components: {
        AppButton,
        AppTitle,
        AppText,
        AppBadge,
    },
})
export default class GuideTemplate extends Vue {
    @Prop({ default: false }) public isSkipable!: boolean;
    @Prop() public title!: string;
    @Prop() public text!: string;
    @Prop() public badgeText!: string;
    @Prop() public src!: string;
    @Prop() public buttonText!: string;
    @Prop() public disabled!: boolean;
    @Prop() public routerName!: string;
}
</script>

<style lang="stylus" scoped>
.guide_template {
    background: #fff;
    margin: 0 auto;
    padding: 45px 60px;

    .guide_template_badge_container {
        text-align: center;
        margin: 30px auto;
        width: 100%;

        .guide_template_badge {
            display: inline-block;
            width: 110px;
            text-align: center;
        }
    }

    .guide_template_title {
        margin: 0 0 30px;
    }

    .guide_template_text {
        margin: 0 0 30px;
    }

    .guide_template_button_container {
        margin: 15px auto;

        .guide_template_button {
            width: 60%;
        }
    }

    .guide_template_dl {
        font-size: 12px;
    }
}
</style>
