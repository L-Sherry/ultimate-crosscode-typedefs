import './impact.base.entity';
import './impact.base.action';

export {};

declare global {
  namespace ig {
    interface ActorEntity extends ig.AnimatedEntity {
      currentAction: ig.Action | null;
      currentActionStep: ig.ActionStepBase | null;
      stepData: unknown; // content depends on type of currentActionStep
      stepTimer: number;
      face: Vec2;
      animationFixed: boolean;

      setAction(
        this: this,
        action: ig.Action,
        keepState?: boolean | null,
        noStateReset?: boolean | null,
      ): void;
    }
    interface ActorEntityConstructor extends ImpactClass<ActorEntity> {}
    var ActorEntity: ActorEntityConstructor;
  }
}
