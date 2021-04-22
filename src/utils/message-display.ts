export class MessageDisplay {
    static getFileName(file: File): string {
        return file ? file.name : 'No file uploaded';
    }
}
