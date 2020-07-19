import './game.feature.model.base-model';
import './game.feature.combat.model.combat-params';
import './game.feature.combat.entities.ball';
import './game.feature.player.player-config';
import './game.feature.achievements.stats-model';
import './game.feature.player.player-level';
import './game.feature.inventory.inventory';

export {};

declare global {
  namespace sc {
    interface PlayerModel extends ig.Class {
      currentElementMode: sc.ELEMENT,
      baseConfig: sc.PlayerSubConfig,
      elementConfigs: Partial<Record<sc.ELEMENT, sc.PlayerSubConfig>>,
      getAction(this: this, action: sc.PLAYER_ACTION) : ig.Action | undefined;
    }
    interface PlayerModelConstructor extends ImpactClass<PlayerModel> {}
    var PlayerModel: PlayerModelConstructor;
  }
}
