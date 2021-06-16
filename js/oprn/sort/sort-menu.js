var sort_type = '';
function sortMenu(sort_type_temp) {
	sort_type = sort_type_temp;
	getArrSize();
}

function getArrSize() {
	var props = new Array("placeholder");
	var values = new Array("Enter Array Size...");
	var ip = new Input('arr_size',props,values);
	setContent('result4',"<div id='get_arr_size'></div>");
	ip.in('get_arr_size');
	var css = 'text-align : center; width :10px;';
	ip.setCSS(css);
	// ip.setPlaceHolder("Enter Array Size...");
	addContent('result4',"<center><button class='result' onclick=inArrShow()>Proceed</button></center>");
}

var arr;

function inArrShow() {
	arr = new ArrayStar(getVal('in_arr_size'));
	clrContent('result4');
		setContent('result4',"<div class='arr' id='arr'></div>");
		// var css = 'text-align : center; width :10px;';
		// setCss('arr',css);
		arr.inArr('arr');
	addContent('result4',"<center><button class='result' onclick=arrOprn()>Proceed</button></center>");
}


function arrOprn() {
	var s = new Sort();
	arr.getInArr();
	clrContent('result4');
	addContent('result4',"<div id='sort_steps' class='sort_steps'></div>");
	switch(sort_type){
		case 'bubble_sort':
		addContent('sort_steps',s.bubbleSort(arr.arr));
		break;
		case 'slctn_sort':
		addContent('sort_steps',s.slctnSort(arr.arr));
		break;	
		case 'insrtn_sort':
		addContent('sort_steps',s.insrtnSort(arr.arr));
		break;	
	}
	
	addContent('result4',"<center><button class='result' onclick=clrBubble()>Close</button></center>");
	// display('result4');	
}

function clrBubble() {
	clrContent('result4');
	addContent('result4',"<center><button class='btn_result' id='btn_perform' onclick='operations2()'>Perform</button></center>");	
}