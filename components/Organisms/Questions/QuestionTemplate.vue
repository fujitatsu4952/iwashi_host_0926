<template>
    <div>
        <app-badge class="question_template_budge" :optional="optional">{{ number }}</app-badge>
        <div class="question_template_title">
            <app-title :value="title"></app-title>
            <div v-show="required !== false" class="required">*</div>
        </div>
        <app-text class="question_template_text" :value="text"></app-text>
        <slot></slot>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop, Emit } from 'nuxt-property-decorator';
// component
import AppTitle from '@/components/Atoms/Text/AppTextH2.vue';
import AppText from '@/components/Atoms/Text/AppTextH4.vue';
import AppBadge from '@/components/Atoms/Badge/AppBadgeQuestion.vue';

@Component({
    components: {
        AppTitle,
        AppText,
        AppBadge
    },
})
export default class QuestionTemplate extends Vue {
    @Prop({ default: false }) public required!: boolean;
    @Prop({ default: false }) public optional!: boolean;
    @Prop() public title!: string;
    @Prop() public text!: string;
    @Prop() public number!: string;
}
</script>

<style lang="stylus" scoped>
.question_template_budge {
    width: 100px;
    height: 24px;
    margin: 0 0 0.8rem;
    text-align: center;
}

.flex {
    display: flex;
    align-items: center;

    .required {
        margin-top: -10px;
        align-items: baseline;
        vertical-align: top;
        font-size: 1rem;
    }
}

.question_template_title {
    margin: 0 0 30px;
}

.question_template_text {
    display: block;
    text-align: left;
    margin: 0 0 1.8rem;
}
</style>