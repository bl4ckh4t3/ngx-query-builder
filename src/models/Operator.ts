import {OperatorDefinition} from "./OperatorDefinition";


export class Operator {

  name: string;
  definitions: Map<string, OperatorDefinition>;
  parameters: number;
  applyTo: string[];

  constructor(
    name: string, parameters: number, applyTo: string[]
  ) {
    this.name = name;
    this.parameters = parameters;
    this.applyTo = applyTo;
    this.definitions = new Map<string, OperatorDefinition>();
  }

  addDefinition(name: string, definition: OperatorDefinition): Operator {
    this.definitions.set(name, definition);
    return this;
  }

  getDefinition(name: string): OperatorDefinition {
    return this.definitions[name];
  }
}
