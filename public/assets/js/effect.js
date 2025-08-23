/* 
Effect class, most possibly the "rain droplet" of the matrix effect
Made by sumitKcs
*/
import Symbol from "./symbol.js";

export default class Effect {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.fontSize = 17;
    this.columns = canvasWidth / this.fontSize;
    this.oldColumns = 0;
    this.symbols = [];

    this.#initialize();
  }

  #initialize() {
    // initializing symbols array with Symbol objects
    for (let i = 0; i < this.columns; i++) {
      this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
    }
  }

  #resizeInitialize() {
    //Add code where it just fills up the missing section (if any)
    if (this.oldColumns < this.columns) {
      for (let i = this.oldColumns - 1; i < this.columns; i++) {
        this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
      }
    }
    this.oldColumns = 0;
  }

  //function will be called when window resize event occurs
  resize(width, height, context) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.oldColumns = this.columns;
    this.columns = this.canvasWidth / this.fontSize;
    // this.symbols = [];
    context.globalCompositeOperation = "destination-out";
    // context.fillStyle = backgroundColor;
    // context.fillRect(0, 0, canvas.width, canvas.height);
    this.#resizeInitialize();
  }
}
