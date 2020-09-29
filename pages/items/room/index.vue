<template>
    <div>
        <h1>ルーム一覧</h1>
        <button @click="addRoom">ルーム作成へ</button>

        <template v-if="roomMasts">
            <!-- {{ roomMasts }} -->
            <div v-for="roomMast in roomMasts" :key="roomMast.roomID">
                <room-item :roomMast="roomMast" />
            </div>
        </template>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop, Emit } from "nuxt-property-decorator";
import { RoomMast } from "@/entity/type";
import { getUniqueID } from "@/Util/generateUuid";
import Methods from "@/methods/roomMethods";

import RoomItem from "@/components/Organisms/Room/roomItem.vue";

@Component({
    components: { RoomItem },
})
export default class RoomTable extends Vue {
    public roomMasts: RoomMast[] | null | undefined = null;
    public async addRoom() {
        this.$router.push({ name: "items-room-new_room" });
    }
    public async created() {
        this.roomMasts = await Methods.fetchRoomMasts(undefined);
    }
}
</script>

<style></style>
