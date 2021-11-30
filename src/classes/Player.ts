import { checkTileIntersection } from "../utils/intersection";
import Entity from "./Entity";
import KeyboardState from "./KeyboardState";
import run_right from "../assets/run_right.png";
import run_left from "../assets/run_left.png";
import idle_right from '../assets/idle_right.png'
import idle_left from '../assets/idle_left.png'
class Player extends Entity {
  #yVelocity = 1;
  #isJumping = false;
  #keyboard = new KeyboardState();
  #cropProperty = {
    x: 0,
    y: 0,
    height: 32,
    width: 32,
  };
  constructor(x = 0, y = 0, w = 32, h = 32) {
    super(x, y, w, h);
    this.sprite.src = run_right;
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
    this.setIsMoving(false);
    this.sprite.src = this.getXDirection() === 1 ? idle_right : idle_left;
    let tempXPosition = this.getXPosition();
    if (this.#keyboard.KeyA) {
      this.setXDirection(-1)
      this.setIsMoving(true);
      this.sprite.src = run_left;
      this.setXPosition(tempXPosition - this.getSpeed() * timeDiff);
      if (checkTileIntersection(this, map)) {
        tempXPosition = Math.ceil(tempXPosition);
        this.setXPosition(tempXPosition);
        while (!checkTileIntersection(this, map)) {
          tempXPosition = this.getXPosition();
          this.setXPosition(tempXPosition - 1);
        }
        this.setXPosition(tempXPosition);
      }
    }
    if (this.#keyboard.KeyD) {
      this.setXDirection(1)
      this.setIsMoving(true);
      this.sprite.src = run_right;
      this.setXPosition(tempXPosition + this.getSpeed() * timeDiff);
      if (checkTileIntersection(this, map)) {
        tempXPosition = Math.floor(tempXPosition);
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
    if (this.#yVelocity < 1) {
      this.#yVelocity += 0.05;
    }
    this.setYPosition(this.getYPosition() + this.#yVelocity * timeDiff);
    if (checkTileIntersection(this, map)) {
      if (this.#yVelocity < 0) {
        this.setYPosition(Math.ceil(tempYPosition));
        while (!checkTileIntersection(this, map)) {
          tempYPosition = this.getYPosition();
          this.setYPosition(tempYPosition - 1);
          this.#yVelocity = 0;
        }
      } else {
        this.setYPosition(Math.floor(tempYPosition));
        while (!checkTileIntersection(this, map)) {
          tempYPosition = this.getYPosition();
          this.setYPosition(tempYPosition + 1);
        }
        this.#yVelocity = 1;
        this.#isJumping = false;
      }
      this.setYPosition(tempYPosition);
    }

    if (this.#keyboard.Space && !this.#isJumping) {
      this.#yVelocity = -1;
      this.#isJumping = true;
    }
  };
  IsJumping = () => this.#isJumping;
  resetKeyboardState = () => this.#keyboard.resetKeyboardState();
  getKeyboardState = () => this.#keyboard;
}

export default Player;
