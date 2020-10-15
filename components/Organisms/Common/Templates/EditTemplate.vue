<template>
    <div class="edit-template">
        <div class="edit-template-sticky-container">
            <div class="edit-template-left">
                <slot name="EditLeft"></slot>
            </div>
        </div>
        <div class="edit-template-right">
            <slot name="EditRight"></slot>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator';
@Component({
    components: {},
})
export default class EditTemplate extends Vue {}
</script>

<style lang="stylus" scoped>
.edit-template {
    display: flex;
    min-height: 70vh;

    .edit-template-sticky-container {
        width: 50%;
        max-width: 500px;

        .edit-template-left {
            position: sticky;
            max-width: 384px;
            top: 22%;
            left: 26%;
            margin: 0 auto;
            word-break: break-all;
            padding: 0 10% 10%;
        }
    }

    .edit-template-right {
        width: 65%;
        min-width: 620px;
        box-sizing: border-box;
        margin: 0 0 0 auto;
        padding: 0 3rem 4rem 10px;
    }
}

@media only screen and (max-width: 1180px) {
    .edit-template-left {
        left: 12%;
    }

    .edit-template-right {
        .edit_question_item {
            margin: 80px 0 0;
        }
    }
}

@media only screen and (max-width: 1000px) {
    .edit-template {
        display: block;
    }

    .edit_question_item {
        margin: 80px 0 0;
    }

    .edit-template-left {
        position: relative;
        width: 100%;
        max-width: unset;
        top: 0;
        left: 0;
        box-sizing: border-box;
        margin: 0 auto;
        padding: 1rem;
    }

    .edit-template-right {
        width: 100%;
        min-width: unset;
        max-width: unset;
        box-sizing: border-box;
        margin: 0 auto;
        padding: 1rem 1rem 3rem;
    }
}
</style>
