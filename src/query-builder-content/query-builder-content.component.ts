import {Component, Input, OnInit, Optional} from '@angular/core';

import {CONDITIONS, OPERATORS} from "../models/Constants";
import {Rule} from "../models/Rule";
import {Group} from "../models/Group";

@Component({
  selector: 'ngx-query-builder-content',
  templateUrl: './query-builder-content.component.html',
  styleUrls: ['./query-builder-content.component.css'],
  inputs: ["fields", "parent", "query"]
})
export class QueryBuilderContentComponent implements OnInit {

  @Input() group: Group;
  @Input() @Optional() parent: Group;
  @Input() fields: string[];
  conditions = CONDITIONS;
  operators = OPERATORS;

  default_operator = OPERATORS[0];
  default_condition = CONDITIONS[0];

  constructor() {
  }

  ngOnInit() {
    console.log(this.group);
    if (this.group.rules.length === 0) {
      this.addRule();
    }
  }

  addRule() {
    let newCondition: Rule = new Rule(this.default_operator);
    if (this.group.rules.length > 0) {
      newCondition.condition = this.default_condition;
    }
    this.group.rules.push(newCondition);
  }

  removeCondition(index) {
    this.group.rules.splice(index, 1);
    if (this.group.rules.length === 0) {
      this.addRule();
    }
    this.group.rules[0].condition = '';
  }

  addGroup() {
    let newGroup: Group = new Group(this.default_condition);
    this.group.children.push(newGroup);
  }

  removeGroup(group, kid) {
    group.children.splice(group.children.indexOf(kid), 1);
  }


  selectedField(rule) {
    rule.value = [];
    rule.operator = this.default_operator;
  }


  getRuleParams(rule) {
    if (rule.operator) {
      return new Array(rule.operator.accept_values);
    }
    return new Array(1);
  }

}
