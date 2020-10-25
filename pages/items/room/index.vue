<template>
    <div>
        <app-button @click="addRoom">ルーム作成へ</app-button>
        <template v-if="roomMasts">
            <room-list :roomMasts="roomMasts" />
        </template>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop, Emit } from "nuxt-property-decorator";
import { getUniqueID } from "@/Util/generateUuid";
import { RoomMast } from "iwashi_abr_1023/iwashiabr";
import { roomInteractor } from "@/abr/index";
//components
import RoomList from "@/components/Template/Room/list.vue";
import AppButton from "@/components/Atoms/Button/AppButtonSave.vue";

@Component({
    layout: "hotelDefault",
    components: { RoomList, AppButton }
})
export default class RoomTable extends Vue {
    public roomMasts: RoomMast[] | null | undefined = null;
    public async addRoom() {
        this.$router.push({ name: "items-room-new_room" });
    }
    public async created() {
        this.roomMasts = await roomInteractor.fetchRoomMasts(undefined);
    }
}
</script>

<style></style>
