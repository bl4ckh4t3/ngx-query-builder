import {Injectable} from "@angular/core";

@Injectable()
export class Utils {

  constructor() {
  }

  isNumber(n: string): boolean {
    return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
  }

  parseExpression(expression: string, value: string, field: string) {
    return expression.replace(/\?/, value).replace(/\#/, field)
  }
}
