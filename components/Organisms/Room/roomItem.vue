<template>
    <div v-if="roomMast" @click="goRoomItem">
        {{ roomMast.roomID }}{{ roomMast.name }}
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop, Emit } from "nuxt-property-decorator";
import { RoomMast } from "@/entity/type";

@Component({
    components: {},
})
export default class RoomItem extends Vue {
    @Prop() public roomMast!: RoomMast;
    public async goRoomItem() {
        this.$router.push({
            name: "items-room-roomID",
            params: {
                roomID: this.roomMast.roomID,
            },
        });
    }
}
</script>

<style></style>
