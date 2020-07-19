
export {};

declare global {
  namespace sc {
    enum PLAYER_CLASSES {
      SPHEROMANCER = 0,
      TRIBLADER = 1,
      QUADROGUARD = 2,
      PENTAFIST = 3,
      HEXACAST = 4,
      UNKNOWN = 5
    }

    enum PLAYER_ACTION {
      AIM_START = 1,
      THROW_NORMAL = 2,
      THROW_NORMAL_REV = 3,
      THROW_CHARGED = 4,
      THROW_CHARGED_REV = 5,
      ATTACK = 6,
      ATTACK_REV = 7,
      ATTACK_FINISHER = 8,
      DASH = 9,
      DASH_SLOW = 10,
      CHARGING = 11,
      GUARD = 12,
      PERFECT_GUARD = 13,
      THROW_SPECIAL1 = 21,
      THROW_SPECIAL2 = 22,
      THROW_SPECIAL3 = 23,
      ATTACK_SPECIAL1 = 24,
      ATTACK_SPECIAL2 = 25,
      ATTACK_SPECIAL3 = 26,
      DASH_SPECIAL1 = 27,
      DASH_SPECIAL2 = 28,
      DASH_SPECIAL3 = 29,
      GUARD_SPECIAL1 = 30,
      GUARD_SPECIAL2 = 31,
      GUARD_SPECIAL3 = 32,
      DASH_LONG = 33
    }

    enum ACTION_DMG_TYPE {
      MELEE = 1,
      RANGED = 2,
      NONE = 3,
      MIXED = 4
    }

    enum ACTION_STUN_TYPE {
      INTERRUPT = 1,
      LOCK = 2
    }

    interface PlayerConfig extends ig.JsonLoadable {
    }
    interface PlayerConfigConstructor extends ImpactClass<PlayerConfig> {
    }

    interface PlayerAction extends ig.Class {
      action: ig.Action,
      name: string | null,
      description: string | null,
      dmgType: sc.ACTION_DMG_TYPE,
      stunType: sc.ACTION_STUN_TYPE,
      status: boolean,
      icon: number
    }
    interface PlayerActionConstructor extends ImpactClass<PlayerAction> {
      // new(name: string, config: any, element: ig.ELEMENT | -1);
    }
    interface PlayerSubConfig extends ig.Class {
      actions: Partial<Record<keyof sc.PLAYER_ACTION, sc.PlayerAction>>;
      activeActions: Partial<Record<sc.PLAYER_ACTION, sc.PlayerAction>>;

      getPlayerAction(action: keyof sc.PLAYER_ACTION) : sc.PlayerAction | undefined;
      getAction(action: sc.PLAYER_ACTION) : ig.Action | undefined;
    }
    interface PlayerSubConfigConstructor extends ImpactClass<PlayerSubConfig> {
    }
  }
}
