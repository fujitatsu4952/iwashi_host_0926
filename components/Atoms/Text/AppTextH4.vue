ノーマルテキスト
<template>
    <div class="app-text" :class="Mode" v-html="value"></div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component({})
export default class AppTextH4 extends Vue {
    @Prop() public value!: string;
    @Prop({ default: false }) public middle!: boolean;
    @Prop({ default: false }) public bold!: boolean;
    @Prop({ default: false }) public pink!: boolean;

    public get Mode() {
        if (this.middle !== false) {
            return "middle";
        } else if (this.bold !== false) {
            return "bold";
        } else if (this.pink !== false) {
            return "pink";
        }
    }
}
</script>

<style lang="stylus" scoped>
.app-text {
    color: #4c4c4c;
    font-size: 15px;
}

.middle {
    font-weight: 500;
}

.bold {
    font-weight: 600;
}

.pink {
    // color: $primary;
}
</style>
