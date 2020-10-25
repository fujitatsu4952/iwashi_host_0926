<template>
    <div v-if="roomMast" @click="goRoomItem">
        ID:{{ roomMast.roomID }}NAME:{{ roomMast.name }}説明:{{
            roomMast.description
        }}注意書き:{{ roomMast.subDescription }}最低オーダー数:{{
            roomMast.minOrderNum
        }}在庫数:{{ roomMast.stockNum }}
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop, Emit } from "nuxt-property-decorator";
import { RoomMast } from "iwashi_abr_1023/iwashiabr";

@Component({
    components: {}
})
export default class RoomItem extends Vue {
    @Prop() public roomMast!: RoomMast;
    public async goRoomItem() {
        this.$router.push({
            name: "items-room-roomID",
            params: {
                roomID: this.roomMast.roomID
            }
        });
    }
}
</script>

<style></style>
