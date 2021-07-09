/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * utils for array
 * @class
 */
export class ObjectUtil {
  /**
   * Check if the filename extension is allowed
   * @string filename: as all extensions files are not supported, we check the extension in the filename
   * @Array formats: to specify the allowed formats
   * @static
   * @returns boolean
   */
  static findValueByProperty(obj: any): any {
    Object.keys(obj).forEach((key) => {
      if (typeof obj[key] === "object") {
        this.findValueByProperty(obj[key]);
      }
      return obj[key];
    });
  }
}
