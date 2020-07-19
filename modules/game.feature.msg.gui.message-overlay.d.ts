import './impact.feature.gui.gui';
import './game.feature.msg.gui.message-box';
import './game.feature.model.options-model';

export {};

declare global {
  namespace ig {

    interface MessageOverlayGui extends ig.GuiElementBase {
    }
    namespace MessageOverlayGui {
      interface BlackBar extends ig.GuiElementBase {
      }
      interface BlackBarConstructor {
        new() : BlackBar;
      }
      var BlackBar : BlackBarConstructor;

      interface BottomShadow extends ig.GuiElementBase {
      }
      interface BottomShadowConstructor {
              pattern: ig.ImagePattern;
              new() : BottomShadow;
      }
      var BottomShadow : BottomShadowConstructor;
    }

  }
}
