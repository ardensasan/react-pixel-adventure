class KeyboardState {
  KeyA = false;
  KeyD = false;
  KeyW = false;
  KeyS = false;
  Space = false;
  setKeyboardState = (code: string, bool: boolean) => {
    if (code === "KeyA") {
      this.KeyA = bool;
    }
    if (code === "KeyD") {
      this.KeyD = bool;
    }
    if(code === "Space"){
      this.Space = bool;
    }
    // if (code === "KeyW") {
    //   this.KeyW = bool;
    // }
    // if (code === "KeyS") {
    //   this.KeyS = bool;
    // }
  };

  resetKeyboardState = () =>{
    this.KeyA = false;
    this.KeyD = false;
    this.KeyW = false;
    this.KeyS = false;
  }
}

export default KeyboardState;
