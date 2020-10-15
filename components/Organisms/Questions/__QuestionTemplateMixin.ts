import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component({})
export class QuestionTemplateMixin extends Vue {
    @Prop({ default: false }) public required!: boolean;
    @Prop({ default: false }) public optional!: boolean;
    @Prop() public title!: string;
    @Prop() public text!: string;
    @Prop() public number!: string;
}
