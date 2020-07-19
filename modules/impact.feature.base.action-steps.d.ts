import './impact.base.action';
import './impact.base.actor-entity';

export {};

declare global {
  namespace ig.ACTION_STEP {
    interface LABEL extends ig.ActionStepBase {}
    interface LABEL_CONSTRUCTOR extends ImpactClass<LABEL> {
      new(settings: {name: string}): LABEL
    }
    var LABEL: LABEL_CONSTRUCTOR;

    interface GOTO_LABEL extends ig.ActionStepBase {}
    interface GOTO_LABEL_CONSTRUCTOR extends ImpactClass<GOTO_LABEL> {
      new(settings: {name: string}): GOTO_LABEL
    }
    var GOTO_LABEL: GOTO_LABEL_CONSTRUCTOR;

    interface SELECT_RANDOM extends ig.ActionStepBase {}
    interface SELECT_RANDOM_CONSTRUCTOR extends ImpactClass<SELECT_RANDOM> {
      new(settings: unknown): SELECT_RANDOM
    }
    var SELECT_RANDOM: SELECT_RANDOM_CONSTRUCTOR;

    interface RESET_ACTOR extends ig.ActionStepBase {}
    interface RESET_ACTOR_CONSTRUCTOR extends ImpactClass<RESET_ACTOR> {
      new(settings: unknown): RESET_ACTOR
    }
    var RESET_ACTOR: RESET_ACTOR_CONSTRUCTOR;

    interface WAIT extends ig.ActionStepBase {}
    interface WAIT_CONSTRUCTOR extends ImpactClass<WAIT> {
      new(settings: {
        time: number,
        aggroTime?: number,
        assistSlow?: boolean
      }): WAIT
    }
    var WAIT: WAIT_CONSTRUCTOR;

    interface WAIT_UNTIL extends ig.ActionStepBase {}
    interface WAIT_UNTIL_CONSTRUCTOR extends ImpactClass<WAIT_UNTIL> {
      new(settings: unknown): WAIT_UNTIL
    }
    var WAIT_UNTIL: WAIT_UNTIL_CONSTRUCTOR;

    interface WAIT_RANDOM extends ig.ActionStepBase {}
    interface WAIT_RANDOM_CONSTRUCTOR extends ImpactClass<WAIT_RANDOM> {
      new(settings: unknown): WAIT_RANDOM
    }
    var WAIT_RANDOM: WAIT_RANDOM_CONSTRUCTOR;

    interface IF extends ig.ActionStepBase {}
    interface IF_CONSTRUCTOR extends ImpactClass<IF> {
      new(settings: unknown): IF
    }
    var IF: IF_CONSTRUCTOR;

    interface WAIT_UNTIL_ON_GROUND extends ig.ActionStepBase {}
    interface WAIT_UNTIL_ON_GROUND_CONSTRUCTOR extends ImpactClass<WAIT_UNTIL_ON_GROUND> {
      new(settings: unknown): WAIT_UNTIL_ON_GROUND
    }
    var WAIT_UNTIL_ON_GROUND: WAIT_UNTIL_ON_GROUND_CONSTRUCTOR;

    interface WAIT_UNTIL_PLAYER_ON_TOP extends ig.ActionStepBase {}
    interface WAIT_UNTIL_PLAYER_ON_TOP_CONSTRUCTOR extends ImpactClass<WAIT_UNTIL_PLAYER_ON_TOP> {
      new(settings: unknown): WAIT_UNTIL_PLAYER_ON_TOP
    }
    var WAIT_UNTIL_PLAYER_ON_TOP: WAIT_UNTIL_PLAYER_ON_TOP_CONSTRUCTOR;

    interface MOVE_FORWARD extends ig.ActionStepBase {}
    interface MOVE_FORWARD_CONSTRUCTOR extends ImpactClass<MOVE_FORWARD> {
      new(settings: unknown): MOVE_FORWARD
    }
    var MOVE_FORWARD: MOVE_FORWARD_CONSTRUCTOR;

    interface SLIDE_OUT extends ig.ActionStepBase {}
    interface SLIDE_OUT_CONSTRUCTOR extends ImpactClass<SLIDE_OUT> {
      new(settings: unknown): SLIDE_OUT
    }
    var SLIDE_OUT: SLIDE_OUT_CONSTRUCTOR;

    interface MOVE_BACKWARD extends ig.ActionStepBase {}
    interface MOVE_BACKWARD_CONSTRUCTOR extends ImpactClass<MOVE_BACKWARD> {
      new(settings: unknown): MOVE_BACKWARD
    }
    var MOVE_BACKWARD: MOVE_BACKWARD_CONSTRUCTOR;

    interface MOVE_TO_ENTITY_DISTANCE extends ig.ActionStepBase {}
    interface MOVE_TO_ENTITY_DISTANCE_CONSTRUCTOR extends ImpactClass<MOVE_TO_ENTITY_DISTANCE> {
      new(settings: unknown): MOVE_TO_ENTITY_DISTANCE
    }
    var MOVE_TO_ENTITY_DISTANCE: MOVE_TO_ENTITY_DISTANCE_CONSTRUCTOR;

    interface MOVE_TO_ENTITY_CLOSEST_OFFSET extends ig.ActionStepBase {}
    interface MOVE_TO_ENTITY_CLOSEST_OFFSET_CONSTRUCTOR extends ImpactClass<MOVE_TO_ENTITY_CLOSEST_OFFSET> {
      new(settings: unknown): MOVE_TO_ENTITY_CLOSEST_OFFSET
    }
    var MOVE_TO_ENTITY_CLOSEST_OFFSET: MOVE_TO_ENTITY_CLOSEST_OFFSET_CONSTRUCTOR;

    interface MOVE_TO_POINT extends ig.ActionStepBase {}
    interface MOVE_TO_POINT_CONSTRUCTOR extends ImpactClass<MOVE_TO_POINT> {
      new(settings: unknown): MOVE_TO_POINT
    }
    var MOVE_TO_POINT: MOVE_TO_POINT_CONSTRUCTOR;

    interface SYNC_ACTION_WITH_ENTITY extends ig.ActionStepBase {}
    interface SYNC_ACTION_WITH_ENTITY_CONSTRUCTOR extends ImpactClass<SYNC_ACTION_WITH_ENTITY> {
      new(settings: unknown): SYNC_ACTION_WITH_ENTITY
    }
    var SYNC_ACTION_WITH_ENTITY: SYNC_ACTION_WITH_ENTITY_CONSTRUCTOR;

    interface SET_Z_VEL extends ig.ActionStepBase {}
    interface SET_Z_VEL_CONSTRUCTOR extends ImpactClass<SET_Z_VEL> {
      new(settings: unknown): SET_Z_VEL
    }
    var SET_Z_VEL: SET_Z_VEL_CONSTRUCTOR;

    interface SET_FLOAT_HEIGHT extends ig.ActionStepBase {}
    interface SET_FLOAT_HEIGHT_CONSTRUCTOR extends ImpactClass<SET_FLOAT_HEIGHT> {
      new(settings: unknown): SET_FLOAT_HEIGHT
    }
    var SET_FLOAT_HEIGHT: SET_FLOAT_HEIGHT_CONSTRUCTOR;

    interface SET_FLOAT_PARAMS extends ig.ActionStepBase {}
    interface SET_FLOAT_PARAMS_CONSTRUCTOR extends ImpactClass<SET_FLOAT_PARAMS> {
      new(settings: unknown): SET_FLOAT_PARAMS
    }
    var SET_FLOAT_PARAMS: SET_FLOAT_PARAMS_CONSTRUCTOR;

    interface SET_FLY_HEIGHT extends ig.ActionStepBase {}
    interface SET_FLY_HEIGHT_CONSTRUCTOR extends ImpactClass<SET_FLY_HEIGHT> {
      new(settings: unknown): SET_FLY_HEIGHT
    }
    var SET_FLY_HEIGHT: SET_FLY_HEIGHT_CONSTRUCTOR;

    interface SET_FLY_KEEP_HEIGHT extends ig.ActionStepBase {}
    interface SET_FLY_KEEP_HEIGHT_CONSTRUCTOR extends ImpactClass<SET_FLY_KEEP_HEIGHT> {
      new(settings: unknown): SET_FLY_KEEP_HEIGHT
    }
    var SET_FLY_KEEP_HEIGHT: SET_FLY_KEEP_HEIGHT_CONSTRUCTOR;

    interface FORCE_FLY_HEIGHT extends ig.ActionStepBase {}
    interface FORCE_FLY_HEIGHT_CONSTRUCTOR extends ImpactClass<FORCE_FLY_HEIGHT> {
      new(settings: unknown): FORCE_FLY_HEIGHT
    }
    var FORCE_FLY_HEIGHT: FORCE_FLY_HEIGHT_CONSTRUCTOR;

    interface WAIT_UNTIL_Z_DISTANCE extends ig.ActionStepBase {}
    interface WAIT_UNTIL_Z_DISTANCE_CONSTRUCTOR extends ImpactClass<WAIT_UNTIL_Z_DISTANCE> {
      new(settings: unknown): WAIT_UNTIL_Z_DISTANCE
    }
    var WAIT_UNTIL_Z_DISTANCE: WAIT_UNTIL_Z_DISTANCE_CONSTRUCTOR;

    interface WAIT_UNTIL_Z_ZENITH extends ig.ActionStepBase {}
    interface WAIT_UNTIL_Z_ZENITH_CONSTRUCTOR extends ImpactClass<WAIT_UNTIL_Z_ZENITH> {
      new(settings: unknown): WAIT_UNTIL_Z_ZENITH
    }
    var WAIT_UNTIL_Z_ZENITH: WAIT_UNTIL_Z_ZENITH_CONSTRUCTOR;

    interface STOP_Z_ZENITH extends ig.ActionStepBase {}
    interface STOP_Z_ZENITH_CONSTRUCTOR extends ImpactClass<STOP_Z_ZENITH> {
      new(settings: unknown): STOP_Z_ZENITH
    }
    var STOP_Z_ZENITH: STOP_Z_ZENITH_CONSTRUCTOR;

    interface FLY_TO_POINT extends ig.ActionStepBase {}
    interface FLY_TO_POINT_CONSTRUCTOR extends ImpactClass<FLY_TO_POINT> {
      new(settings: unknown): FLY_TO_POINT
    }
    var FLY_TO_POINT: FLY_TO_POINT_CONSTRUCTOR;

    interface MOVE_TO_DIR extends ig.ActionStepBase {}
    interface MOVE_TO_DIR_CONSTRUCTOR extends ImpactClass<MOVE_TO_DIR> {
      new(settings: unknown): MOVE_TO_DIR
    }
    var MOVE_TO_DIR: MOVE_TO_DIR_CONSTRUCTOR;

    interface MOVE_TO_LINE extends ig.ActionStepBase {}
    interface MOVE_TO_LINE_CONSTRUCTOR extends ImpactClass<MOVE_TO_LINE> {
      new(settings: unknown): MOVE_TO_LINE
    }
    var MOVE_TO_LINE: MOVE_TO_LINE_CONSTRUCTOR;

    interface MOVE_RANDOM extends ig.ActionStepBase {}
    interface MOVE_RANDOM_CONSTRUCTOR extends ImpactClass<MOVE_RANDOM> {
      new(settings: unknown): MOVE_RANDOM
    }
    var MOVE_RANDOM: MOVE_RANDOM_CONSTRUCTOR;

    interface SET_WALK_ANIMS extends ig.ActionStepBase {}
    interface SET_WALK_ANIMS_CONSTRUCTOR extends ImpactClass<SET_WALK_ANIMS> {
      new(settings: unknown): SET_WALK_ANIMS
    }
    var SET_WALK_ANIMS: SET_WALK_ANIMS_CONSTRUCTOR;

    interface STOP_XY extends ig.ActionStepBase {}
    interface STOP_XY_CONSTRUCTOR extends ImpactClass<STOP_XY> {
      new(settings: unknown): STOP_XY
    }
    var STOP_XY: STOP_XY_CONSTRUCTOR;

    interface JUMP extends ig.ActionStepBase {}
    interface JUMP_CONSTRUCTOR extends ImpactClass<JUMP> {
      new(settings: unknown): JUMP
    }
    var JUMP: JUMP_CONSTRUCTOR;

    interface JUMP_TO_POINT extends ig.ActionStepBase {}
    interface JUMP_TO_POINT_CONSTRUCTOR extends ImpactClass<JUMP_TO_POINT> {
      new(settings: unknown): JUMP_TO_POINT
    }
    var JUMP_TO_POINT: JUMP_TO_POINT_CONSTRUCTOR;

    interface SET_GROUND_CONNECTED extends ig.ActionStepBase {}
    interface SET_GROUND_CONNECTED_CONSTRUCTOR extends ImpactClass<SET_GROUND_CONNECTED> {
      new(settings: unknown): SET_GROUND_CONNECTED
    }
    var SET_GROUND_CONNECTED: SET_GROUND_CONNECTED_CONSTRUCTOR;

    interface SET_JUMPING extends ig.ActionStepBase {}
    interface SET_JUMPING_CONSTRUCTOR extends ImpactClass<SET_JUMPING> {
      new(settings: unknown): SET_JUMPING
    }
    var SET_JUMPING: SET_JUMPING_CONSTRUCTOR;

    interface SET_Z_GRAVITY_FACTOR extends ig.ActionStepBase {}
    interface SET_Z_GRAVITY_FACTOR_CONSTRUCTOR extends ImpactClass<SET_Z_GRAVITY_FACTOR> {
      new(settings: unknown): SET_Z_GRAVITY_FACTOR
    }
    var SET_Z_GRAVITY_FACTOR: SET_Z_GRAVITY_FACTOR_CONSTRUCTOR;

    interface SET_SIZE extends ig.ActionStepBase {}
    interface SET_SIZE_CONSTRUCTOR extends ImpactClass<SET_SIZE> {
      new(settings: unknown): SET_SIZE
    }
    var SET_SIZE: SET_SIZE_CONSTRUCTOR;

    interface SET_SPEED extends ig.ActionStepBase {}
    interface SET_SPEED_CONSTRUCTOR extends ImpactClass<SET_SPEED> {
      new(settings: unknown): SET_SPEED
    }
    var SET_SPEED: SET_SPEED_CONSTRUCTOR;

    interface SET_RELATIVE_SPEED extends ig.ActionStepBase {}
    interface SET_RELATIVE_SPEED_CONSTRUCTOR extends ImpactClass<SET_RELATIVE_SPEED> {
      new(settings: unknown): SET_RELATIVE_SPEED
    }
    var SET_RELATIVE_SPEED: SET_RELATIVE_SPEED_CONSTRUCTOR;

    interface SET_ACCEL_SPEED extends ig.ActionStepBase {}
    interface SET_ACCEL_SPEED_CONSTRUCTOR extends ImpactClass<SET_ACCEL_SPEED> {
      new(settings: unknown): SET_ACCEL_SPEED
    }
    var SET_ACCEL_SPEED: SET_ACCEL_SPEED_CONSTRUCTOR;

    interface SET_STATIC_TIME extends ig.ActionStepBase {}
    interface SET_STATIC_TIME_CONSTRUCTOR extends ImpactClass<SET_STATIC_TIME> {
      new(settings: unknown): SET_STATIC_TIME
    }
    var SET_STATIC_TIME: SET_STATIC_TIME_CONSTRUCTOR;

    interface DETACH_TIME_PARENT extends ig.ActionStepBase {}
    interface DETACH_TIME_PARENT_CONSTRUCTOR extends ImpactClass<DETACH_TIME_PARENT> {
      new(settings: unknown): DETACH_TIME_PARENT
    }
    var DETACH_TIME_PARENT: DETACH_TIME_PARENT_CONSTRUCTOR;

    interface SET_WEIGHT extends ig.ActionStepBase {}
    interface SET_WEIGHT_CONSTRUCTOR extends ImpactClass<SET_WEIGHT> {
      new(settings: unknown): SET_WEIGHT
    }
    var SET_WEIGHT: SET_WEIGHT_CONSTRUCTOR;

    interface SET_FRICTION extends ig.ActionStepBase {}
    interface SET_FRICTION_CONSTRUCTOR extends ImpactClass<SET_FRICTION> {
      new(settings: unknown): SET_FRICTION
    }
    var SET_FRICTION: SET_FRICTION_CONSTRUCTOR;

    interface SET_AIR_FRICTION extends ig.ActionStepBase {}
    interface SET_AIR_FRICTION_CONSTRUCTOR extends ImpactClass<SET_AIR_FRICTION> {
      new(settings: unknown): SET_AIR_FRICTION
    }
    var SET_AIR_FRICTION: SET_AIR_FRICTION_CONSTRUCTOR;

    interface SET_TERRAIN_FRICTION_IGNORE extends ig.ActionStepBase {}
    interface SET_TERRAIN_FRICTION_IGNORE_CONSTRUCTOR extends ImpactClass<SET_TERRAIN_FRICTION_IGNORE> {
      new(settings: unknown): SET_TERRAIN_FRICTION_IGNORE
    }
    var SET_TERRAIN_FRICTION_IGNORE: SET_TERRAIN_FRICTION_IGNORE_CONSTRUCTOR;

    interface SET_SHADOW extends ig.ActionStepBase {}
    interface SET_SHADOW_CONSTRUCTOR extends ImpactClass<SET_SHADOW> {
      new(settings: unknown): SET_SHADOW
    }
    var SET_SHADOW: SET_SHADOW_CONSTRUCTOR;

    interface SET_Z_BOUNCINESS extends ig.ActionStepBase {}
    interface SET_Z_BOUNCINESS_CONSTRUCTOR extends ImpactClass<SET_Z_BOUNCINESS> {
      new(settings: unknown): SET_Z_BOUNCINESS
    }
    var SET_Z_BOUNCINESS: SET_Z_BOUNCINESS_CONSTRUCTOR;

    interface SET_BOUNCINESS extends ig.ActionStepBase {}
    interface SET_BOUNCINESS_CONSTRUCTOR extends ImpactClass<SET_BOUNCINESS> {
      new(settings: unknown): SET_BOUNCINESS
    }
    var SET_BOUNCINESS: SET_BOUNCINESS_CONSTRUCTOR;

    interface SET_FACE_FIX extends ig.ActionStepBase {}
    interface SET_FACE_FIX_CONSTRUCTOR extends ImpactClass<SET_FACE_FIX> {
      new(settings: unknown): SET_FACE_FIX
    }
    var SET_FACE_FIX: SET_FACE_FIX_CONSTRUCTOR;

    interface SET_FACE extends ig.ActionStepBase {}
    interface SET_FACE_CONSTRUCTOR extends ImpactClass<SET_FACE> {
      new(settings: unknown): SET_FACE
    }
    var SET_FACE: SET_FACE_CONSTRUCTOR;

    interface SET_CLOSEST_FACE extends ig.ActionStepBase {}
    interface SET_CLOSEST_FACE_CONSTRUCTOR extends ImpactClass<SET_CLOSEST_FACE> {
      new(settings: unknown): SET_CLOSEST_FACE
    }
    var SET_CLOSEST_FACE: SET_CLOSEST_FACE_CONSTRUCTOR;

    interface SET_FACE_TO_VEL extends ig.ActionStepBase {}
    interface SET_FACE_TO_VEL_CONSTRUCTOR extends ImpactClass<SET_FACE_TO_VEL> {
      new(settings: unknown): SET_FACE_TO_VEL
    }
    var SET_FACE_TO_VEL: SET_FACE_TO_VEL_CONSTRUCTOR;

    interface ROTATE_FACE extends ig.ActionStepBase {}
    interface ROTATE_FACE_CONSTRUCTOR extends ImpactClass<ROTATE_FACE> {
      new(settings: unknown): ROTATE_FACE
    }
    var ROTATE_FACE: ROTATE_FACE_CONSTRUCTOR;

    interface SET_FACE_TO_DIR extends ig.ActionStepBase {}
    interface SET_FACE_TO_DIR_CONSTRUCTOR extends ImpactClass<SET_FACE_TO_DIR> {
      new(settings: unknown): SET_FACE_TO_DIR
    }
    var SET_FACE_TO_DIR: SET_FACE_TO_DIR_CONSTRUCTOR;

    interface SET_FACE_TO_ENTITY extends ig.ActionStepBase {}
    interface SET_FACE_TO_ENTITY_CONSTRUCTOR extends ImpactClass<SET_FACE_TO_ENTITY> {
      new(settings: unknown): SET_FACE_TO_ENTITY
    }
    var SET_FACE_TO_ENTITY: SET_FACE_TO_ENTITY_CONSTRUCTOR;

    interface SET_COLL_TYPE extends ig.ActionStepBase {}
    interface SET_COLL_TYPE_CONSTRUCTOR extends ImpactClass<SET_COLL_TYPE> {
      new(settings: unknown): SET_COLL_TYPE
    }
    var SET_COLL_TYPE: SET_COLL_TYPE_CONSTRUCTOR;

    interface SET_COLL_SHAPE extends ig.ActionStepBase {}
    interface SET_COLL_SHAPE_CONSTRUCTOR extends ImpactClass<SET_COLL_SHAPE> {
      new(settings: unknown): SET_COLL_SHAPE
    }
    var SET_COLL_SHAPE: SET_COLL_SHAPE_CONSTRUCTOR;

    interface SET_SLIP_THROUGH extends ig.ActionStepBase {}
    interface SET_SLIP_THROUGH_CONSTRUCTOR extends ImpactClass<SET_SLIP_THROUGH> {
      new(settings: unknown): SET_SLIP_THROUGH
    }
    var SET_SLIP_THROUGH: SET_SLIP_THROUGH_CONSTRUCTOR;

    interface SHOW_ANIMATION extends ig.ActionStepBase {}
    interface SHOW_ANIMATION_CONSTRUCTOR extends ImpactClass<SHOW_ANIMATION> {
      new(settings: unknown): SHOW_ANIMATION
    }
    var SHOW_ANIMATION: SHOW_ANIMATION_CONSTRUCTOR;

    interface WAIT_UNTIL_ANIM_LOOP_END extends ig.ActionStepBase {}
    interface WAIT_UNTIL_ANIM_LOOP_END_CONSTRUCTOR extends ImpactClass<WAIT_UNTIL_ANIM_LOOP_END> {
      new(settings: unknown): WAIT_UNTIL_ANIM_LOOP_END
    }
    var WAIT_UNTIL_ANIM_LOOP_END: WAIT_UNTIL_ANIM_LOOP_END_CONSTRUCTOR;

    interface SHOW_PART_ANIMATION extends ig.ActionStepBase {}
    interface SHOW_PART_ANIMATION_CONSTRUCTOR extends ImpactClass<SHOW_PART_ANIMATION> {
      new(settings: unknown): SHOW_PART_ANIMATION
    }
    var SHOW_PART_ANIMATION: SHOW_PART_ANIMATION_CONSTRUCTOR;

    interface SHOW_RANDOM_ANIMATION extends ig.ActionStepBase {}
    interface SHOW_RANDOM_ANIMATION_CONSTRUCTOR extends ImpactClass<SHOW_RANDOM_ANIMATION> {
      new(settings: unknown): SHOW_RANDOM_ANIMATION
    }
    var SHOW_RANDOM_ANIMATION: SHOW_RANDOM_ANIMATION_CONSTRUCTOR;

    interface SHOW_EXTERN_ANIM extends ig.ActionStepBase {}
    interface SHOW_EXTERN_ANIM_CONSTRUCTOR extends ImpactClass<SHOW_EXTERN_ANIM> {
      new(settings: unknown): SHOW_EXTERN_ANIM
    }
    var SHOW_EXTERN_ANIM: SHOW_EXTERN_ANIM_CONSTRUCTOR;

    interface CLEAR_ANIMATION extends ig.ActionStepBase {}
    interface CLEAR_ANIMATION_CONSTRUCTOR extends ImpactClass<CLEAR_ANIMATION> {
      new(settings: unknown): CLEAR_ANIMATION
    }
    var CLEAR_ANIMATION: CLEAR_ANIMATION_CONSTRUCTOR;

    interface SET_COLL_SIZE extends ig.ActionStepBase {}
    interface SET_COLL_SIZE_CONSTRUCTOR extends ImpactClass<SET_COLL_SIZE> {
      new(settings: unknown): SET_COLL_SIZE
    }
    var SET_COLL_SIZE: SET_COLL_SIZE_CONSTRUCTOR;

    interface CHANGE_VAR_NUMBER extends ig.ActionStepBase {}
    interface CHANGE_VAR_NUMBER_CONSTRUCTOR extends ImpactClass<CHANGE_VAR_NUMBER> {
      new(settings: unknown): CHANGE_VAR_NUMBER
    }
    var CHANGE_VAR_NUMBER: CHANGE_VAR_NUMBER_CONSTRUCTOR;

    interface SET_RANDOM_VAR_NUMBER extends ig.ActionStepBase {}
    interface SET_RANDOM_VAR_NUMBER_CONSTRUCTOR extends ImpactClass<SET_RANDOM_VAR_NUMBER> {
      new(settings: unknown): SET_RANDOM_VAR_NUMBER
    }
    var SET_RANDOM_VAR_NUMBER: SET_RANDOM_VAR_NUMBER_CONSTRUCTOR;

    interface CHANGE_VAR_BOOL extends ig.ActionStepBase {}
    interface CHANGE_VAR_BOOL_CONSTRUCTOR extends ImpactClass<CHANGE_VAR_BOOL> {
      new(settings: unknown): CHANGE_VAR_BOOL
    }
    var CHANGE_VAR_BOOL: CHANGE_VAR_BOOL_CONSTRUCTOR;

    interface CHANGE_VAR_STRING extends ig.ActionStepBase {}
    interface CHANGE_VAR_STRING_CONSTRUCTOR extends ImpactClass<CHANGE_VAR_STRING> {
      new(settings: unknown): CHANGE_VAR_STRING
    }
    var CHANGE_VAR_STRING: CHANGE_VAR_STRING_CONSTRUCTOR;

    interface CHANGE_VAR_LANG extends ig.ActionStepBase {}
    interface CHANGE_VAR_LANG_CONSTRUCTOR extends ImpactClass<CHANGE_VAR_LANG> {
      new(settings: unknown): CHANGE_VAR_LANG
    }
    var CHANGE_VAR_LANG: CHANGE_VAR_LANG_CONSTRUCTOR;

    interface SET_ATTRIB_VEC2 extends ig.ActionStepBase {}
    interface SET_ATTRIB_VEC2_CONSTRUCTOR extends ImpactClass<SET_ATTRIB_VEC2> {
      new(settings: unknown): SET_ATTRIB_VEC2
    }
    var SET_ATTRIB_VEC2: SET_ATTRIB_VEC2_CONSTRUCTOR;

    interface SET_ATTRIB_BOOL extends ig.ActionStepBase {}
    interface SET_ATTRIB_BOOL_CONSTRUCTOR extends ImpactClass<SET_ATTRIB_BOOL> {
      new(settings: unknown): SET_ATTRIB_BOOL
    }
    var SET_ATTRIB_BOOL: SET_ATTRIB_BOOL_CONSTRUCTOR;

    interface SET_ATTRIB_STRING extends ig.ActionStepBase {}
    interface SET_ATTRIB_STRING_CONSTRUCTOR extends ImpactClass<SET_ATTRIB_STRING> {
      new(settings: unknown): SET_ATTRIB_STRING
    }
    var SET_ATTRIB_STRING: SET_ATTRIB_STRING_CONSTRUCTOR;

    interface SET_ATTRIB_NUMBER extends ig.ActionStepBase {}
    interface SET_ATTRIB_NUMBER_CONSTRUCTOR extends ImpactClass<SET_ATTRIB_NUMBER> {
      new(settings: unknown): SET_ATTRIB_NUMBER
    }
    var SET_ATTRIB_NUMBER: SET_ATTRIB_NUMBER_CONSTRUCTOR;

    interface SET_ATTRIB_NUMBER_RANDOM extends ig.ActionStepBase {}
    interface SET_ATTRIB_NUMBER_RANDOM_CONSTRUCTOR extends ImpactClass<SET_ATTRIB_NUMBER_RANDOM> {
      new(settings: unknown): SET_ATTRIB_NUMBER_RANDOM
    }
    var SET_ATTRIB_NUMBER_RANDOM: SET_ATTRIB_NUMBER_RANDOM_CONSTRUCTOR;

    interface SET_ATTRIB_FACE extends ig.ActionStepBase {}
    interface SET_ATTRIB_FACE_CONSTRUCTOR extends ImpactClass<SET_ATTRIB_FACE> {
      new(settings: unknown): SET_ATTRIB_FACE
    }
    var SET_ATTRIB_FACE: SET_ATTRIB_FACE_CONSTRUCTOR;

    interface SET_ATTRIB_POS extends ig.ActionStepBase {}
    interface SET_ATTRIB_POS_CONSTRUCTOR extends ImpactClass<SET_ATTRIB_POS> {
      new(settings: unknown): SET_ATTRIB_POS
    }
    var SET_ATTRIB_POS: SET_ATTRIB_POS_CONSTRUCTOR;

    interface PLAY_SOUND extends ig.ActionStepBase {}
    interface PLAY_SOUND_CONSTRUCTOR extends ImpactClass<PLAY_SOUND> {
      new(settings: unknown): PLAY_SOUND
    }
    var PLAY_SOUND: PLAY_SOUND_CONSTRUCTOR;

    interface STOP_SOUNDS extends ig.ActionStepBase {}
    interface STOP_SOUNDS_CONSTRUCTOR extends ImpactClass<STOP_SOUNDS> {
      new(settings: unknown): STOP_SOUNDS
    }
    var STOP_SOUNDS: STOP_SOUNDS_CONSTRUCTOR;

    interface PLAY_RANDOM_SOUND extends ig.ActionStepBase {}
    interface PLAY_RANDOM_SOUND_CONSTRUCTOR extends ImpactClass<PLAY_RANDOM_SOUND> {
      new(settings: unknown): PLAY_RANDOM_SOUND
    }
    var PLAY_RANDOM_SOUND: PLAY_RANDOM_SOUND_CONSTRUCTOR;

    interface HIDE extends ig.ActionStepBase {}
    interface HIDE_CONSTRUCTOR extends ImpactClass<HIDE> {
      new(settings: unknown): HIDE
    }
    var HIDE: HIDE_CONSTRUCTOR;

    interface HIDE_OTHER extends ig.ActionStepBase {}
    interface HIDE_OTHER_CONSTRUCTOR extends ImpactClass<HIDE_OTHER> {
      new(settings: unknown): HIDE_OTHER
    }
    var HIDE_OTHER: HIDE_OTHER_CONSTRUCTOR;

    interface SET_POS extends ig.ActionStepBase {}
    interface SET_POS_CONSTRUCTOR extends ImpactClass<SET_POS> {
      new(settings: unknown): SET_POS
    }
    var SET_POS: SET_POS_CONSTRUCTOR;

    interface ROUND_POSITION extends ig.ActionStepBase {}
    interface ROUND_POSITION_CONSTRUCTOR extends ImpactClass<ROUND_POSITION> {
      new(settings: unknown): ROUND_POSITION
    }
    var ROUND_POSITION: ROUND_POSITION_CONSTRUCTOR;

    interface ADD_Z_POS_DELTA extends ig.ActionStepBase {}
    interface ADD_Z_POS_DELTA_CONSTRUCTOR extends ImpactClass<ADD_Z_POS_DELTA> {
      new(settings: unknown): ADD_Z_POS_DELTA
    }
    var ADD_Z_POS_DELTA: ADD_Z_POS_DELTA_CONSTRUCTOR;

    interface TELEPORT_TO_ATTRIB_POS extends ig.ActionStepBase {}
    interface TELEPORT_TO_ATTRIB_POS_CONSTRUCTOR extends ImpactClass<TELEPORT_TO_ATTRIB_POS> {
      new(settings: unknown): TELEPORT_TO_ATTRIB_POS
    }
    var TELEPORT_TO_ATTRIB_POS: TELEPORT_TO_ATTRIB_POS_CONSTRUCTOR;

    interface INTERPOLATE_POSITION extends ig.ActionStepBase {}
    interface INTERPOLATE_POSITION_CONSTRUCTOR extends ImpactClass<INTERPOLATE_POSITION> {
      new(settings: unknown): INTERPOLATE_POSITION
    }
    var INTERPOLATE_POSITION: INTERPOLATE_POSITION_CONSTRUCTOR;

    interface Z_INTERPOLATE extends ig.ActionStepBase {}
    interface Z_INTERPOLATE_CONSTRUCTOR extends ImpactClass<Z_INTERPOLATE> {
      new(settings: unknown): Z_INTERPOLATE
    }
    var Z_INTERPOLATE: Z_INTERPOLATE_CONSTRUCTOR;

    interface DO_ATTRIB_ACTION extends ig.ActionStepBase {}
    interface DO_ATTRIB_ACTION_CONSTRUCTOR extends ImpactClass<DO_ATTRIB_ACTION> {
      new(settings: unknown): DO_ATTRIB_ACTION
    }
    var DO_ATTRIB_ACTION: DO_ATTRIB_ACTION_CONSTRUCTOR;

    interface ADD_ANIM_MOD extends ig.ActionStepBase {}
    interface ADD_ANIM_MOD_CONSTRUCTOR extends ImpactClass<ADD_ANIM_MOD> {
      new(settings: unknown): ADD_ANIM_MOD
    }
    var ADD_ANIM_MOD: ADD_ANIM_MOD_CONSTRUCTOR;

    interface REMOVE_ANIM_MOD extends ig.ActionStepBase {}
    interface REMOVE_ANIM_MOD_CONSTRUCTOR extends ImpactClass<REMOVE_ANIM_MOD> {
      new(settings: unknown): REMOVE_ANIM_MOD
    }
    var REMOVE_ANIM_MOD: REMOVE_ANIM_MOD_CONSTRUCTOR;


  }
}
