import { checkTileIntersection } from "../utils/intersection";
import Entity from "./Entity";
import KeyboardState from "./KeyboardState";

class Player extends Entity {
  #downwardForce = 0.5;
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
      this.setXPosition(
        this.getXPosition() + this.getSpeed() * (-1 * timeDiff)
      );
      const tile = checkTileIntersection(this, map);
      if (tile) {
        this.setXPosition(tile.x + tile.w);
      }
    }
    if (this.#keyboard.KeyD) {
      this.setXPosition(this.getXPosition() + this.getSpeed() * timeDiff);
      const tile = checkTileIntersection(this, map);
      if (tile) {
        this.setXPosition(tile.x - tile.w);
      }
    }
  };

  moveY = (map: Array<any>, timeDiff: number) => {
    let tempYPosition = this.getYPosition();
    this.setYPosition(tempYPosition + this.#downwardForce * 16);
    if (this.#keyboard.Space) {
      this.setYPosition(tempYPosition - 20);
      const tile = checkTileIntersection(this, map);
      if (tile) {
        this.setYPosition(tile.y + tile.h);
      }
    }
    const tile = checkTileIntersection(this, map);
    if (tile) {
      this.setYPosition(tile.y - tile.h);
    }
  };
  resetKeyboardState = () => {
    this.#keyboard.resetKeyboardState();
  };
  getKeyboardState = () => this.#keyboard;
}

export default Player;
