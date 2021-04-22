// Models
import { ApiCreation } from 'Models/api/api-creation';
// Dependencies
import { Component, PropSync, Ref } from "vue-property-decorator";
import Vue from 'vue';
import { Validations } from 'vuelidate-property-decorators';
import Vuelidate from 'vuelidate';
// Validation
import { ValidationApiModel } from 'Validations/api-creation.validation';
//Utils
import {MessageDisplay} from 'Utils/message-display';

@Component
export default class ApiInformationWizard extends Vue{

    @PropSync("api") syncApi!: ApiCreation;
    @Validations() validations = ValidationApiModel;

    handleFileUpload(event: any) {
        this.syncApi.swagger = event.target.files[0];
    }

    getFileName(file: File): string {
        return MessageDisplay.getFileName(file);
    }
} 
