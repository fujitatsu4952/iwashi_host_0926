<template>
    <label class="app-check-box-list-item">
        <input class type="checkbox" :name="name" v-model="localValue" />
        <span></span>
    </label>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit } from "nuxt-property-decorator";

@Component({})
export default class AppInputToggle extends Vue {
    @Prop() public value!: boolean;
    @Prop() public text!: string;
    @Prop() public name!: string;

    @Emit("input")
    public input(value: boolean) {}

    private get localValue(): boolean {
        return this.value;
    }

    private set localValue(value: boolean) {
        this.input(value);
    }
}
</script>

<style lang="stylus" scoped>
.app-check-box-list-item {
    position: relative;
    display: flex;
    // height: 30px;
    box-sizing: border-box;
    align-items: center;
}

input[type='checkbox'] {
    position: absolute;
    top: 0;
    left: 0;
    appearance: none;
    background: none;
    border: none;
    border-radius: 0;
    margin: 0;
    outline: none;
    opacity: 0;
    padding: 0;
}

input[type='checkbox'] + span {
    position: relative;
    top: -12px;
    cursor: pointer;
    padding: 0 0 0 25px;

    &:before {
        position: absolute;
        top: 3px;
        left: 0;
        display: inline-block;
        content: '';
        width: 20px;
        height: 20px;
        border-radius: 100%;
        border: 2px solid #4c4c4c;
        box-sizing: border-box;
        z-index: 0;
    }

    &::after {
        position: absolute;
        top: 0;
        left: 0;
        display: inline-block;
        content: '';
        width: 6px;
        height: 15px;
        box-sizing: border-box;
        background: #f7f7f7;
        border: 0px solid #4c4c4c;
        border-width: 0 3px 3px 0;
        box-shadow: 3px -3px 0 #f7f7f7;
        margin: 2px 10px;
        transition: 0.2s ease all;
        transform: rotate(49deg);
        opacity: 0;
        z-index: 1;
    }
}

input[type='checkbox']:checked + span {
    &:after {
        opacity: 1;
    }
}
</style>
