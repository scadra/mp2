import Component from 'vue-class-component';
import Vue from 'vue';
import { Prop } from 'vue-property-decorator';

@Component
export default class Notification extends Vue{
    @Prop() text!:String;
    @Prop() className!: String;
}