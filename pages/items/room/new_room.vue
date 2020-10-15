<template>
    <div>
        <room-edit v-model="roomMast" @updateRoom="addRoom" />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop, Emit } from "nuxt-property-decorator";
import { RoomMast } from "@/entity/type";
import { getUniqueID } from "@/Util/generateUuid";
import Methods from "@/methods/roomMethods";
//components
import RoomEdit from "@/components/Template/Room/edit.vue";

@Component({
    layout: "hotelDefault",
    components: { RoomEdit }
})
export default class RoomCreate extends Vue {
    public roomMast: RoomMast | null = null;
    public created() {
        this.roomMast = {
            roomID: getUniqueID.getUniqueID(3),
            name: "",
            description: "",
            subDescription: "",
            maxPeopleNum: 0,
            minOrderNum: 0,
            stockNum: 0,
            deletedAt: null,
            inSale: null
        };
    }
    public async addRoom() {
        let response = await Methods.addRoom(this.roomMast);
        this.$router.push({ name: "items-room" });
    }
}
</script>

<style></style>
