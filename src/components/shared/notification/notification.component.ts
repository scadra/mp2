import Component from 'vue-class-component';
import Vue from 'vue';
import { Prop } from 'vue-property-decorator';

@Component
export default class Notification extends Vue{
    @Prop() text!:string;
    @Prop() className!: string;

    private display = true;
}