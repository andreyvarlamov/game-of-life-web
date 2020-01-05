function setup() { 
    size = 50;
    cell_size = 10;
    createCanvas(size*cell_size+1, size*cell_size+1);
    t = new Table(size, cell_size);
    
    frameRate(5);
  } 
  
  function draw() {
    t.generateCells();
    t.redraw();
    
  }