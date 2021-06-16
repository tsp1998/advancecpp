function printMat(mat) {
	for (var i = 0; i < mat.length; i++) {
		for (var j = 0; j < mat[0].length; j++)
			document.write(mat[i][j] + " ");
		document.write("<br>");
	}
}

function addMat(mat1, mat2) {
	if(mat1.length!=mat2.length || mat1[0].length!=mat2[0].length)
		return null;
	var result = new Array(mat1.length);
	for (var i = 0; i < mat1.length; i++) {
		result[i] = new Array(mat1[0].length);
		for (var j = 0; j < mat1[0].length; j++)
			result[i][j]=mat1[i][j]+mat2[i][j];
	}
	return result;
}

function subMat(mat1, mat2) {
	if(mat1.length!=mat2.length || mat1[0].length!=mat2[0].length)
		return null;
	var result = new Array(mat1.length);
	for (var i = 0; i < mat1.length; i++) {
		result[i] = new Array(mat1[0].length);
		for (var j = 0; j < mat1[0].length; j++)
			result[i][j]=mat1[i][j]-mat2[i][j];
	}
	return result;
}

// 1 2 4   3 3
// 2 3 5   3 4
//  	   2 2



function prodMat(mat1, mat2) {
	if(mat1.length!=mat2[0].length)
		return null;
	var result = new Array(mat1.length);
	for (var i = 0; i < mat1.length; i++) {
		result[i] = new Array(mat1.length);
		for (var j = 0; j < mat1.length; j++){
			var sum = 0;
			for (var k = 0; k < mat1[0].length; k++)
				sum += mat1[i][k] * mat2[k][j];
			result[i][j] = sum;
		}
	}
	return result;
}


function matDoOprn(mat1,mat2,oprtr){
	switch(oprtr){
		case '+': return addMat(mat1,mat2); break;
		case '-': return subMat(mat1,mat2); break;
		case '*': return prodMat(mat1,mat2); break;	
	}
}