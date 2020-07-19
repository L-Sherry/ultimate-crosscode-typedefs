export {};

declare global {
  interface Vec2 {
    x: number;
    y: number;
  }

  namespace Vec2 {
    function create(vec?: Vec2): Vec2;
    function createC(x?: number | null, y?: number | null): Vec2;

    function assign(a: Vec2, b: Vec2): Vec2;
    function assignC(to: Vec2, x?: number | null, y?: number | null): Vec2;

    function add(to: Vec2, from: Vec2, result?: Vec2): Vec2;
    // result = to + from * factor
    function addMulF(to: Vec2, from: Vec2, factor: number, result?: Vec2): Vec2;
    function addC(to: Vec2, x?: number | null, y?: number | null, result?: Vec2): Vec2;

    function sub(to: Vec2, from: Vec2, result?: Vec2): Vec2;
    function subC(to: Vec2, x?: number | null, y?: number | null, result?: Vec2): Vec2;

    // per-component product
    function mul(to: Vec2, from: Vec2, result? : Vec2): Vec2;
    function mulC(to: Vec2, x?: number | null, y?: number | null, result? : Vec2): Vec2;
    function mulF(to: Vec2, factor?: number | null, result? : Vec2): Vec2;

    function div(to: Vec2, from: Vec2, result? : Vec2): Vec2;
    function divC(to: Vec2, x?: number | null, y?: number | null, result? : Vec2): Vec2;

    function dot(a: Vec2, b: Vec2): number;
    // det [A B]
    function dotR(a: Vec2, b: Vec2): number;

    function length(vector: Vec2): number;
    function length(vector: Vec2, newLength: number, result?: Vec2): Vec2;

    function limit(vector: Vec2, minimumLength: number, maximumLength: number, result?: Vec2): Vec2;

    function normalize(vector: Vec2, result?: Vec2): Vec2;

    // equivalent to atan2(x, -y), but always positive
    function clockangle(vec: Vec2) : number;

    // absolute angle difference
    function angle(a: Vec2, b: Vec2): number;

    // note: angle3Point is both buggy and unused.

    function areClockwise(from: Vec2, to: Vec2): boolean;

    // looks at relative angle between from and to
    function isAngleInRange(from: Vec2, to: Vec2, minAngle: number, maxAngle: number): boolean;

    function rotate(vec: Vec2, angleClockwise: number, result?: Vec2): Vec2;
    function rotate90CW(vec: Vec2, result?: Vec2): Vec2;
    function rotate90CCW(vec: Vec2, result?: Vec2): Vec2;

    // flip(x) = -x
    function flip(vec: Vec2, result?: Vec2): Vec2;

    // rotate vec toward 'toward' for up to maxAngle.
    // Returns true if their angle is/become zero
    function rotateToward(vec: Vec2, toward: Vec2, maxAngle: number): boolean;

    function equal(a: Vec2, b: Vec2): boolean;
    // tolerance is a square of size 2*epsilon
    function epsilonEquals(a: Vec2, b: Vec2, epsilon: number): boolean;

    function distance(point1: Vec2, point2: Vec2): number;
    function lengthVec(vector: Vec2): number;
    function distanceC(x1: number, y1: number, x2: number, y2: number): number;
    function squareDistance(point1: Vec2, point2: Vec2): number;

    // Non-normalized linear interpolation.
    // Returns a if factor == 0, b if factor == 1
    function lerp(a: Vec2, b: Vec2, factor: number, result?: Vec2): Vec2;
    // per-component min
    function min(a: Vec2, b: Vec2, result?: Vec2): Vec2;
    function minC(vec1: Vec2, x2: number, y2: number, result?: Vec2): Vec2;

    function max(a: Vec2, b: Vec2, result?: Vec2): Vec2;
    function maxC(vec1: Vec2, x2: number, y2: number, result?: Vec2): Vec2;

    function print(vector: Vec2): Vec2;

    // Round angle of vector to one of the 8 directions if the change is less than maxAngle.
    // If maxAngle >= PI/8, will not round to the closest direction.
    function round(vector: Vec2, maxAngle: number): Vec2;
  }

  interface Vec3 {
    x: number;
    y: number;
    z: number;
  }

  namespace Vec3 {
    function create(vec?: Vec3): Vec3;
    function createC(x?: number | null, y?: number | null, z?: number | null): Vec3;

    function assign(to: Vec3, from: Vec3): Vec3;
    function assignC(to: Vec3, x? : number | null, y? : number | null, z? : number | null): Vec3;

    function add(to: Vec3, from: Vec3, result?: Vec3): Vec3;
    // result = to + from * factor
    function addMulF(to: Vec3, from: Vec3, factor: number, result?: Vec3): Vec3;
    function addC(to: Vec3, x?: number | null, y?: number | null, z?: number | null, result? : Vec3): Vec3;

    function sub(to: Vec3, from: Vec3, result?: Vec3): Vec3;
    function subC(to: Vec3, x?: number | null, y?: number | null, z?: number | null, result? : Vec3): Vec3;

    // per-component product
    function mul(to: Vec3, from: Vec3, result? : Vec3): Vec3;
    function mulC(to: Vec3, x?: number | null, y?: number | null, z?: number | null, result? : Vec3): Vec3;
    function mulF(to: Vec3, factor?: number | null, result? : Vec3): Vec3;
    function div(to: Vec3, from: Vec3, result? : Vec3): Vec3;
    function divC(to: Vec3, x?: number | null, y?: number | null, z?: number | null, result? : Vec3): Vec3;

    function dot(a: Vec3, b: Vec3): number;
    function length(vector: Vec3): number;
    function length(vector: Vec3, newLength: number, result?: Vec3): Vec3;
    function normalize(vector: Vec3, result?: Vec3): Vec3;

    // flip(v) = -v
    function flip(v: Vec3, result?: Vec3): Vec3;
    function equal(a: Vec3, b: Vec3): boolean;
    function distance(point1: Vec3, point2: Vec3): number;

    // non-normalized linear interpolation
    function lerp(a: Vec3, b: Vec3, factor: number, result?: Vec3): Vec3;

    // roughly equivalent to atan2(z-y, x)
    function clockangle(vec: Vec3) : number;
    function print(vec3: Vec3): string;
    function isZero(Vec3: Vec3): boolean;
  }

  interface KeySpline {
    get(this: this, t: number): number;
  }
  // note that `KeySpline` is not an impact class
  interface KeySplineConstructor {
    // eslint-disable-next-line @typescript-eslint/prefer-function-type
    new (x1: number, y1: number, x2: number, y2: number): KeySpline;
  }
  var KeySpline: KeySplineConstructor;

  namespace KEY_SPLINES {
    var EASE_IN_OUT: KeySpline;
    var EASE_OUT: KeySpline;
    var EASE_IN: KeySpline;
    var EASE: KeySpline;
    var EASE_SOUND: KeySpline;
    var LINEAR: KeySpline;
    var JUMPY: KeySpline;
    var EASE_OUT_STRONG: KeySpline;
    var EASE_IN_STRONG: KeySpline;
  }

  namespace ig {
    var currentLang: string;

    namespace Resource {
      type LoadCallback = (type: string, path: string, success: boolean) => void;
    }
    interface Resource {
      cacheType: string;
      path: string;
      load(this: this, loadCallback?: ig.Resource.LoadCallback): void;
    }
    var resources: ig.Resource[];

    var ready: boolean;
    var loading: boolean;
    var baked: boolean;

    var nocache: string;
    var root: string;
    var lib: string;

    interface Module {
      name?: string;
      requires: string[];
      loaded: boolean;
      body: (() => void) | null;
    }
    var modules: Record<string, ig.Module>;
    var _current: ig.Module | null;
    var _waitForOnload: number;

    function $new<K extends keyof HTMLElementTagNameMap>(tagName: K): HTMLElementTagNameMap[K];
    function $new(tagName: string): HTMLElement;

    function copy<T>(object: T): T;
    function merge<T, U>(original: T, extended: U, noArrayMerge?: boolean): T & U;

    function module(name: string): typeof ig;
    function requires(...names: string[]): typeof ig;
    function defines(body: () => void): void;

    function addResource(resource: ig.Resource): void;
    function getCacheSuffix(): string;

    function addGameAddon(callback: () => ig.GameAddon): void;
    function initGameAddons(): ig.GameAddon[];

    function _execModules(): void;

    interface Class {
      readonly classId: number;
    }
    interface ClassConstructor extends ImpactClass<Class> {
      new (): Class;
    }
    var Class: ClassConstructor;

    let langFileList: string[];

    enum PLATFORM_TYPES {
      UNKNOWN = 0,
      DESKTOP = 1,
      BROWSER = 2,
      MOBILE = 3,
      WIIU = 4,
    }

    var platform: ig.PLATFORM_TYPES;
  }

  namespace sc {}

  interface Number {
    map(this: this, min1: number, max1: number, min2: number, max2: number): number;
    limit(this: this, min: number, max: number): number;
    round(this: this, precision: number): number;
    floor(this: this): number;
    ceil(this: this): number;
    toInt(this: this): number;
  }

  interface Array<T> {
    erase(this: this, item: T): this;
    last(this: this): T;
    intersect(this: this, otherArray: T[]): boolean;
    random(this: this): T;
  }

  interface String {
    toPath(this: this, prefix: string, suffix: string): string;
    toDir(this: this, prefix: string): string;
    toKey(this: this, prefix: string, suffix: string): string;
    toCamel(this: this): string;
  }

  var IG_ROOT: string;
  var IG_GAME_CACHE: string;
  var IG_GAME_DEBUG: boolean;
  var IG_GAME_BETA: boolean;
  var IG_SOUND_VOLUME: number;
  var IG_MUSIC_VOLUME: number;
  var IG_WEB_AUDIO_BGM: boolean;
  var IG_FORCE_HTML5_AUDIO: boolean;
  var IG_KEEP_WINDOW_FOCUS: boolean;
  var IG_LANG: string;
  var IG_ENTITY_KILL_CALL: boolean;
  var IG_IGNORE_OPTIONS: boolean;
  var IG_SCREEN_MODE: number;
  var IG_USE_WEBAUDIO: boolean;
  var IG_GAME_SCALE: number;
  var IG_WIDTH: number;
  var IG_HEIGHT: number;
  var MENU_ON_GAME_START: string;
  var IG_LOAD_SLOT: string;
  var IG_GAME_FPS: number;
  var SC_SKIP_TITLE: boolean;
  var LOAD_LEVEL_ON_GAME_START: string | undefined | null;
  var MARKER_ON_GAME_START: string | undefined | null;
}
