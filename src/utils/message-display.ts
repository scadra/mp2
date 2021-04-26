/**
 * Message to be display arround the application
 * @class
 */
export class MessageDisplay {
    
  /**
   * Display the filename or No file uploaded by default
   * @File file: the file uploaded
   * @static
   * @returns the filename or default string
   */
  static getFileName(file: File): string {
    return file ? file.name : "No file uploaded";
  }
}
