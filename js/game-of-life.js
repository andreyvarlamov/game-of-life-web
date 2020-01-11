function Table(size, cell_size) {
    this.size = size;
    this.grid = new Array(this.size);
    this.nextGrid = new Array(this.size);
    this.cell_size = cell_size;
    

    this.generateCells = function() {
        for (i = 0; i < this.grid.length; i++) {
            this.grid[i] = new Array(this.size);
            this.nextGrid[i] = new Array(this.size);
        }

        for (i = 0; i < this.size; i++) {
            for (j = 0; j < this.size; j++) {
                if (i == 0 || j == 0 || i == this.size - 1 || j == this.size - 1) this.grid[i][j] = 0;
                else this.grid[i][j] = Math.round(Math.random());

                this.nextGrid[i][j] = 0;
            }
        }
    }

    this.redraw = function() {
        for (i = 0; i < this.size; i++) {
            for (j = 0; j < this.size; j++) {
                if (this.grid[i][j] == 1) fill('#AA0F0F');
                else fill('#FFFFFF');

                stroke('#CCCCCA');
                strokeWeight(1);

                rect(i*cell_size, j*cell_size, cell_size-1, cell_size-1);
            }
        }
    }

    this.process = function() {
        for(let x = 1; x < this.size - 1; x++) {
            for(let y = 1; y < this.size - 1; y++) {
                let neighborCount = 0;

                for (let i = -1; i <= 1; i++) {
                    for (let j = -1; j <= 1; j++) {
                        neighborCount += this.grid[x+i][y+j];
                    }    
                }

                neighborCount -= this.grid[x][y]

                if (this.grid[x][y] == 1) {
                    if (neighborCount < 2 || neighborCount > 3) {
                        this.nextGrid[x][y] = 0;
                    }
                    else {
                        this.nextGrid[x][y] = 1;
                    }
                }
                else {
                    if (neighborCount == 3) {
                        this.nextGrid[x][y] = 1;
                    }
                    else {
                        this.nextGrid[x][y] = 0;
                    }
                }

                
            }
        }

        let temp = this.grid;
        this.grid = this.nextGrid;
        this.nextGrid = temp;
    }

    // this.countNeighbors = function(x, y) {
    //     var neighborCount = 0;

    //     var that = this;

    //     var count = function(offset, index) {
    //         try {
    //             var i = x+offset[0]
    //             var j = y+offset[1]
    //             var b = that.rows[i][j][0] == 1
    //             if (b) {
    //                 neighborCount++;
    //             }
    //         }
    //         catch {}
    //     }

    //     neighborOffsets.forEach(count);

    //     return neighborCount;

    // }

    // this.checkCell = function(x, y) {
    //     var neighborCount = this.countNeighbors(x, y);

    //     if (this.rows[x][y][0] == 1) {
    //         if (neighborCount < 2 || neighborCount > 3) {
    //             this.rows[x][y][1] = 0;
    //         }
    //         else {
    //             this.rows[x][y][1] = 1;
    //         }
    //     }
    //     else {
    //         if (neighborCount == 3) {
    //             this.rows[x][y][1] = 1;
    //         }
    //         else {
    //             this.rows[x][y][1] = 0;
    //         }
    //     }
    // }

    // this.processCell = function(x, y) {
    //     this.rows[x][y][0] = this.rows[x][y][1];
    // }

    // this.process = function() {
    //     for(i=0; i<this.size; i++) {
    //         for (j=0; j<this.size; j++) {
    //             this.checkCell(i, j);
    //         }
    //     }
    //     for(i=0; i<this.size; i++) {
    //         for (j=0; j<this.size; j++) {
    //             this.processCell(i, j);
    //         }
    //     }
    // }
}