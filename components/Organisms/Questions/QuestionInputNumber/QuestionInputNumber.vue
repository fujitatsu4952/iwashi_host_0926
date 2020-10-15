<template>
    <div>
        <question-template :number="number" :title="title" :text="text" :required="required" :optional="optional">
            <div class="input-container">
                <app-input v-model.number="localValue" :name="name" :rule="rule"></app-input>
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
export default class QuestionInputNumber extends Vue {
    @Prop() public value!: number;
    @Prop() public name!: string;
    @Prop() public rule!: string;

    // ========= v-model ==========

    @Emit('input')
    public input(value: number) {}

    private get localValue(): number {
        return this.value;
    }

    private set localValue(value: number) {
        this.input(value);
    }
}
</script>
