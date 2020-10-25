<template>
    <div v-if="policyMast">
        <div>席チャージ料金</div>
        <input v-model="policyMast.price" />
        <div>ストック数</div>
        <input v-model="policyMast.stockNum" />

        <!-- <button @click="updatePolicy">更新</button> -->
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop, Emit } from "nuxt-property-decorator";
import { PolicyMast } from "iwashi_abr_1023/iwashiabr";

@Component({
    components: {}
})
export default class RoomItem extends Vue {
    @Prop() public policyMast!: PolicyMast;
}
</script>

<style></style>
