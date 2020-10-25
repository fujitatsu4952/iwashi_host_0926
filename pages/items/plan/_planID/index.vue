<template>
    <div v-if="planMast">
        <plan-edit v-model="planMast" @update="updatePlan" />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop, Emit } from "nuxt-property-decorator";
import { getUniqueID } from "@/Util/generateUuid";
import { PlanMast } from "iwashi_abr_1023/iwashiabr";
import { planInteractor } from "@/abr/index";

//components
import PlanEdit from "@/components/Template/Plan/edit.vue";

@Component({
    layout: "hotelDefault",
    components: {
        PlanEdit
    }
})
export default class PlanTable extends Vue {
    public planMast!: PlanMast;
    public async created() {
        const planID: string = this.$route.params.planID;
        this.planMast = (await planInteractor.fetchPlanMasts(planID))![0];
    }
    public async updatePlan() {
        let response = await planInteractor.updateMast(this.planMast);
        this.$router.push({ name: "items-plan" });
    }
}
</script>

<style></style>
