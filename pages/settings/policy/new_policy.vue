<template>
    <div class="container">
        <!-- <h1>プラン作成</h1>
        <div>
            <div>プランID</div>
            <input v-model="policyMast.policyID" />
            <div>金額</div>
            <input type="number" v-model.number="policyMast.roomChargePrice" />
        </div>
        <button @click="addPlan">送信</button> -->
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop, Emit } from "nuxt-property-decorator";
import { getUniqueID } from "@/Util/generateUuid";

@Component({
    components: {}
})
export default class PolicyCreate extends Vue {
    // public policyMast: PolicyMast | null = null;
    // public created() {
    //     this.policyMast = {
    //         policyID: getUniqueID.getUniqueID(3),
    //         roomChargePrice: 0,
    //     };
    // }
    // public async addPlan() {
    //     let response = await Methods.addPolicy(this.policyMast);
    //     console.log(response);
    // }
}
</script>

<style></style>
