<template>
    <div class="container">
        <h1>プラン更新</h1>
        <div v-if="planMast">
            <div>ネーム</div>
            <input v-model="planMast.name" />
            <div>説明</div>
            <input v-model="planMast.description" />
            <div>注意事項</div>
            <input v-model="planMast.subDescription" />
            <div>金額</div>
            <input
                type="number"
                name="number"
                v-model.number="planMast.price"
            />
            <div>ストック数</div>
            <input v-model.number="planMast.stockNum" />

            <button @click="updatePlan">更新</button>
            {{ planMast }}
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop, Emit } from "nuxt-property-decorator";
import { PlanMast, Scalars } from "@/entity/type";
import { getUniqueID } from "@/Util/generateUuid";
import Methods from "@/methods/planMethods";

@Component({
    components: {},
})
export default class PlanTable extends Vue {
    public planMast: PlanMast | null = null;
    public async created() {
        const planID: string = this.$route.params.planID;
        this.planMast = (await Methods.fetchPlanMasts(planID))![0];
    }
    public async updatePlan() {
        let response = await Methods.updatePlan(this.planMast);
    }
}
</script>

<style></style>
