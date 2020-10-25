<template>
    <div v-if="planMast" @click="goPlanItem">
        <div>
            ID:{{ planMast.planID }}NAME:{{ planMast.name }}説明:{{
                planMast.description
            }}注意書き:{{ planMast.subDescription }}値段:{{
                planMast.price
            }}在庫数:{{ planMast.stockNum }}
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop, Emit } from "nuxt-property-decorator";
import { PlanMast } from "iwashi_abr_1023/iwashiabr";

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
