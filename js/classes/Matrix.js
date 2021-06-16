
function matrix(row,col){
	var mat = new Array(row);
	for (var i = 0; i < col; i++)
		mat[i] = new Array(col);
	return mat;
}

function Matrix(row,col) {
	this.id='mat'+static().toString();
	this.row = row;
	this.col = col;
	this.class = this.id;
	this.mat = matrix(row,col);
}

Matrix.prototype.setMat = function(mat) {
	this.mat = mat;
	this.row = mat.length;
	this.col = mat[0].length;	
};

Matrix.prototype.copyMat = function() {
	var mat = new Matrix();
	mat.id='mat'+static().toString();
	mat.row = this.row;
	mat.col = this.col;
	mat.mat = this.mat;
	mat.class= this.class;
};

Matrix.prototype.getMat = function() {
	return this.mat;
};

Matrix.prototype.setRow = function(row) {
	this.row = row;
};

Matrix.prototype.getRow = function() {
	return this.row;
};

Matrix.prototype.setCol = function(col) {
	this.col = col;
};

Matrix.prototype.getCol = function() {
	return this.col;
};

Matrix.prototype.getMatById = function(mat_arr){
	for (var i = 0; i < mat_arr.length; i++)
		if(this.id == mat_arr[i].id)
			return mat_arr[i].mat;
}

Matrix.prototype.copyMatById = function(mat_arr){
	for (var i = 0; i < mat_arr.length; i++)
		if(this.id == mat_arr[i].id)
			this.mat = mat_arr[i].mat;
}


// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ GUI Functions $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ //
Matrix.prototype.inMat = function(id) {
	var mat_id = 'in_'+this.id;
	addContent(id,"<div id='"+mat_id+"' class='mat "+this.class+"'></div>")
	for (var i = 0; i < this.row; i++) {
		for (var j = 0; j < this.col; j++)
		addContent(mat_id,"<input id='"+mat_id+'_'+i.toString()+j.toString()+"' class='mat_in "+this.class+'_'+i.toString()+j.toString()+"'>");
	addContent(mat_id,'<br>');
	}
};

Matrix.prototype.getInMat = function() {
	var mat = new Array(this.row);
	for (var i = 0; i < this.row; i++) {
		mat[i] = new Array(this.col);
		for (var j = 0; j < this.col; j++)
			mat[i][j] = getVal('in_'+this.id+'_'+i.toString()+j.toString());
	}
	this.mat = mat;
};

Matrix.prototype.outMat = function(id) {
	var mat_id = 'out_'+this.id;
	addContent(id,"<div id='"+mat_id+"' class='mat "+this.class+"'></div>")
	for (var i = 0; i < this.row; i++) {
		for (var j = 0; j < this.col; j++)
		addContent(mat_id,"<span id='"+mat_id+'_'+i.toString()+j.toString()+" class='mat_out "+this.class+'_'+i.toString()+j.toString()+"'>"+this.mat[i][j]+"</span>");
	addContent(mat_id,'<br>');
	}
};

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ GUI Functions $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ //