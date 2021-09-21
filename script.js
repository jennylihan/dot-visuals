let cs_col = "orange";
let reg_col = "black";
let total = 14171;
let count = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(color("white"));
}

function draw() {
  count = 0;
  noStroke();
  for (let x = 0; x < 14; x++) {
    column(5 + 55 * x, 5, 10);
  }
  remainder(5 + 55 * 14, 5, 71);
}

function column(startx, starty, num) {
  for (let x = 0; x < num; x++) {
    hundred_block(startx, x * 55 + starty);
  }
}

function remainder(startx, starty, num) {
  let curr_count = 0;
  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      ellipse(startx + x * 5, starty + y * 5, 2, 2);
      curr_count++;
      if (curr_count >= num) return;
    }
  }
}

function hundred_block(startx, starty) {
  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      if (count < 1889) {
        fill(cs_col);
      } else {
        fill(reg_col);
      }
      count += 1;
      ellipse(startx + x * 5, starty + y * 5, 2, 2);
    }
  }
}
