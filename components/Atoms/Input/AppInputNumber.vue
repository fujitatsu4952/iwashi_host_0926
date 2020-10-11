<template>
    <div class="app-input-container">
        <ValidationProvider :name="name" :rules="rule">
            <div slot-scope="{ errors }">
                <input
                    class="app-input"
                    v-model="localValue"
                    :placeholder="placeholder"
                    type="number"
                />
                <div class="app-input-error-text" v-if="errors.length">
                    ※{{ errors[0] }}
                </div>
            </div>
        </ValidationProvider>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop, Watch } from "nuxt-property-decorator";

@Component({})
export default class AppInput extends Vue {
    @Prop() public value!: string | null;
    @Prop() public name!: string;
    @Prop() public rule!: string;
    @Prop() public placeholder?: string;

    @Emit("input")
    public input(value: string | null) {}
    @Watch("localValue")
    private insertNull() {
        if (!this.localValue && this.localValue !== null) {
            this.localValue = null;
        }
    }
    private get localValue(): string | null {
        return this.value;
    }
    private set localValue(value: string | null) {
        this.input(value);
    }
}
</script>

<style lang="stylus" scoped>
.app-input-container {
    .app-input {
        position: relative;
        width: 100%;
        background-color: transparent;
        border: none;
        outline: none;
        border-bottom: 1px solid #979797;
        font-size: 16px;
        padding: 4px 0;
        text-align: center; // AppInput.vueのtext-alignはleft
    }

    .app-input-error-text {
        position: relative;
        text-align: left;
        font-size: 14px;
        color: red;
    }
}
</style>
