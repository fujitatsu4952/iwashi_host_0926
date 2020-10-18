<template>
    <div v-if="policyMast">
        <policy-edit v-model="policyMast" @update="updatePolicy" />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop, Emit } from "nuxt-property-decorator";
import { PolicyMast, Scalars } from "@/entity/type";
import { getUniqueID } from "@/Util/generateUuid";
import Methods from "@/methods/policyMethods";

//components
import PolicyEdit from "@/components/Template/Policy/edit.vue";

@Component({
    layout: "hotelDefault",
    components: { PolicyEdit }
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
