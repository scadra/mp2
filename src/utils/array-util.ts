/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { DirectionSortEnum } from "Models/enum/direction-sort.enum";
/**
 * utils for array
 * @class
 */
export abstract class ArrayUtil {
  /**
   * merge 2 arrays together without duplicate
   * @Array array1: array to merge
   * @Array array2: array to merge
   * @static
   * @returns Array merged
   */
  static mergeArrayWithoutDuplicate(
    array1: Array<any>,
    array2: Array<any>
  ): Array<any> {
    return [...new Set([...array1, ...array2])];
  }

  /**
   * remove items from array
   * @Array array1: array to substract
   * @Array array2: values allow
   * @static
   * @returns Array merged
   */
  static substractArrays(array1: Array<any>, array2: Array<any>): Array<any> {
    return array1.filter((x) => !array2.includes(x));
  }

  static compare(
    key: string,
    order: DirectionSortEnum
  ): (a: any, b: any) => number {
    return function innerSort(a: any, b: any) {
      if (
        !Object.prototype.hasOwnProperty.call(a, key) ||
        !Object.prototype.hasOwnProperty.call(b, key)
      ) {
        // property doesn't exist on either object
        return 0;
      }

      const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return order === DirectionSortEnum.DESC ? comparison * -1 : comparison;
    };
  }

  static sortData(array: any[], key: string, order: DirectionSortEnum): any[] {
    return array.sort(ArrayUtil.compare(key, order));
  }
}
