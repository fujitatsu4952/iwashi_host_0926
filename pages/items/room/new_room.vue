<template>
    <div class="container">
        <h1>ルーム作成</h1>
        <div>
            <div>ルームID</div>
            <input v-model="roomMast.roomID" />
            <div>ネーム</div>
            <input v-model="roomMast.name" />
            <div>説明</div>
            <input v-model="roomMast.description" />
            <div>注意事項</div>
            <input v-model="roomMast.subDescription" />
            <div>収容可能人数</div>
            <input v-model="roomMast.maxPeopleNum" />
            <div>ストック数</div>
            <input v-model="roomMast.stockNum" />
        </div>
        <button @click="addRoom">作成</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop, Emit } from "nuxt-property-decorator";
import { RoomMast } from "@/entity/type";
import { getUniqueID } from "@/Util/generateUuid";
import Methods from "@/methods/roomMethods";

@Component({
    components: {},
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
            inSale: null,
        };
    }
    public async addRoom() {
        let response = await Methods.addRoom(this.roomMast);
        console.log(response);
    }
}
</script>

<style></style>
