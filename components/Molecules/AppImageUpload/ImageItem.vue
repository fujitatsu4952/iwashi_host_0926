<template>
  <div class="image-item">
    <button class="image-item__delete-button" @click="deleteImg">
      <img src="~/assets/img/times-circle.svg" class />
    </button>
    <img class="image-item__image" v-lazy="src" />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit } from "nuxt-property-decorator";

@Component({})
export default class ImageItem extends Vue {
  @Prop() public src!: string;
  @Emit("delete-img") deleteImg() {}
}
</script>

<style lang="stylus" scoped>
.image-item {
    position: relative;
    width: 100%;
}

.image-item__delete-button {
    position: absolute;
    top: -8px;
    right: -10px;
    width: 20px;
    height: 20px;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    padding: unset;

    & img {
        width: 100%;
        height: auto;
    }
}

.image-item__image {
    width: 100%;
}
</style>
