export class CONVERTOR {
    static objectToformData(object: any) {
        let formData = new FormData();
        Object.keys(object).forEach(key => {
            formData.append(key, JSON.stringify(object[key]))
        });
        return formData;
    }
}