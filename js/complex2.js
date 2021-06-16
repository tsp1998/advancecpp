function Matrix(){
	this.mat_num = 0;
	this.row_arr = new Array();
	this.col_arr = new Array();
	this.mat_arr = new Array();
}

Matrix.prototype.setMatNum = function(mat_num) {
	this.mat_num = mat_num;
};

Matrix.prototype.setRowArr = function(row_arr) {
	this.row_arr = row_arr;
};

Matrix.prototype.setColArr = function(col_arr) {
	this.col_arr = col_arr;
};

Matrix.prototype.setMatArr = function(mat_arr) {
	this.mat_arr = mat_arr;
};

Matrix.prototype.getMatNum = function() {
	return this.mat_num;
};

Matrix.prototype.getRowArr = function(index) {
	if(index == null)
		return this.row_arr;
	else
		return this.row_arr[index];
};

Matrix.prototype.getColArr = function(index) {
	if(index == null)
		return this.col_arr;
	else
		return this.col_arr[index];
};

Matrix.prototype.getMatArr = function(index) {
	if(index == null)
		return this.mat_arr;
	else
		return this.mat_arr[index];
};


function matNum() {
	var mat_num = Number(getVal('mat_num'));
	clrContent('result5');
	for (var i = 1; i <= mat_num; i++) {
		addContent('result5',"<center>Matrix "+(i)+
							"<input type='text' class='mat_in' placeholder='Rows' id='row"+i+"'>"+
							"<input type='text' class='mat_in' placeholder='Cols' id='col"+i+"'>"+
							"<br></center>");
	}
	addContent('result5',"<center><button class='result' onclick='matShow("+mat_num+")'>Proceed</button></center>");
}

var m = new Matrix();

function matShow(mat_num) {
	// alert(mat_num);
	// mat_num = Number(mat_num);
	var row_arr = new Array();
	var col_arr = new Array();
	
	var blocks = 0;

	for (var i = 1; i <= mat_num; i++) {
		row_arr.push(getVal('row'+i));
		blocks += getVal('col'+i);
		col_arr.push(getVal('col'+i));
	}
	blocks /= 11;
	blocks += 1;
	clrContent('result5');
	
	m.setMatNum(mat_num);
	m.setRowArr(row_arr);
	m.setColArr(col_arr);

	var sum = 1;
	var l=1;
	while (l<=blocks) {
		if(sum>11){
			sum=1;
			l++;
		}
		setContent('result5',"<div class='row' id='row_"+Number(l)+"'></div>");
			for (var i = 1; i <= mat_num; i++) {
				sum+=Number(col_arr[i-1])+Number(1);
				// addContent('row_'+Number(l),"<div class='col-sm-1'></div>");
				addContent('row_'+Number(l),"<div class='col-sm-"+(Number(col_arr[i-1])+Number(1))+"' id='col_"+i+"'></div>");
				addContent('col_'+i,"<div class='mat' id='mat"+i+"'>Matrix "+i+"<br></div>");
				for (var k = 0; k < row_arr[i-1]; k++){
					for (var j = 0; j < col_arr[i-1]; j++)
						addContent('mat'+i,"<input class='mat_in2' type='text' id=mat"+(i.toString()+k.toString()+j.toString())+">");
					addContent('mat'+i,"<br>");	
				}
			}
	}
	addContent('result5',"<center><button class='result' onclick=matOprn()>Proceed</button></center>");
}

function matOprn() {
	// alert(mat_num);
	// var row_arr = new Array();
	// var col_arr = new Array();
	
	// for (var i = 1; i <= mat_num; i++) {
	// 	row_arr.push(getVal('row'+i));
	// 	col_arr.push(getVal('col'+i));
	// }

	// alert(m.getRowArr()");

	var mat_arr = new Array();

	for (var i = 1; i <= m.getMatNum(); i++) {
		var mat = new Array(m.getRowArr(i-1));
		for (var j = 0; j < m.getRowArr(i-1); j++){
			mat[j] = new Array(m.getColArr(i-1));
			for (var k = 0; k < m.getColArr(i-1); k++) 
				mat[j][k] = getVal('mat' + i.toString() + j.toString() + k.toString());
		}
		mat_arr.push(mat);
	}

	m.setMatArr(mat_arr);

	// for (var i = 0; i < mat_arr.length; i++) {
	// 	printMat(mat_arr[i]);
	// }
	clrContent('result5');
	setContent('result5',"<div class='row' id='row'></div>");
	setContent('row',"<div class='col-sm-1'></div>");
	for (var i = 0; i < m.getMatArr().length; i++) {
		addContent('row',"<div class='col-sm-1' id='col"+i+"'></div>");
		setContent('')
	}
}
