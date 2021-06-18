/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
export class CONVERTOR {
  static objectToformData(object: any): FormData {
    const formData = new FormData();
    Object.keys(object).forEach((key: string) => {
      formData.append(key, JSON.stringify(object[key]));
    });
    return formData;
  }
}
