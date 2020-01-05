function setup() { 
    createCanvas(400, 400);
    g = new GOLCanvas();
    frameRate(2);
  } 
  
  function draw() {
    if (g.index == 0) {
        background('#FF00FF');
        g.index++;
    }
    else {
        background('#00FFFF');
        g.index = 0;
    }
    
  }

  function GOLCanvas() {
      this.index = 0;
  }