/*
The Matrix Effect itself.
All credits go to sumitKcs.
*/

import Effect from "./effect.js";

const offscreen = document.createElement("canvas");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const singleColor = "#37b24d";

const backgroundRGBvalues = "52, 58, 64";
// default color
let defaultColor = singleColor;

// creating effect object which initializes symbols array with Symbol objects
const effect = new Effect(canvas.width, canvas.height);

let lastTime = 0;
const fps = 50;
const nextframe = 1000 / fps; //for fps = 50, nextFrame = 20
let timer = 0;

ctx.fillStyle = `rgba(${backgroundRGBvalues}, 1)`;
ctx.fillRect(0, 0, canvas.width, canvas.height);

function animate(timeStamp) {
  // checking paint time difference
  const deltaTime = timeStamp - lastTime;
  //updating lastTime = current elapsed time to  paint the screen
  lastTime = timeStamp;
  // if time exceeds nextframe value then paint
  // and reset timer to zero else add delta time
  if (timer > nextframe) {
    // ctx.globalAlpha = 1;
    // drawing transparent rectangle over text to hide previous text
    ctx.globalCompositeOperation = "destination-out";
    ctx.fillStyle = `rgba(${backgroundRGBvalues}, 0.1)`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = "source-over";
    // text color
    ctx.globalAlpha = 1;
    ctx.fillStyle = defaultColor;
    //drawing text column
    effect.symbols.forEach((symbol) => {
      symbol.draw(ctx);
      symbol.update();
    });
    timer = 0;
  } else {
    timer += deltaTime;
  }

  requestAnimationFrame(animate);
}
animate(0);

window.addEventListener("resize", () => {
  offscreen.width = canvas.width;
  offscreen.height = canvas.height;
  offscreen.getContext("2d").drawImage(canvas, 0, 0);

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.fillStyle = `rgba(${backgroundRGBvalues}, 1)`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(offscreen, 0, 0);

  effect.resize(canvas.width, canvas.height, ctx);
});
