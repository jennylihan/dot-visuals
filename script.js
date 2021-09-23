let cs_col = "orange";
let reg_col = "black";
// let total = [16914];
// let highlighted_num = [2];
// let count = [0];
let total = [1790, 1717, 1718, 1740, 1829, 1738, 1746, 1893];
let highlighted_num = [144, 130, 211, 217, 263, 274, 320, 330];
let count = [0, 0, 0, 0, 0, 0, 0, 0];
let block_space = 55;
let row_gap = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(color("white"));
}

function draw() {
  count = [0, 0, 0, 0, 0, 0, 0, 0];
  noStroke();
  for (let i = 0; i < total.length; i++) {
    drawyear(i);
  }
}

function drawyear(index) {
  let num_rows = Math.floor(total[index] / 1000) + 1;

  for (let x = 0; x < num_rows; x++) {
    stack(5, 5 + block_space * x + index * 130, 10, index);
  }
}

function stack(startx, starty, num, index) {
  for (let x = 0; x < num; x++) {
    hundred_block(startx + x * block_space, starty, index);
  }
}

function hundred_block(startx, starty, index) {
  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      if (count[index] < highlighted_num[index]) {
        fill(cs_col);
      } else {
        fill(reg_col);
      }
      if (count[index] >= total[index]) return;
      count[index] += 1;
      ellipse(startx + x * row_gap, starty + y * row_gap, 2, 2);
    }
  }
}
