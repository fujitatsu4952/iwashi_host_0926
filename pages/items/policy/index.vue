<template>
    <div class="container">
        <h1>ポリシー更新</h1>
        <div v-if="policyMast">
            <div>席チャージ料金</div>
            <input v-model.number="policyMast.roomChargePrice" />
            <button @click="updatePolicy">更新</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop, Emit } from "nuxt-property-decorator";
import { PolicyMast, Scalars } from "@/entity/type";
import { getUniqueID } from "@/Util/generateUuid";
import Methods from "@/methods/policyMethods";
import PolicyItem from "@/components/Organisms/Policy/policyItem.vue";

@Component({
    components: { PolicyItem },
})
export default class PolicyTable extends Vue {
    public policyMast: PolicyMast | null | undefined = null;
    public async created() {
        this.policyMast = await Methods.fetchPolicyMast(undefined);
    }
    public async updatePolicy() {
        let response = await Methods.updatePolicy(this.policyMast!);
    }
}
</script>

<style></style>