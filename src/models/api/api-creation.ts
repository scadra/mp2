/**
 * mandatory fields to create an api
 * @class
 */
export class ApiCreation {
    [key: string]: any
    productName: string;
    organization: string;
    swagger: File;
    documentation: File;
    overview: File;
    host: string;
    authorizationModel: string;
    authorizationTokenUrl: string;
    authorizationUrl: string;
    requirePkce = false;
    requireMtls = false;
    defaultCliendId!: string;
    defaultClientSecret!: string;
    consumerInformation = false;
    
    constructor() {
        this.productName = null;
        this.organization = null;
    }
}