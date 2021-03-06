import './game.feature.combat.entities.combatant';
import './game.feature.combat.model.enemy-type';
import './game.feature.combat.model.enemy-annotation';
import './game.feature.new-game.new-game-model';

export {};

declare global {
  namespace ig.ENTITY {
    interface Enemy extends ig.ENTITY.Combatant {
      currentState: string;

      changeState(this: this, state: string, immediate?: boolean | null): void;
    }
    interface EnemyConstructor extends ImpactClass<Enemy> {}
    var Enemy: EnemyConstructor;
  }
}
