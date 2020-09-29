<template>
  <div v-if="planMast" @click="goPlanItem">
    {{ planMast.planID }}{{ planMast.name }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop, Emit } from "nuxt-property-decorator";
import { PlanMast } from "@/entity/type";

@Component({
  components: {}
})
export default class PlanItem extends Vue {
  @Prop() public planMast!: PlanMast;
  public async goPlanItem() {
    this.$router.push({
      name: "items-plan-planID",
      params: {
        planID: this.planMast.planID
      }
    });
  }
}
</script>

<style></style>
