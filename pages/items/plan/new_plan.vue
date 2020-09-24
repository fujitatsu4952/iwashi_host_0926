<template>
    <div class="container">
        <h1>プラン作成</h1>
        <div>
            <div>プランID</div>
            <input v-model="planMast.planID" />
            <div>ネーム</div>
            <input v-model="planMast.name" />
            <div>説明</div>
            <input v-model="planMast.description" />
            <div>注意事項</div>
            <input v-model="planMast.subDescription" />
            <div>金額</div>
            <input v-model="planMast.price" />
            <div>ストック数</div>
            <input v-model="planMast.stockNum" />
        </div>
        <button @click="addPlan">送信</button>
        {{ planMast }}
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop, Emit } from "nuxt-property-decorator";
import { PlanMast } from "@/entity/type";
import { getUniqueID } from "@/Util/generateUuid";
import Methods from "@/api/methods";

@Component({
    components: {},
})
export default class PlanTable extends Vue {
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
            inSale: null,
        };
    }
    public async addPlan() {
        let response = await Methods.addPlan(this.planMast);
    }
}
</script>

<style></style>
