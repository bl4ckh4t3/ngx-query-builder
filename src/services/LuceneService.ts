import {QueryServiceI} from "./QueryServiceI";
import {Group} from "../models/Group";
import {Utils} from "../utils";
import {Operator} from "../models/Operator";
import {Rule} from "../models/Rule";
import {OperatorDefinition} from "../models/OperatorDefinition";
import {Injectable} from "@angular/core";

@Injectable()
export class LuceneService implements QueryServiceI {

  private name: string = "lucene";

  constructor(
    public utils: Utils
  ) {
    this.utils = utils;
  }

  getQuery(group: Group): string {
    let parts: string[] = [];
    parts.concat(this.parseRule(group.rules));
    parts.concat(this.parseChildren(group.children));
    return parts.join(' ');
  }

  parseChildren(children: Group[]): string[] {
    let parts: string[] = [];
    for (let kid of children) {
      parts.push(kid.condition + ' (' + this.getQuery(kid) + ')');
    }
    return parts;
  }

  parseRule(rules: Rule[]): string[] {
    let parts: string[] = [];
    for (let rule of rules) {
      if (rule.operator === undefined) {
        break;
      }
      let operator: Operator = rule.operator;
      let operatorDefinition: OperatorDefinition = operator.getDefinition(this.name);

      let value: string = '';

      if (operator.parameters) {
        rule.value = rule.value.slice(0, operator.parameters);

        rule.value.forEach((v, i) => {
            if (operatorDefinition.isList && i > 0) {
              value += " " + operatorDefinition.separator + " ";
            }

            v = operatorDefinition.transform(v);
            //Fix for enumerations with spaces.
            /*v = v.replace(/\s/g,'\\\s');*/

            if (v !== '') {
              if (!this.utils.isNumber(v)) {
                v = '"' + v + '"';
              }
              value += v;
            }
          }
        );
      }
      rule.condition = rule.condition || '';
      if (rule.field !== '' && (value !== '' || operator.parameters === 0)) {
        let type = parts.length > 0 ? rule.condition : "";
        let expression = this.utils.parseExpression(operatorDefinition.expression, value, rule.field);
        parts.push(type + ' ' + expression);
      }
    }
    return parts;
  }
}
