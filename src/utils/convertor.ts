/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NodeGraphQl } from "Models/graphql/node-graph-ql.model";

export class CONVERTOR {
  static objectToformData(object: any): FormData {
    const formData = new FormData();
    Object.keys(object).forEach((key: string) => {
      formData.append(key, JSON.stringify(object[key]));
    });
    return formData;
  }

  static convertGraphQlToObject(array: Array<NodeGraphQl<any>>): any[] {
    return array.map((item) => (item = item.node));
  }
}
