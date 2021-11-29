import Entity from "./Entity";

class Player extends Entity {
  constructor(x = 0, y = 0, height = 32, width = 32) {
    super(x, y, height, width);
  }

  addListener = () => {
    window.addEventListener("keydown", ({ code }) => {
      if (code === "KeyD") {
        this.setXPosition(this.getXPosition() + 1);
      }
      if (code === "KeyA") {
        this.setXPosition(this.getXPosition() - 1);
      }
      if (code === "KeyS") {
        this.setYPosition(this.getYPosition() + 1);
      }
      if (code === "KeyW") {
        this.setYPosition(this.getYPosition() - 1);
      }
    });
  };
}

export default Player;
