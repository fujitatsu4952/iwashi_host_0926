<template>
    <div v-if="planMasts">
        <!-- {{ planMasts }} -->
        <div v-for="planMast in planMasts" :key="planMast.planID">
            <plan-item :planMast="planMast" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop, Emit } from "nuxt-property-decorator";
import { PlanMast } from "@/entity/type";
import { getUniqueID } from "@/Util/generateUuid";
import Methods from "@/methods/planMethods";

import PlanItem from "@/components/Organisms/Plan/planItem.vue";
import AppButton from "@/components/Atoms/Button/AppButtonSave.vue";

@Component({
    components: { PlanItem, AppButton }
})
export default class PlanTable extends Vue {
    @Prop() public planMasts: PlanMast[] | null | undefined;
}
</script>

<style></style>
