class KeyboardState {
  KeyA = false;
  KeyD = false;
  KeyW = false;
  KeyS = false;

  setKeyboardState = (code: string, bool: boolean) => {
    if (code === "KeyA") {
      this.KeyA = bool;
    }
    if (code === "KeyD") {
      this.KeyD = bool;
    }
    if (code === "KeyW") {
      this.KeyW = bool;
    }
    if (code === "KeyS") {
      this.KeyS = bool;
    }
  };
}

export default KeyboardState;
