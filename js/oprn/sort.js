
function getArrSize() {
	setContent('result4',"<center>Array Size "+
							"<input type='text' class='arr_in' placeholder='Size' id='arr_size'>"+
							"<br></center>");
	addContent('result4',"<center><button class='result' onclick=inArrShow()>Proceed</button></center>");
}

var arr;

function inArrShow() {
	arr = new ArrayStar(getVal('arr_size'));
	clrContent('result4');
		setContent('result4',"<div class='row' id='row'></div>");
		addContent('row',"<div class='col-sm-12' id='col'></div>");
		addContent('col',"<div class='arr' id='arr'>Array<br></div>");
		arr.inArr('arr');
	addContent('result4',"<center><button class='result' onclick=arrOprn()>Proceed</button></center>");
}


function arrOprn() {
	var s = new Sort();
	arr.getInArr();
	clrContent('result4');
	s.binary(arr.arr);
	addContent('result4',"<div id='sort_steps' class='sort_steps'></div>");
	addContent('sort_steps',s.binary(arr.arr));
	// display('result4');
}