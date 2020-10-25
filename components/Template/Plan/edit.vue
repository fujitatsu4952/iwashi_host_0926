<template>
    <edit-template>
        <template #EditLeft>
            <local-menu-template
                title="Plan"
                subTitle="プラン"
                text="6"
                subText="プランの一部として販売するため、オプショナルコンテンツの登録をします。朝食やスパなどの魅力的なサービス提案から、加湿器やアメニティなどこだわりアイテムの貸し出し、宿泊者に向けたグッズ販売、など、旅行体験を彩るためのあらゆるコンテンツがオプションとして登録できます。"
            >
                <div class="edit_save_button">
                    <app-button @click="updatePlan">更新</app-button>
                </div>
            </local-menu-template>
        </template>
        <template #EditRight>
            <question-input
                required
                class="edit_question_item"
                title="プランの名前は？"
                text="プランの内容が伝わるシンプルな名前にしましょう。"
                number="Question.1"
                name="名前"
                v-model="localValue.name"
            />
            <question-input
                required
                class="edit_question_item"
                title="プランの内容は？"
                text="プランの内容書きましょう。"
                number="Question.2"
                name="説明"
                v-model="localValue.description"
            />
            <question-input
                required
                class="edit_question_item"
                title="プランの注意事項は？"
                text="プランの注意事項を書きましょう。"
                number="Question.3"
                name="注意事項"
                v-model="localValue.subDescription"
            />
            <question-input-number
                required
                class="edit_question_item"
                title="プランの値段は？"
                text="プランの金額を入力しましょう。"
                number="Question.4"
                name="金額"
                v-model="localValue.price"
            />
            <question-input-number
                required
                class="edit_question_item"
                title="プランのストック数は？"
                text="プランのストック数を入力しましょう。"
                number="Question.5"
                name="金額"
                v-model="localValue.stockNum"
            />
        </template>
    </edit-template>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop, Emit } from "nuxt-property-decorator";
import { PlanMast, Scalars } from "iwashi_abr_1023/iwashiabr";
import { getUniqueID } from "@/Util/generateUuid";
// components
import EditTemplate from "@/components/Organisms/Common/Templates/EditTemplate.vue";
import LocalMenuTemplate from "@/components/Organisms/LocalMenu/LocalMenuTemplate.vue";
import QuestionInput from "@/components/Organisms/Questions/QuestionInput/QuestionInput.vue";
import QuestionInputNumber from "@/components/Organisms/Questions/QuestionInputNumber/QuestionInputNumber.vue";
import AppButton from "@/components/Atoms/Button/AppButtonSave.vue";

@Component({
    components: {
        EditTemplate,
        QuestionInput,
        QuestionInputNumber,
        AppButton
    }
})
export default class PlanTable extends Vue {
    public planMast: PlanMast | null = null;
    @Prop() public value!: PlanMast;
    // ========= v-model ==========
    @Emit("input")
    public input(value: PlanMast) {}
    private get localValue(): PlanMast {
        return this.value;
    }
    private set localValue(value: PlanMast) {
        this.input(value);
    }

    @Emit("updatePlan") public updatePlan() {}
}
</script>

<style lang="stylus" scoped>
.edit_save_button {
    margin: 0 0 15px 0;
}

.edit_question_item {
    margin: 100px 0 0 0;
}
</style>
