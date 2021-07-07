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
}
