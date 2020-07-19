export {};

interface minimalRGBColor {
  r: number;
  g: number;
  b: number;
}

declare global {
  namespace ig {
    interface RGBColor extends minimalRGBColor {
      ok: boolean;
      toRGB() : string;
      toHex() : string;
      assign(color: minimalRGBColor) : void;
      addColor(color: minimalRGBColor, interpolate: number) : void;
    }
    interface RGBColorConstructor {
      new (csscolor?: string): RGBColor;
      interpolate(
        from: minimalRGBColor,
        to: minimalRGBColor,
        ratio: number,
        res: minimalRGBColor
      ): void
    }
    var RGBColor : RGBColorConstructor;
  }
}
