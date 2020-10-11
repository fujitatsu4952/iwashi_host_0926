小さいところの文字
<template>
    <span class="app-sub-text" v-html="value" :class="getClass"></span>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component({})
export default class AppSubText extends Vue {
    @Prop() public value!: string;
    @Prop({ default: false }) public bold!: boolean;
    @Prop({ default: false }) public boldCenter!: boolean;

    public get getClass() {
        if (this.bold) {
            return "bold";
        } else if (this.boldCenter) {
            return "boldCenter";
        }
        return;
    }
}
</script>

<style scoped>
.app-sub-text {
    color: #4c4c4c;
    font-size: 12px;
}
.bold {
    font-weight: 600;
}
.boldCenter {
    font-weight: 600;
    text-align: center;
}
</style>
