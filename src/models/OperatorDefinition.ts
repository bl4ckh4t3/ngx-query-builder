import {fn} from "../../node_modules/@angular/compiler/src/output/output_ast";

export class OperatorDefinition {

  private _expression: string;
  private _isList: boolean;
  private _separator: string;
  private _hasFunction: boolean;
  private _fn: Function;

  constructor(expression: string, isList: boolean = false, separator: string = null) {
    this._expression = expression;
    this._isList = isList;
    this._separator = separator;
  }

  get expression(): string {
    return this._expression;
  }


  get isList(): boolean {
    return this._isList;
  }

  get separator(): string {
    return this._separator;
  }


  get hasFunction(): boolean {
    return this._hasFunction;
  }

  get fn(): Function {
    return this._fn;
  }

  transform(value: string): string {
    value = value.replace(/([+&-\\\|!(){}\[\]\^\s"~*?:])/g, '\\$1');

    if (this.hasFunction) {
      value = this.fn(value);
    }

    return value;
  }
}
