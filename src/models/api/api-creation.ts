/**
 * mandatory fields to create an api
 * @class
 */
export class ApiCreation {
    productName: String;
    organization: String;
    swagger: File;
    documentation: File;
    overview: File;
    host: String;
    authorizationModel: String;
    authorizationTokenUrl: String;
    authorizationUrl: String;
    
    constructor() {
        this.productName = null;
        this.organization = null;
    }
}