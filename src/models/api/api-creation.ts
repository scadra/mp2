/**
 * mandatory fields to create an api
 * @class
 */
export class ApiCreation {
    [key: string]: any
    productName: String;
    organization: String;
    swagger: File;
    documentation: File;
    overview: File;
    host: String;
    authorizationModel: String;
    authorizationTokenUrl: String;
    authorizationUrl: String;
    requirePkce: boolean = false;
    requireMtls: boolean = false;
    defaultCliendId!: String;
    defaultClientSecret!: String;
    consumerInformation: boolean = false;
    
    constructor() {
        this.productName = null;
        this.organization = null;
    }
}