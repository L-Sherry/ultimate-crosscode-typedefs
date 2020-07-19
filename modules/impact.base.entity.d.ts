import './impact.base.animation';
import './impact.base.coll-entry';
import './impact.base.impact';

export {};

declare global {
  namespace ig {
    enum ENTITY_SPRITE_MODE {
      FLAT = 1,
      CUBE = 2,
    }

    enum ENTITY_ALIGN {
      BOTTOM = 1,
      CENTER = 2,
      TOP = 3,
      FACE = 4,
      BASE = 5,
      WALL_HIT = 6,
      FACE_BASE = 7,
    }

    namespace Entity {
      interface Settings {
        size?: Partial<Vec3>;
        mapId?: number;
        name?: string;
      }
    }
    interface Entity extends ig.Class {
      settings: unknown; // an empty object, appears to be unused
      coll: ig.CollEntry;
      name: string | null;

      reset(this: this, x: number, y: number, z: number, settings: ig.Entity.Settings): void;
      getAlignedPos(this: this, alignment: ig.ENTITY_ALIGN, dest?: Vec3 | null): Vec3;
      kill(levelChange?: boolean | null): void;
    }
    interface EntityConstructor extends ImpactClass<Entity> {
      new (x: number, y: number, z: number, settings: ig.Entity.Settings): Entity;
    }
    var Entity: EntityConstructor;

    interface AnimatedEntity extends ig.Entity {
      animState: ig.AnimationState;
      currentAnim: string;
    }
    interface AnimatedEntityConstructor extends ImpactClass<AnimatedEntity> {}
    var AnimatedEntity: AnimatedEntityConstructor;
  }
}
