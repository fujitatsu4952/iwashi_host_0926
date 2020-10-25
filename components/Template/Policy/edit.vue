<template>
    <edit-template>
        <template #EditLeft>
            <local-menu-template
                title="Policy"
                subTitle="ポリシー"
                text="1"
                subText="プランの一部として販売するため、オプショナルコンテンツの登録をします。朝食やスパなどの魅力的なサービス提案から、加湿器やアメニティなどこだわりアイテムの貸し出し、宿泊者に向けたグッズ販売、など、旅行体験を彩るためのあらゆるコンテンツがオプションとして登録できます。"
            >
                <div class="edit_save_button">
                    <app-button @click="updatePolicy">更新</app-button>
                </div>
            </local-menu-template>
        </template>
        <template #EditRight>
            <question-input-number
                required
                class="edit_question_item"
                title="席チャージ料金"
                text="席チャージ料金を入力しましょう。"
                number="Question.1"
                name="金額"
                v-model="localValue.roomChargePrice"
            />
        </template>
    </edit-template>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop, Emit } from "nuxt-property-decorator";
import { PolicyMast, Scalars } from "iwashi_abr_1023/iwashiabr";
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
export default class PolicyTable extends Vue {
    public policyMast: PolicyMast | null = null;
    @Prop() public value!: PolicyMast;
    // ========= v-model ==========
    @Emit("input")
    public input(value: PolicyMast) {}
    private get localValue(): PolicyMast {
        return this.value;
    }
    private set localValue(value: PolicyMast) {
        this.input(value);
    }

    @Emit("updatePolicy") public updatePolicy() {}
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
