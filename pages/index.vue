<template>
    <div class="container">
        <div>
            <h1 class="title">iwashi200915</h1>
            <button @click="goPlan">プラン作成</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator";

@Component({
    components: {},
})
export default class BookingPage extends Vue {
    public goPlan() {
        this.$router.push({ name: "items-plan" });
    }
}
</script>
<style scoped lang="stylus">
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}
</style>
