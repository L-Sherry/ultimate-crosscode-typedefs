export {};

declare global {
  namespace ig {
    interface StepBase extends ig.Class {
      start(this: this): void;
      run(this: this): boolean;
      getNext(this: this): this;
    }
    interface StepBaseConstructor extends ImpactClass<StepBase> {}
    var StepBase: StepBaseConstructor;
  }
}
