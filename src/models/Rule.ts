import {Operator} from "./Operator";

export class Rule {

  operator: Operator;
  field: string;
  value: any[];
  condition: string;

  constructor(default_operator: Operator) {
    this.operator = default_operator;
    this.field = "";
    this.value = [];
    this.condition = "";
  }
}
