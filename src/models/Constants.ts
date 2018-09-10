import {Operator} from "./Operator";
import {OperatorDefinition} from "./OperatorDefinition";

export const OPERATORS: Operator[] = [
    new Operator("equal", 1, ['string', 'number', 'datetime', 'boolean'])
      .addDefinition("lucene", new OperatorDefinition("#:?")),
    new Operator("not_equal", 1, ['string', 'number', 'datetime', 'boolean'])
      .addDefinition("lucene", new OperatorDefinition("(*:* AND -#:?)")),
    new Operator("like", 1, ['string', 'number', 'datetime', 'boolean'])
      .addDefinition("lucene", new OperatorDefinition("#:*?*")),
    new Operator("not_like", 1, ['string', 'number', 'datetime', 'boolean'])
      .addDefinition("lucene", new OperatorDefinition("(*:* AND -#:*?*)")),
    new Operator("between", 2, ['number', 'datetime'])
      .addDefinition("lucene", new OperatorDefinition("#:[?]", true, "TO")),
    new Operator("between_not_inclusive", 2, ['number', 'datetime'])
      .addDefinition("lucene", new OperatorDefinition("#:{?}", true, "TO")),
    new Operator("not_null", 0, ['string', 'number', 'datetime', 'boolean'])
      .addDefinition("lucene", new OperatorDefinition("#:*")),
    new Operator("null", 0, ['string', 'number', 'datetime', 'boolean'])
      .addDefinition("lucene", new OperatorDefinition("(*:* AND -#:*)"))
  ]
;

export const CONDITIONS = ['AND', 'OR'];
