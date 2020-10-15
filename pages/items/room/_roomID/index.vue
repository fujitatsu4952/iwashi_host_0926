<template>
    <div>
        <room-edit v-model="roomMast" @updateRoom="addRoom" />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop, Emit } from "nuxt-property-decorator";
import { RoomMast, Scalars } from "@/entity/type";
import { getUniqueID } from "@/Util/generateUuid";
import Methods from "@/methods/roomMethods";
//components
import RoomEdit from "@/components/Template/Room/edit.vue";

@Component({
    components: { RoomEdit }
})
export default class RoomTableItem extends Vue {
    public roomMast: RoomMast | null = null;
    public async created() {
        const roomID: string = this.$route.params.roomID;
        this.roomMast = (await Methods.fetchRoomMasts(roomID))![0];
    }
    public async updateRoom() {
        let response = await Methods.updateRoom(this.roomMast);
        this.$router.push({ name: "items-room" });
    }
}
</script>

<style></style>
