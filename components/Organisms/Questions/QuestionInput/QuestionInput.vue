<template>
    <div>
        <question-template :number="number" :title="title" :text="text" :required="required" :optional="optional">
            <div class="input_container">
                <app-input v-model="localValue" :name="name" :rule="rule"></app-input>
            </div>
        </question-template>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit } from 'nuxt-property-decorator';
// mixins
import { QuestionTemplateMixin } from '@/components/Organisms/Questions/__QuestionTemplateMixin';
// component
import AppInput from '@/components/Atoms/Input/AppInput.vue';
import QuestionTemplate from '@/components/Organisms/Questions/QuestionTemplate.vue';

@Component({
    components: {
        QuestionTemplate,
        AppInput,
    },
    mixins: [QuestionTemplateMixin],
})
export default class QuestionInput extends Vue {
    @Prop() public value!: string;
    @Prop() public name!: string;
    @Prop() public rule!: string;

    // ========= v-model ==========

    @Emit('input')
    public input(value: string) {}

    private get localValue(): string {
        return this.value;
    }

    private set localValue(value: string) {
        this.input(value);
    }
}
</script>
<style lang="stylus" scoped>
.input_container {
    
}
</style>