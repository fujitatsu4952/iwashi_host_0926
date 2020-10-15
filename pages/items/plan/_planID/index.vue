<template>
    <div v-if="planMast">
        <plan-edit v-model="planMast" @update="updatePlan" />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop, Emit } from "nuxt-property-decorator";
import { PlanMast, Scalars } from "@/entity/type";
import { getUniqueID } from "@/Util/generateUuid";
import Methods from "@/methods/planMethods";

//components
import PlanEdit from "@/components/Template/Plan/edit.vue";

@Component({
    layout: "hotelDefault",
    components: {
        PlanEdit
    }
})
export default class PlanTable extends Vue {
    public planMast: PlanMast | null = null;
    public async created() {
        const planID: string = this.$route.params.planID;
        this.planMast = (await Methods.fetchPlanMasts(planID))![0];
    }
    public async updatePlan() {
        let response = await Methods.updatePlan(this.planMast);
        this.$router.push({ name: "items-plan" });
    }
}
</script>

<style></style>
