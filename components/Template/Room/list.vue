<template>
    <div v-if="roomMasts">
        <div v-for="roomMast in roomMasts" :key="roomMast.roomID">
            <room-item :roomMast="roomMast" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop, Emit } from "nuxt-property-decorator";
import { RoomMast } from "@/entity/type";
import { getUniqueID } from "@/Util/generateUuid";
import Methods from "@/methods/roomMethods";

import RoomItem from "@/components/Organisms/Room/roomItem.vue";
import AppButton from "@/components/Atoms/Button/AppButtonSave.vue";

@Component({
    components: { RoomItem }
})
export default class RoomTable extends Vue {
    @Prop() public roomMasts: RoomMast[] | null | undefined;
}
</script>

<style></style>
