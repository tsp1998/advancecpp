
var mat_arr;

function matNum() {
	var mat_num = Number(getVal('mat_num'));
	clrContent('result4');
	for (var i = 1; i <= mat_num; i++) {
		addContent('result4',"<center>Matrix "+(i)+
							"<input type='text' class='mat_in' placeholder='Rows' id='row"+i+"'>"+
							"<input type='text' class='mat_in' placeholder='Cols' id='col"+i+"'>"+
							"<br></center>");
	}
	addContent('result4',"<center><button class='result' onclick=matShow("+mat_num+")>Proceed</button></center>");
}

function matShow(mat_num) {
	mat_arr = new Array(mat_num);
	
	var blocks = 0;

	for (var i = 0; i < mat_num; i++) {
		mat_arr[i] = new Matrix(getVal('row'+(i+1)),getVal('col'+(i+1)));
		blocks += getVal('col'+(i+1));
	}
	blocks /= 11;
	blocks += 1;
	clrContent('result4');
	
	var sum = 1;
	var l=1;
	while (l<=blocks) {
		if(sum>11){
			sum=1;
			l++; 
		}
		setContent('result4',"<div class='row' id='row_"+Number(l)+"'></div>");
			for (var i = 0; i < mat_num; i++) {
				sum+=Number(mat_arr[i].getCol())+Number(1);
				// addContent('row_'+Number(l),"<div class='col-sm-1'></div>");
				addContent('row_'+Number(l),"<div class='col-sm-"+(Number(mat_arr[i].getCol())+Number(1))+"' id='col_"+(i+1)+"'></div>");
				addContent('col_'+(i+1),"<div class='mat' id='mat"+i+"'>Matrix "+(i+1)+"<br></div>");
				mat_arr[i].inMat('mat'+i);
			}
	}
	addContent('result4',"<center><button class='result' onclick=selection()>Proceed</button></center>");
	
}

function selection() {
	for (var i = 0; i < mat_arr.length; i++)
		mat_arr[i].getInMat();
	clrContent('result4');

	for (var i = 0; i < mat_arr.length-1 ; i++) {
		addContent('result4',"<center><div id='selection' class='mat"+(i+1)+"'</div></center>");
		addContent('selection',"<center><select class='selection' id='select_mat"+(i+1)+"'></select></center>");
		for (var j = 0; j < mat_arr.length ; j++){
			addContent('select_mat'+(i+1),"<option value='mat"+(j)+"'>Matrix "+(j+1)+"</option>")
		}
		addContent('selection',"<center><select class='selection' id='select_oprtr"+(i+1)+"'></select></center>");
		addContent('select_oprtr'+(i+1),"<center><option value='+'>+</option>"+
										"<option value='-'>-</option>"+
										"<option value='*'>*</option></center>"
										);
	}
	addContent('selection',"<center><select class='selection' id='select_mat"+(i+1)+"'></select></center>");
	for (var j = 0; j < mat_arr.length ; j++){
		addContent('select_mat'+(i+1),"<option value='mat"+(j)+"'>Matrix "+(j+1)+"</option>")
	}
	addContent('result4',"<center><button class='result' onclick=matOprn()>Proceed</button></center>");
}

function matOprn(){
	var mat_id_arr = new Array(mat_arr.length);
	var mat_arr2 = new Array(mat_arr.length);
	var oprtr_arr = new Array(mat_arr.length-1);
	for (var i = 0; i < mat_arr.length-1 ; i++) {
		mat_id_arr[i] = getVal('select_mat'+(i+1));
		oprtr_arr[i] = getVal('select_oprtr'+(i+1));
	}
	mat_id_arr[i] = getVal('select_mat'+(i+1));
	for (var i = 0; i < mat_arr2.length; i++) {
		mat_arr2[i] = new Matrix();
		mat_arr2[i].id = mat_id_arr[i];
		mat_arr2[i].copyMatById(mat_arr);
	}

	// var result = mat_arr2[0].mat;
	// for (var i = 0; i < oprtr_arr.length; i++) {
	// 	result = matDoOprn(result,mat_arr2[i+1].mat,oprtr_arr[i]);
	// }
	// var m = new Matrix(result.length,result[0].length);
	// m.mat = result;
	// clrContent('result4');
	// m.outMat('result4');
}