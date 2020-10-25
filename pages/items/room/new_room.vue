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
    layout: "hotelDefault",
    components: { RoomEdit }
})
export default class RoomCreate extends Vue {
    public roomMast!: RoomMast;
    public async created() {
        this.roomMast = await roomInteractor.getBlancMast();
    }
    public async addRoom() {
        let response = await roomInteractor.addMast(this.roomMast);
        this.$router.push({ name: "items-room" });
    }
}
</script>

<style></style>
