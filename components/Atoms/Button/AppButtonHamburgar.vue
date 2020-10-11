<template>
    <div>
        <button class="hamburgar_button" @click="click" :disabled="disabled">
            <div
                class="hamburgar_button_line"
                :class="{ hamburgar_button_open: isShow }"
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <span>{{ isShow ? "Close" : "" }}</span>
        </button>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "nuxt-property-decorator";

@Component({})
export default class AppButtonHamburger extends Vue {
    @Prop() public value!: string;
    @Prop() public disabled?: boolean;
    @Prop() public isShow!: boolean;

    @Emit("click")
    public click() {}
}
</script>

<style lang="stylus" scoped>
.hamburgar_button {
    position: absolute;
    top: -5%;
    right: 0;
    left: 0;
    bottom: 0;
    background: transparent;
    border: none;
    cursor: pointer;
    margin: auto;
    outline: none;
}

.hamburgar_button_line {
    position: relative;
    width: 30px;
    height: 20px;
    margin: 0 0 0.5rem;

    & span {
        position: absolute;
        display: block;
        width: 30px;
        height: 3.5px;
        background: #4c4c4c;
        border-radius: 4px;
        transition: 0.4s all;

        &:nth-of-type(1) {
            height: 4px;
            top: 0;
        }

        &:nth-of-type(2) {
            height: 4px;
            top: 8px;
        }

        &:nth-of-type(3) {
            height: 4px;
            bottom: 0;
        }
    }
}

.hamburgar_button_open {
    & span {
        &:nth-of-type(1) {
            transform: translateY(9px) rotate(-45deg);
        }

        &:nth-of-type(2) {
            opacity: 0;
        }

        &:nth-of-type(3) {
            transform: translateY(-7px) rotate(45deg);
        }
    }
}

@media only screen and (max-width: 1180px) {
}

@media only screen and (max-width: 1000px) {
    .hamburgar_button {
        top: 5%;
        right: unset;
        left: 20px;
    }
}
</style>
