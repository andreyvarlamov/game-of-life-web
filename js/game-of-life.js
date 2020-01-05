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
                this.rows[i][j] = Math.round(Math.random());
            }
        }
    }

    this.redraw = function() {
        for (i = 0; i < this.rows.length; i++) {
            for (j = 0; j < this.rows[0].length; j++) {
                if (this.rows[i][j] == 1) {
                    fill('blue');
                }
                else {
                    fill('white');
                }

                rect(i*cell_size, j*cell_size, (i+1)*cell_size, (j+1)*cell_size);
            }
        }
    }
}