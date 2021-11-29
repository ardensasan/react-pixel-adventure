import { Animation } from "konva/lib/Animation";
import { Rect } from "konva/lib/shapes/Rect";
import { checkTileIntersection } from "../utils/intersection";
import Player from "./Player";

class EntityAnimation {
  #animation;
  constructor(rect: Rect, player: Player,map:Array<any>) {
    this.#animation = new Animation(() => {
      rect.position(player.getPosition());
      checkTileIntersection(player,map)
    });
  }

  startAnimation = () => this.#animation.start();
  stopAnimation = () => this.#animation.stop();
}

export default EntityAnimation;
