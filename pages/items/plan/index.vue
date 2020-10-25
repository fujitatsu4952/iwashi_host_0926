<template>
    <div>
        <app-button @click="addPlan">プラン作成へ</app-button>
        <template v-if="planMasts">
            <plan-list :planMasts="planMasts" />
        </template>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop, Emit } from "nuxt-property-decorator";
import { getUniqueID } from "@/Util/generateUuid";
import { PlanMast } from "iwashi_abr_1023/iwashiabr";
import { planInteractor } from "@/abr/index";
// components
import PlanList from "@/components/Template/Plan/list.vue";
import AppButton from "@/components/Atoms/Button/AppButtonSave.vue";

@Component({
    layout: "hotelDefault",
    components: { PlanList, AppButton }
})
export default class PagePlanTable extends Vue {
    public planMasts: PlanMast[] | null | undefined = null;
    public async addPlan() {
        this.$router.push({ name: "items-plan-new_plan" });
    }
    public async created() {
        this.planMasts = (
            await planInteractor.fetchPlanMasts(undefined)
        ).data?.fetchPlanMasts;
    }
}
</script>

<style></style>
