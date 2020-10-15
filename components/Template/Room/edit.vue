<template>
    <edit-template>
        <template #EditLeft>
            <local-menu-template
                title="Room"
                subTitle="座席"
                text="6"
                subText="プランの一部として販売するため、オプショナルコンテンツの登録をします。朝食やスパなどの魅力的なサービス提案から、加湿器やアメニティなどこだわりアイテムの貸し出し、宿泊者に向けたグッズ販売、など、旅行体験を彩るためのあらゆるコンテンツがオプションとして登録できます。"
            >
                <div class="edit_save_button">
                    <app-button @click="updateRoom">更新</app-button>
                </div>
            </local-menu-template>
        </template>
        <template #EditRight>
            <question-input
                required
                class="edit_question_item"
                title="座席の名前は？"
                text="座席の内容が伝わるシンプルな名前にしましょう。"
                number="Question.1"
                name="名前"
                v-model="localValue.name"
            />
            <question-input
                required
                class="edit_question_item"
                title="座席の内容は？"
                text="座席の内容書きましょう。"
                number="Question.2"
                name="説明"
                v-model="localValue.description"
            />
            <question-input
                required
                class="edit_question_item"
                title="座席の注意事項は？"
                text="座席の注意事項を書きましょう。"
                number="Question.3"
                name="注意事項"
                v-model="localValue.subDescription"
            />
            <question-input-number
                required
                class="edit_question_item"
                title="収容人数は？"
                text="収容可能な人数を入力しましょう。"
                number="Question.4"
                name="収容可能人数"
                v-model="localValue.maxPeopleNum"
            />
            <question-input-number
                required
                class="edit_question_item"
                title="最低注文数は？"
                text="必要な最低注文数を注文しましょう"
                number="Question.5"
                name="金額"
                v-model="localValue.minOrderNum"
            />
            <question-input-number
                required
                class="edit_question_item"
                title="プランのストック数は？"
                text="プランのストック数を入力しましょう。"
                number="Question.6"
                name="金額"
                v-model="localValue.stockNum"
            />
        </template>
    </edit-template>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop, Emit } from "nuxt-property-decorator";
import { RoomMast, Scalars } from "@/entity/type";
import { getUniqueID } from "@/Util/generateUuid";
import Methods from "@/methods/roomMethods";
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
export default class RoomEdit extends Vue {
    public roomMast: RoomMast | null = null;
    @Prop() public value!: RoomMast;
    // ========= v-model ==========
    @Emit("input")
    public input(value: RoomMast) {}
    private get localValue(): RoomMast {
        return this.value;
    }
    private set localValue(value: RoomMast) {
        this.input(value);
    }

    @Emit("updateRoom") public updateRoom() {}
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
