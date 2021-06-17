import Vue from "vue";
import { Component, PropSync, Prop } from "vue-property-decorator";

@Component
export default class UserInput extends Vue {
    @Prop() validatorField!: any;
    @Prop() type!: String;
    @PropSync("model") modelSync!: String;
  
  
  /**
   * Set eventually errors on the field
   */
  onBlur() {
    if(this.validatorField){
        this.validatorField.$touch();
    }
    
  }
}