export class StringFormat {
  static getDataSplited(text: string, delimiter: string): string[] {
    return text.trim().split(delimiter);
  }
}
