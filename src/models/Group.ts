import {Rule} from "./Rule";

export class Group {

  rules: Rule[];
  children: Group[];
  condition: String;
  first: boolean;

  constructor(default_condition: string) {
    this.condition = default_condition;
    this.rules = [];
    this.children = [];
  }
}
