export class CONVERTOR {
    static objectToformData(object: any) {
        let formData = new FormData();
        formData.append("tes", "test")
        Object.keys(object).forEach(key => {
            console.log(key)
            console.log(object[key])
            formData.append(key, JSON.stringify(object[key]))
            debugger;
            console.log(formData)
        });
        console.log(formData)
        return formData;
    }
}