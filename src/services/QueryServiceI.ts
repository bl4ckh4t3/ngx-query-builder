import {Group} from "../models/Group";
import {Rule} from "../models/Rule";
import {Injectable} from "@angular/core";

@Injectable()
export abstract class QueryServiceI {
  abstract getQuery(data: Group): string;

  abstract parseChildren(children: Group[]): string[];

  abstract parseRule(rules: Rule[]): string[];
}
