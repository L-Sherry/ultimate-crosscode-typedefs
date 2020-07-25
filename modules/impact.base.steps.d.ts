export {};

declare global {
  namespace ig {
    interface StepBase extends ig.Class {
      // TODO: takes a second parameter
      start(this: this, stepData?: unknown): void;
      run(this: this): boolean;
      getNext(this: this): this;
      _nextStep: this | null;
    }
    interface StepBaseConstructor extends ImpactClass<StepBase> {}
    var StepBase: StepBaseConstructor;
  }
}
