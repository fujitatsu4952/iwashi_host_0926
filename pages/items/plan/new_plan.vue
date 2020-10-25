<template>
    <div>
        <plan-edit v-model="planMast" @updatePlan="addPlan" />
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
    components: { PlanEdit }
})
export default class PlanCreate extends Vue {
    public planMast!: PlanMast;
    public async created() {
        this.planMast = await planInteractor.getBlancMast();
    }
    public async addPlan() {
        let response = await planInteractor.addMast(this.planMast);
        this.$router.push({ name: "items-plan" });
    }
}
</script>

<style lang="stylus" scoped></style>
