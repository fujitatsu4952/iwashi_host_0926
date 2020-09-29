<template>
    <div class="container">
        <h1>ルーム更新</h1>
        <div v-if="roomMast">
            <div>ネーム</div>
            <input v-model="roomMast.name" />
            <div>説明</div>
            <input v-model="roomMast.description" />
            <div>注意事項</div>
            <input v-model="roomMast.subDescription" />
            <div>定員</div>
            <input v-model="roomMast.maxPeopleNum" />
            <div>最低必要注文数</div>
            <input v-model="roomMast.minOrderNum" />
            <div>ストック数</div>
            <input v-model="roomMast.stockNum" />

            <button @click="updateRoom">更新</button>
            {{ roomMast }}
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop, Emit } from "nuxt-property-decorator";
import { RoomMast, Scalars } from "@/entity/type";
import { getUniqueID } from "@/Util/generateUuid";
import Methods from "@/methods/roomMethods";

@Component({
    components: {},
})
export default class RoomTableItem extends Vue {
    public roomMast: RoomMast | null = null;
    public async created() {
        const roomID: string = this.$route.params.roomID;
        this.roomMast = (await Methods.fetchRoomMasts(roomID))![0];
    }
    public async updateRoom() {
        let response = await Methods.updateRoom(this.roomMast);
    }
}
</script>

<style></style>
