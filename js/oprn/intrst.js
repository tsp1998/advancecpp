function intrst() {
	getIntrst();
}

function getIntrst() {
	var props = new Array("placeholder");
	var values = new Array("Principal");
	var css = 'text-align : center; width :5px;';
	var principal = new Input('principal',props,values);
	principal.setCSS(css);
	setContent('result4',"<div id='get_principal'></div>");
	principal.in('get_principal');

	var props = new Array("placeholder");
	var values = new Array("Rate");
	var css = 'text-align : center; width :5px;';
	var rate = new Input('rate',props,values);
	rate.setCSS(css);
	addContent('result4',"<div id='get_rate'></div>");
	rate.in('get_rate');

	var props = new Array("placeholder");
	var values = new Array("Time");
	var css = 'text-align : center; width :5px;';
	var time = new Input('time',props,values);
	time.setCSS(css);
	addContent('result4',"<div id='get_time'></div>");
	time.in('get_time');
	var props = new Array("placeholder");
	var values = new Array("Interest");
	var css = 'text-align : center; width :5px;';
	var intrst = new Input('intrst',props,values);
	intrst.setCSS(css);
	addContent('result4',"<div id='get_intrst'></div>");
	intrst.in('get_intrst');

	addContent('result4',"<center><div id='intrst_warn' style='color:red; text-align:center; font-weight:bold;'>You Can't Enter All Values</div></center>");
	hide('intrst_warn');
	addContent('result4',"<center><button class='result' onclick=intrstOprn()>Proceed</button></center>");
	addContent('result4',"<center><button class='result' onclick=clrIntrst()>Clear</button></center>");
	addContent('result4',"<center><button class='result' onclick=clsIntrst()>Close</button></center>");
}

function intrstOprn() {
	var id_arr = new Array('in_principal','in_rate','in_time','in_intrst');
	var values_arr = new Array(4);
	for (var i = 0; i < id_arr.length; i++) {
			values_arr[i] = getVal(id_arr[i]);
	}

	makeAllNums(values_arr);

	hide('intrst_warn');

	switch(''){
		case values_arr[0]: 
			// alert('p');
			// alert(isArrRem(values_arr));
			if(isArrRem(values_arr)==1)
				setVal(id_arr[0],(values_arr[3]*100)/(values_arr[1]*values_arr[2]));
		break;
		case values_arr[1]: 
			if(isArrRem(values_arr)==1)
				setVal(id_arr[1],(values_arr[3]*100)/(values_arr[0]*values_arr[2]));
		break;
		case values_arr[2]: 
			if(isArrRem(values_arr)==1)
				setVal(id_arr[2],(values_arr[3]*100)/(values_arr[1]*values_arr[0]));
		break;
		case values_arr[3]: 
			if(isArrRem(values_arr)==1)
				setVal(id_arr[3],(values_arr[0]*values_arr[1]*values_arr[2])/100);
		break;
	}
	if(isArrFull(values_arr))
		display('intrst_warn');

	
	// clrContent('result4');
	// addContent('result4',"<div id='sort_steps' class='sort_steps'></div>");
	// switch(sort_type){
	// 	case 'bubble_sort':
	// 	addContent('sort_steps',s.bubbleSort(arr.arr));
	// 	break;
	// 	case 'slctn_sort':
	// 	addContent('sort_steps',s.slctnSort(arr.arr));
	// 	break;	
	// 	case 'insrtn_sort':
	// 	addContent('sort_steps',s.insrtnSort(arr.arr));
	// 	break;	
	// }
	
	// addContent('result4',"<center><button class='result' onclick=clrIntrst()>Close</button></center>");
	// display('result4');	
}

function clrIntrst() {
	var id_arr = new Array('in_principal','in_rate','in_time','in_intrst');
	for (var i = 0; i < id_arr.length; i++) {
		clrVal(id_arr[i]);
	}
}

function clsIntrst() {
	clrContent('result4');
	addContent('result4',"<center><button class='btn_result' id='btn_perform' onclick='operations2()'>Perform</button></center>");	
}