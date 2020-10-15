<template>
    <div>
        <!-- <question-template :number="number" :title="title" :text="text" :required="required" :optional="optional">
            <app-image-upload-single name="main image" :rule="rule" :s3Object="localValue" :file.sync="localFile" />
        </question-template> -->
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit } from 'nuxt-property-decorator';

// // mixins
// import { QuestionTemplateMixin } from '@/components/Organisms/Questions/__QuestionTemplateMixin';
// // component
// import QuestionTemplate from '@/components/Organisms/Questions/QuestionTemplate.vue';
// import AppImageUploadSingle from '@/components/Molecules/AppImageUpload/SingleImage.vue';

// @Component({
//     components: {
//         QuestionTemplate,
//         AppImageUploadSingle,
//     },
//     mixins: [QuestionTemplateMixin],
// })
export default class QuestionKeyVisual extends Vue {
    // @Prop() public value!: S3Object;
    // @Prop({ default: 'required' }) rule!: string;

    // public get getMainKeyVisualUrl(): string | null {
    //     return hostStorageInteractor.getImageUrl(this.localValue);
    // }

    // // file
    // @Prop() file!: File | null;
    // @Emit('update:file') public emitFile(file: File | null) {}
    // public get localFile() {
    //     return this.file;
    // }
    // public set localFile(file: File | null) {
    //     this.emitFile(file);
    // }

    // // ========= v-model ==========
    // @Emit('input')
    // public input(value: S3Object) {}

    // private get localValue(): S3Object {
    //     return this.value;
    // }

    // private set localValue(value: S3Object) {
    //     this.input(value);
    // }
}
</script>
