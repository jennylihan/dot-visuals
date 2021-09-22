let cs_col = "orange";
let reg_col = "black";
let total = 1829;
let highlighted_num = 263;
let count = 0;
let block_space = 55;
let row_gap = 5;
let row_not_col = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(color("white"));
}

function draw() {
  count = 0;
  noStroke();

  let num_rows = Math.floor(total / 1000) + 1;

  for (let x = 0; x < num_rows; x++) {
    stack(5, 5 + block_space * x, 10);
  }
}

function stack(startx, starty, num, count) {
  for (let x = 0; x < num; x++) {
    hundred_block(startx + x * block_space, starty);
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
      if (count < highlighted_num) {
        fill(cs_col);
      } else {
        fill(reg_col);
      }
      if (count >= total) return;
      count += 1;
      ellipse(startx + x * row_gap, starty + y * row_gap, 2, 2);
    }
  }
}
