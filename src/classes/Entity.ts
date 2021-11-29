class Entity {
  #x = 0;
  #y = 0;
  #h = 0;
  #w = 0;
  #xDirection = 1;
  #speed = 0.1;
  constructor(x = 0, y = 0, w = 32, h = 32) {
    this.#x = x;
    this.#y = y;
    this.#h = h;
    this.#w = w;
  }
  //setters
  moveX = (map: Array<any>,timeDiff:number) => {}
  moveY = (map: Array<any>,timeDiff:number) => {}
  setPosition = (x: number, y: number) => {
    this.#x = x;
    this.#y = y;
  };
  setXPosition = (x: number) => (this.#x = x);
  setYPosition = (y: number) => (this.#y = y);
  setXDirection = (direction: number) => (this.#xDirection = direction);
  //getters
  getPosition = () => ({ x: this.#x, y: this.#y });
  getXPosition = () => this.#x;
  getYPosition = () => this.#y;
  getXDirection = () => this.#xDirection;
  getWidth = () => this.#w;
  getHeight = () => this.#h;
  getSpeed = () => this.#speed;
}

export default Entity;
