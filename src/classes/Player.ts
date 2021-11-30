import { checkTileIntersection } from "../utils/intersection";
import Entity from "./Entity";
import KeyboardState from "./KeyboardState";

class Player extends Entity {
  #yVelocity = 1;
  #isJumping = false;
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

  moveX = (map: Array<any>, timeDiff: number) => {
    let tempXPosition = this.getXPosition();
    if (this.#keyboard.KeyA) {
      this.setXPosition(tempXPosition - this.getSpeed() * timeDiff);
      if (checkTileIntersection(this, map)) {
        tempXPosition = Math.ceil(tempXPosition)
        this.setXPosition(tempXPosition);
        while (!checkTileIntersection(this, map)) {
          tempXPosition = this.getXPosition();
          this.setXPosition(tempXPosition - 1);
        }
        this.setXPosition(tempXPosition);
      }
    }
    if (this.#keyboard.KeyD) {
      this.setXPosition(tempXPosition + this.getSpeed() * timeDiff);
      if (checkTileIntersection(this, map)) {
        tempXPosition = Math.floor(tempXPosition)
        this.setXPosition(tempXPosition);
        while (!checkTileIntersection(this, map)) {
          tempXPosition = this.getXPosition();
          this.setXPosition(tempXPosition + 1);
        }
        this.setXPosition(tempXPosition);
      }
    }
  };

  moveY = (map: Array<any>, timeDiff: number) => {
    let tempYPosition = this.getYPosition();
    this.setYPosition(this.getYPosition()+this.#yVelocity*timeDiff)
    if(checkTileIntersection(this, map)){
      this.setYPosition(Math.floor(tempYPosition));
      while (!checkTileIntersection(this, map)) {
        tempYPosition = this.getYPosition();
        this.setYPosition(tempYPosition + 1);
      }
      this.setYPosition(tempYPosition);
      this.#isJumping = false;
    }

    if(this.#keyboard.Space && !this.#isJumping){
      this.#isJumping = true;
      this.setYPosition(this.getYPosition()-100)
    }
  };

  IsJumping = () => this.#isJumping;
  resetKeyboardState = () => {
    this.#keyboard.resetKeyboardState();
  };

  getKeyboardState = () => this.#keyboard;
}

export default Player;
