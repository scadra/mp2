export class FilterDropdownModel {
  text: string;
  value: string;

  constructor(text: string, value?: string) {
    this.text = text;
    this.value = value ? value : text;
  }
}
