import { Component, PropSync, Prop } from "vue-property-decorator";
import Vue from 'vue';
import Step from 'Models/wizard/step.model';

@Component
export default class WizardStep extends Vue{
    @Prop() steps: Step[];
    @PropSync("currentStep") syncCurrentStep!: number;
} 
