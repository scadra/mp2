/**
 * An utils to check some format, extensions,...
 * @class
 */
export class Checker {

  /**
   * Check if the filename extension is allowed
   * @string filename: as all extensions files are not supported, we check the extension in the filename
   * @Array formats: to specify the allowed formats
   * @static
   * @returns boolean
   */
  static allowedFormat(filename: string, formats: Array<string>): boolean {
    const extension = filename.split(".");
    return formats.includes(extension[extension.length - 1]);
  }


  /**
   * Check if string are equals
   * @string source: string to compare
   * @string destination: string to be compared
   * @static
   * @returns boolean
   */
  static compareString(source: string, destination: string): boolean {
    return source.toUpperCase() === destination.toUpperCase();
  }
}
