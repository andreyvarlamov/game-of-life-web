function Table(size, cell_size) {
    this.size = size
    this.rows = new Array(this.size);
    this.cell_size = cell_size
    

    this.generateCells = function() {
        for (i = 0; i < this.rows.length; i++) {
            this.rows[i] = new Array(this.size);
        }

        for (i = 0; i < this.rows.length; i++) {
            for (j = 0; j < this.rows[0].length; j++) {
                randStatus = Math.round(Math.random())
                this.rows[i][j] = [randStatus, randStatus];
            }
        }
    }

    this.redraw = function() {
        for (i = 0; i < this.rows.length; i++) {
            for (j = 0; j < this.rows[0].length; j++) {
                if (this.rows[i][j][0] == 1) fill('blue');
                else fill('white');
                stroke(0);
                strokeWeight(1);
                rect(i*cell_size, j*cell_size, cell_size-1, cell_size-1);
            }
        }
    }

    this.countNeighbors = function(x, y) {
        var neighborCount = 0;
        var neighborOffsets = [[1,0], [1,1], [0,1], [-1,1], [-1,0], [-1,-1], [0,-1], [1,-1]];

        var that = this;

        var count = function(offset, index) {
            try {
                var i = x+offset[0]
                var j = y+offset[1]
                var b = that.rows[i][j][0] == 1
                if (b) {
                    neighborCount++;
                }
            }
            catch {}
        }

        neighborOffsets.forEach(count);

        return neighborCount;

    }

    this.checkCell = function(x, y) {
        var neighborCount = this.countNeighbors(x, y);

        if (this.rows[x][y][0] == 1) {
            if (neighborCount < 2 || neighborCount > 3) {
                this.rows[x][y][1] = 0;
            }
            else {
                this.rows[x][y][1] = 1;
            }
        }
        else {
            if (neighborCount == 3) {
                this.rows[x][y][1] = 1;
            }
            else {
                this.rows[x][y][1] = 0;
            }
        }
    }

    this.processCell = function(x, y) {
        this.rows[x][y][0] = this.rows[x][y][1];
    }

    this.process = function() {
        for(i=0; i<this.size; i++) {
            for (j=0; j<this.size; j++) {
                this.checkCell(i, j);
            }
        }
        for(i=0; i<this.size; i++) {
            for (j=0; j<this.size; j++) {
                this.processCell(i, j);
            }
        }
    }
}