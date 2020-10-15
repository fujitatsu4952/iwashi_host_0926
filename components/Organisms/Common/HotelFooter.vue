<template>
    <div class="footer-container">
        <div class="flex-item">
            <!-- <img src="~/assets/img/logo.png" alt /> -->
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
    components: {},
})
export default class HotelFooter extends Vue {}
</script>

<style lang="stylus" scoped>
.footer-container {
    text-align: center;
    height: 180px;
    background-color: #333;
    display: flex;
}

.flex-item {
    flex: 1;
    margin: auto;
}
</style>
