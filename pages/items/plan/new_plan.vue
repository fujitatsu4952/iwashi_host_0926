<template>
    <div>
        <plan-edit v-model="planMast" @updatePlan="addPlan" />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop, Emit } from "nuxt-property-decorator";
import { PlanMast } from "@/entity/type";
import { getUniqueID } from "@/Util/generateUuid";
import Methods from "@/methods/planMethods";
//components
import PlanEdit from "@/components/Template/Plan/edit.vue";

@Component({
    layout: "hotelDefault",
    components: { PlanEdit }
})
export default class PlanCreate extends Vue {
    public planMast: PlanMast | null = null;
    public created() {
        this.planMast = {
            planID: getUniqueID.getUniqueID(3),
            name: "",
            description: "",
            subDescription: "",
            price: 0,
            stockNum: 0,
            deletedAt: null,
            inSale: null
        };
    }
    public async addPlan() {
        let response = await Methods.addPlan(this.planMast);
        this.$router.push({ name: "items-plan" });
    }
}
</script>

<style lang="stylus" scoped></style>
