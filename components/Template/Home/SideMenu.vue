<template>
    <div>
        <side-menu-template :isOpen="show">
            <template #always>
                <!-- デフォルトで表示 -->
                <div class="side-menu__logo">
                    <nuxt-link :to="{ name: 'index' }">
                        <!-- <img src="~/assets/img/logo.png" alt /> -->
                    </nuxt-link>
                </div>
                <div class="side-menu__side-menu-button-block">
                    <app-button-hamburgar
                        @click="show = !show"
                        :isShow="show"
                    />
                </div>
                <div>
                    <app-sub-text
                        class="side-menu__copyright"
                        value="@iwashi 2020"
                    ></app-sub-text>
                </div>
            </template>
            <template #onlyOpen>
                <div class="side-menu__logo side-menu__logo--pc">
                    <nuxt-link :to="{ name: 'index' }">
                        <!-- <img src="~/assets/img/logo.png" alt /> -->
                    </nuxt-link>
                </div>
                <!-- コンテンツ -->
                <app-side-menu-content
                    class="side-menu__content"
                    title="HOME"
                    text="ホーム"
                    routeName="index"
                ></app-side-menu-content>
                <app-side-menu-content
                    class="side-menu__content"
                    title="RESERVATION"
                    text="予約検索"
                    routeName="reservation"
                ></app-side-menu-content>
                <app-side-menu-content
                    class="side-menu__content"
                    title="IMAGE"
                    text="画像"
                    routeName="image"
                ></app-side-menu-content>
                <!-- 商品セット -->
                <app-side-menu-summary
                    @click="showStock = !showStock"
                    class="side-menu__content"
                    title="ITEMS"
                    text="商品管理"
                    summaryRoute="items"
                >
                    <app-side-menu-sub-content
                        class="side-menu__content"
                        title="ROOM"
                        text="座席"
                        routeName="items-room"
                    ></app-side-menu-sub-content>
                    <app-side-menu-sub-content
                        class="side-menu__content"
                        title="PLAN"
                        text="プラン"
                        routeName="items-plan"
                    ></app-side-menu-sub-content>
                </app-side-menu-summary>

                <!-- 設定セット -->
                <app-side-menu-summary
                    @click="showStock = !showStock"
                    class="side-menu__content"
                    title="SETTINGS"
                    text="設定"
                    summaryRoute="settings"
                >
                    <app-side-menu-sub-content
                        class="side-menu__content"
                        title="HOTEL POLICY"
                        text="いわしポリシー"
                        routeName="settings-policy"
                    ></app-side-menu-sub-content>
                    <!-- <app-side-menu-sub-content
                        class="side-menu__content"
                        title="PAYMENT"
                        text="入金先情報"
                        routeName="hotelID-settings-hotelPayment"
                    ></app-side-menu-sub-content> -->
                </app-side-menu-summary>
                <!-- サイドバー下部にまとめて表示 -->
                <div class="side-menu__sub-content-block">
                    <div @click="goPolicy">
                        <app-sub-text
                            value="利用規約"
                            class="side-menu__log-out"
                        ></app-sub-text>
                    </div>
                    <div @click="signOut">
                        <app-sub-text
                            value="Logout"
                            class="side-menu__log-out"
                        ></app-sub-text>
                    </div>
                </div>
                <div class="side-menu__copyright--opened">
                    <app-sub-text value="©︎IWASHI 2019"></app-sub-text>
                </div>
            </template>
        </side-menu-template>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator";
import { hostUserAuthInteractor } from "@/client/amplify/auth";
import AppSideMenuSummary from "@/components/Organisms/Common/SideMenu/AppSideMenuSummary.vue";
import AppSideMenuContent from "@/components/Organisms/Common/SideMenu/AppSideMenuContent.vue";
import AppSideMenuSubContent from "@/components/Organisms/Common/SideMenu/AppSideMenuSubContent.vue";
import AppSubText from "@/components/Atoms/Text/AppTextH5.vue";
import AppButtonHamburgar from "@/components/Atoms/Button/AppButtonHamburgar.vue";
import SideMenuTemplate from "@/components/Organisms/Common/Templates/SidemenuTemplate.vue";
import dayjs from "dayjs";

@Component({
    components: {
        AppSideMenuSummary,
        AppSideMenuContent,
        AppSideMenuSubContent,
        AppSubText,
        AppButtonHamburgar,
        SideMenuTemplate
    }
})
export default class SideMenu extends Vue {
    public show: boolean = false;
    public isShowPrices: boolean = false;

    @Watch("$route")
    public closeSidemenu() {
        this.show = false;
    }

    public async signOut(): Promise<void> {
        if (confirm("ログアウトしますか？")) {
            await hostUserAuthInteractor.signOut();
            this.$router.push({ name: "auth-signin" });
        }
    }

    public aboutUs() {
        window.open("https://www.official.chillnn.com/");
    }
    public goPolicy() {
        window.open("/policy/servicePolicy");
    }
    public get isShowAccountManagement() {
        return dayjs(new Date()).format("YYYY-MM-DD") >= "2020-09-01";
    }
}
</script>

<style lang="stylus" scoped>
.side-menu__logo {
    position: relative;
    max-width: 50%;
    margin: 0 auto;
    z-index: 5;

    & img {
        width: 100%;
        height: auto;
    }
}

.side-menu__logo--pc {
    position: relative;
    max-width: 40%;
    margin: 30px auto 15px;
    z-index: 5;
}

.side-menu__side-menu-button-block {
    position: absolute;
    display: none;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
}

.side-menu__copyright {
    position: absolute;
    bottom: 0;
    width: 88%;
    font-size: 10px;
    margin: 0 -6px 70px;
    text-align: center;
    transform: rotate(270deg);
}

.side-menu__content {
    margin: 0 0 15px;
}

.side-menu__sub-content-block {
    margin: 80px 0 15px;
}

.side-menu__sub-content {
    margin: 8px 0;
    font-size: 12px;
}

.side-menu__log-out {
    text-decoration: none;
    cursor: pointer;
    margin: 8px 0;
}

.side-menu__about-us {
    text-decoration: none;
    cursor: pointer;
    margin: 8px 0;
}

@media only screen and (max-width: 1180px) {
    .side-menu__logo--pc {
        display: none;
    }

    .side-menu__side-menu-button-block {
        display: block;
    }

    side-menu__copyright--opened {
        display: none;
    }
}

@media only screen and (max-width: 1000px) {
    .side-menu__logo {
        position: absolute;
        left: 70px;
        max-width: 60px;
    }

    .side-menu__copyright {
        display: none;
    }
}
</style>
