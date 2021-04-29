export default interface IConfigurationService {
    getConfig(key: string): Promise<string> 
}