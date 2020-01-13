function setup() {
  size = 30;
  cell_size = 17;
  let canvas = createCanvas(size * cell_size, size * cell_size);
  canvas.parent("canvas-div");
  t = new Table(size, cell_size);
  t.generateCells();
  frameRate(30);
}

function draw() {
  if (state == 1) t.process();
  t.redraw();
}
