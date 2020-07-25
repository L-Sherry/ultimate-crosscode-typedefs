export {};

declare global {
  namespace ig {
    interface VarCondition {
      setCondition(condition: string): void;
      evaluate(): boolean;
      toString(): string;
    }
    interface VarConditionConstructor {
      new(condition: string): VarCondition;
    }
  }
}
