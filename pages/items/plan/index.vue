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
import { PlanMast } from "@/entity/type";
import { getUniqueID } from "@/Util/generateUuid";
import Methods from "@/methods/planMethods";
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
        this.planMasts = await Methods.fetchPlanMasts(undefined);
    }
}
</script>

<style></style>
