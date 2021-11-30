import { Animation } from "konva/lib/Animation";
import { Image } from "konva/lib/shapes/Image";
import Player from "./Player";

class EntityAnimation {
  #animation;
  constructor(image: Image, player: Player, map: Array<any>) {
    let time = 0;
    this.#animation = new Animation(({timeDiff}:any) => {
      time++;
      if(time > timeDiff/10){
        time = 0;
        player.cropProperty.x += 32;
        if(player.cropProperty.x >= player.sprite.width ){
          player.cropProperty.x = 0;
        }
      }
      image.position(player.getPosition());
        player.moveX(map,timeDiff)
        player.moveY(map,timeDiff)
        image.crop(player.cropProperty)
    });
  }
  startAnimation = () => this.#animation.start();
  stopAnimation = () => this.#animation.stop();
}

export default EntityAnimation;
