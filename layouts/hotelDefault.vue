<template>
    <div class="flexbox">
        <side-menu></side-menu>
        <div class="page-container">
            <div class="flex-item">
                <!-- <notification-handler class="notification" /> -->
                <nuxt />
            </div>

            <div>
                <hotel-footer></hotel-footer>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
// import { AsyncLoadingAndErrorHandle } from "@/abr/decorator/baseDecorator";
import { Component, Vue } from "nuxt-property-decorator";
// component
// import NotificationHandler from "@/components/Organisms/Common/NotificationHandler/index.vue";
import SideMenu from "@/components/Template/Home/SideMenu.vue";
import HotelFooter from "@/components/Organisms/Common/HotelFooter.vue";

@Component({
    components: {
        SideMenu,
        HotelFooter,
        // NotificationHandler,
    },
})
export default class HotelPage extends Vue {}
</script>
<style lang="stylus" scoped>
.flexbox {
    display: -webkit-flex;
    display: flex;

    .page-container {
        position: absolute;
        top: 0;
        right: 0;
        width: 77%;
        background-color: $background_color_default;
        flex: 1;
        display: flex;
        min-height: 100%;
        flex-flow: column;

        .notification {
            position: fixed;
            margin: $margin_notification;
            top: $position_top_notification;
            right: $position_right_notification;
        }
    }

    .flex-item {
        flex: 1;
    }
}

@media only screen and (max-width: 1180px) {
    .page-container {
        width: 92%;
    }
}

@media only screen and (max-width: 1000px) {
    .page-container {
        position: absolute;
        top: 50px;
        right: 0;
        width: 100%;
        background-color: $background_color_default;
        box-sizing: border-box;
        padding: 1rem;
        flex: 1;
    }
}
</style>

<style lang="stylus">
html, body {
    color: #4c4c4c;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 400;
    margin: 0;
}

a {
    text-decoration: none;
}
</style>
