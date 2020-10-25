<template>
    <div>
        <room-edit v-model="roomMast" @updateRoom="addRoom" />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop, Emit } from "nuxt-property-decorator";
import { getUniqueID } from "@/Util/generateUuid";
import { RoomMast } from "iwashi_abr_1023/iwashiabr";
import { roomInteractor } from "@/abr/index";
//components
import RoomEdit from "@/components/Template/Room/edit.vue";

@Component({
    components: { RoomEdit }
})
export default class RoomTableItem extends Vue {
    public roomMast!: RoomMast;
    public async created() {
        const roomID: string = this.$route.params.roomID;
        this.roomMast = (await roomInteractor.fetchRoomMasts(roomID))![0];
    }
    public async updateRoom() {
        let response = await roomInteractor.updateMast(this.roomMast);
        this.$router.push({ name: "items-room" });
    }
}
</script>

<style></style>
