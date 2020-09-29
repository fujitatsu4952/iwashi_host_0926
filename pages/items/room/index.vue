<template>
    <div>
        <h1>ルーム一覧</h1>
        <button @click="addPlan">ルーム作成へ</button>

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
import Methods from "@/methods/planMethods";

import PlanItem from "@/components/Organisms/Plan/planItem.vue";

@Component({
    components: { PlanItem },
})
export default class PlanTable extends Vue {
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
