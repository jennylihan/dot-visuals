let cs_col = "orange";
let reg_col = "black";
let total = 1893;
let highlighted_num = 330;
let count = 0;
let block_space = 55;
let row_gap = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(color("white"));
}

function draw() {
  count = 0;
  noStroke();
  let num_remainder = total % 100;
  let num_rows = Math.floor(total / 1000);

  for (let x = 0; x < num_rows; x++) {
    column(5, 5 + block_space * x, 10);
  }
  remainder(5, 5 + block_space * num_rows, num_remainder);
}

function column(startx, starty, num) {
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
      count += 1;
      ellipse(startx + x * row_gap, starty + y * row_gap, 2, 2);
    }
  }
}
