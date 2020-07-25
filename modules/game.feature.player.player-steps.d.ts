import './impact.base.animation';
import './impact.base.action';
import './impact.base.entity';
import './game.feature.player.player-config';
import './game.feature.combat.model.combat-params';
import './impact.feature.camera.camera';
import './game.feature.combat.entities.food-icon';
import './game.feature.party.party';

export {};

declare global {
  namespace ig.ACTION_STEP {

    interface SET_PLAYER_ACTION_BLOCK {
      blockData: {
        action: number,
        charge: number,
        dash: number,
        reaim: number,
        move: number
      }
    }
    interface SET_PLAYER_ACTION_BLOCK_CONSTRUCTOR {
      new(settings: Pick<SET_PLAYER_ACTION_BLOCK, 'blockData'>): SET_PLAYER_ACTION_BLOCK
    }
    var SET_PLAYER_ACTION_BLOCK: SET_PLAYER_ACTION_BLOCK_CONSTRUCTOR;
  }
}
