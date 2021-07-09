import { FilterDropdownModel } from "Models/filters/filter-dropdown.model";
import { DirectionSortEnum } from "Models/enum/direction-sort.enum";

export class SortDropdownModel extends FilterDropdownModel {
  key: string;
  direction: DirectionSortEnum;

  constructor(text: string, key: string, direction: DirectionSortEnum) {
    super(text, "");
    this.key = key;
    this.direction = direction;
  }
}
