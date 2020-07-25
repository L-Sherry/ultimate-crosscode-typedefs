import './impact.base.steps';

export {};

declare global {
  namespace ig {
    type EventStepBase = StepBase;
    type EventStepBaseConstructor = StepBaseConstructor;
    var EventStepBase: EventStepBaseConstructor;

    namespace EVENT_STEP {}

    interface Event {}
    interface EventConstructor {
      getExpressionValue<T>(event: Event.EventExpression<T>): T
    }
    var Event : EventConstructor;

    namespace Event {
      type EventExpression<T> = T | { indirect: string } | { varName: string };
      type NumberExpression = EventExpression<number>;
      type BooleanExpression = EventExpression<boolean>;
      interface RandomSubDistribution {
        count: number,
        weight: number,
        activeCondition: string
      }
      interface RandomDistribution {
        options: RandomSubDistribution[]
      }
    }
  }
}
