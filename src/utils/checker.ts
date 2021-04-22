export class Checker {
    static allowedFormat(filename: string, formats: Array<string>): boolean {
        let extension = filename.split(".");
        console.log(extension)
        return formats.includes(extension[extension.length - 1]);
    }
}