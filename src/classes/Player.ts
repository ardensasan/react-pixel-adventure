import Entity from "./Entity";
import KeyboardState from "./KeyboardState";

class Player extends Entity {
  #keyboard = new KeyboardState();
  constructor(x = 0, y = 0, w = 32, h = 32) {
    super(x, y, w, h);
  }

  addListener = () => {
    window.addEventListener("keydown", ({ code }) => {
      this.#keyboard.setKeyboardState(code,true);
    });

    window.addEventListener("keyup", ({ code }) => {
      this.#keyboard.setKeyboardState(code,false);
    });
  };

  removeListener = () => {
    window.removeEventListener("keydown", ({ code }) => {
      this.#keyboard.setKeyboardState(code,true);
    });

    window.removeEventListener("keyup", ({ code }) => {
      this.#keyboard.setKeyboardState(code,false);
    });
  };

  moveEntity = () => {
    if (this.#keyboard.KeyA) {
      this.setXPosition(this.getXPosition() + this.getSpeed() * -1);
    }
    if (this.#keyboard.KeyD) {
      this.setXPosition(this.getXPosition() + this.getSpeed());
    }

    if (this.#keyboard.KeyS) {
      this.setYPosition(this.getYPosition() + this.getSpeed() * 1);
    }
    if (this.#keyboard.KeyW) {
      this.setYPosition(this.getYPosition() + this.getSpeed() * -1);
    }
  };
  getKeyboardState = () => this.#keyboard;
}

export default Player;
