import { checkTileIntersection } from "../utils/intersection";
import Entity from "./Entity";
import KeyboardState from "./KeyboardState";

class Player extends Entity {
  #downwardForce = 0.5
  #keyboard = new KeyboardState();
  constructor(x = 0, y = 0, w = 32, h = 32) {
    super(x, y, w, h);
  }

  addListener = () => {
    window.addEventListener("keydown", ({ code }) => {
      this.#keyboard.setKeyboardState(code, true);
    });

    window.addEventListener("keyup", ({ code }) => {
      this.#keyboard.setKeyboardState(code, false);
    });
  };

  removeListener = () => {
    window.removeEventListener("keydown", ({ code }) => {
      this.#keyboard.setKeyboardState(code, true);
    });

    window.removeEventListener("keyup", ({ code }) => {
      this.#keyboard.setKeyboardState(code, false);
    });
  };

  moveX = (map: Array<any>,timeDiff:number) => {
    let tempXPosition = this.getXPosition();
    if (this.#keyboard.KeyA) {
      this.setXPosition(this.getXPosition() + this.getSpeed() * (-1*timeDiff));
    }
    if (this.#keyboard.KeyD) {
      this.setXPosition(this.getXPosition() + (this.getSpeed()*timeDiff));
    }
    if(checkTileIntersection(this,map)){
      this.setXPosition(tempXPosition)
    }
  };

  moveY = (map: Array<any>,timeDiff:number) =>{
    let tempYPosition  = this.getYPosition()
    this.setYPosition(tempYPosition+(this.#downwardForce*16))
    if(this.#keyboard.Space){
      console.log('%c 🌯 this.#keyboard.Space: ', 'font-size:20px;background-color: #2EAFB0;color:#fff;', this.#keyboard.Space);
      this.setYPosition(tempYPosition-20)
    }
    if(checkTileIntersection(this,map)){
      this.setYPosition(tempYPosition)
    }
  }
  resetKeyboardState = () => {
    this.#keyboard.resetKeyboardState();
  }
  getKeyboardState = () => this.#keyboard;
}

export default Player;
