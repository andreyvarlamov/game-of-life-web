function setup() { 
    size = 30;
    cell_size = 12;
    createCanvas(size*cell_size+1, size*cell_size+1);
    t = new Table(size, cell_size);
    t.generateCells();
    frameRate(5);
  } 
  
  function draw() {
    
    t.process();
    t.redraw();
    
  }