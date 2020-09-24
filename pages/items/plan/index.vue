<template>
    <div>
        <h1>プラン一覧</h1>
        <button @click="addPlan">プラン作成へ</button>

        <template v-if="planMasts">
            <!-- {{ planMasts }} -->
            <div v-for="planMast in planMasts" :key="planMast.planID">
                <plan-item :planMast="planMast" />
            </div>
        </template>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop, Emit } from "nuxt-property-decorator";
import { PlanMast } from "@/entity/type";
import { getUniqueID } from "@/Util/generateUuid";
import Methods from "@/api/methods";

import PlanItem from "@/Organisms/Plan/planItem.vue";

@Component({
    components: { PlanItem },
})
export default class PlanTable extends Vue {
    public planMasts: PlanMast[] | null = null;
    public async addPlan() {
        this.$router.push({ name: "items-plan-new_plan" });
    }
    public async created() {
        console.log(await Methods.fetchPlanMasts());
        this.planMasts = (
            await Methods.fetchPlanMasts()
        ).data.data.allPlanMasts;
    }
}
</script>

<style></style>
