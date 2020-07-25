import './impact.base.steps';

export {};

declare global {
  namespace ig {
    interface Action extends ig.Class {
      name: string;
      parallelMove: boolean;
      repeating: boolean;
      rootStep: ig.ActionStepBase | null;
    }
    interface ActionConstructor extends ImpactClass<Action> {
      new (
        name: string,
        steps: any[], // TODO
        parallelMove?: boolean | null,
        repeating?: boolean | null,
      ): Action;
    }
    var Action: ActionConstructor;

    interface ActionStepBase extends ig.StepBase {
      start(this: this, stepData: ig.ActorEntity): void;
    }
    var ActionStepBase: typeof ig.StepBase;
    namespace ACTION_STEP {}
  }
}
