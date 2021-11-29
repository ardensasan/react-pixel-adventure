class Entity {
  #x = 0;
  #y = 0;
  #height = 0;
  #width = 0;
  constructor(x = 0, y = 0, height = 32, width = 32) {
    this.#x = x;
    this.#y = y;
    this.#height = height;
    this.#width = width;
    
  }
  setXPosition = (x:number) => this.#x = x;
  setYPosition = (y:number) => this.#y = y;
  getPosition = () => ({x:this.#x,y:this.#y})
  getXPosition = () => this.#x
  getYPosition = () => this.#y
  getWidth = () => this.#width
  getHeight = () => this.#height
}

export default Entity;
