<template>
    <div v-if="policyMast">
        <policy-edit v-model="policyMast" @update="updatePolicy" />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop, Emit } from "nuxt-property-decorator";
import { getUniqueID } from "@/Util/generateUuid";
import { PolicyMast } from "iwashi_abr_1023/iwashiabr";
import { policyInteractor } from "@/abr/index";

//components
import PolicyEdit from "@/components/Template/Policy/edit.vue";

@Component({
    layout: "hotelDefault",
    components: { PolicyEdit }
})
export default class PolicyTable extends Vue {
    public policyMast: PolicyMast | null | undefined = null;
    public async created() {
        this.policyMast = await policyInteractor.fetchPolicyMast(undefined);
    }
    public async updatePolicy() {
        let response = await policyInteractor.updateMast(this.policyMast!);
    }
}
</script>

<style></style>
