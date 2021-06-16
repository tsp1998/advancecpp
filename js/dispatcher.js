
function dispatcher(oprn) {
	var result;
	switch(oprn){
		case 'expand1':
			setContent('expand1','&#176;');
			display('expand1_btns');
		break;
		case 'expand2':
			setContent('expand2','&#276;');
			display('expand2_btns');
		break;
		case 'expand3':
			setContent('expand3','$');
			display('expand3_btns');
		break;
		case 'expand4':
			setContent('expand4','$');
			display('expand4_btns');
		break;
	}

	if (expn_valid()){
		if(oprn=="eval"){
			result = arith();
			if(result){
				showResult(result);
			}
		}else{
			switch(oprn){
				case "decimal":
					var expn = getVal('expn');
					var result;
					if(expn.indexOf('b')<0 && expn.indexOf('o')<0 && expn.indexOf('h')<0)
						result = expn;
					else{
						if(expn.indexOf('h')>0)
							 result = hexToDec(expn);
						else if(expn.indexOf('o')>0)
							 result = octToDec(expn);
						else if(expn.indexOf('b')>0)
							 result = binToDec(expn);
					}
					
				break;

				case "binary":
					var expn = getVal('expn');
					var result;
					// alert(expn.indexOf('h'));
					if(expn.indexOf('b')>0)
						result = expn;
					else{
						if(expn.indexOf('h')>0)
							 result = hexToBin(expn).concat('b');
						else if(expn.indexOf('o')>0)
							 result = octToBin(expn).concat('b');
						else
							result = decToBin(expn).concat('b');
					}
					
				break;

				case "octal":
					var expn = getVal('expn');
					var result;
					// alert(expn.indexOf('h'));
					if(expn.indexOf(o)>0)
						result = expn;
					else{
						if(expn.indexOf('h')>0)
							 result = hexToOct(expn).concat('o');
						else if(expn.indexOf('b')>0)
							 result = binToOct(expn).concat('o');
						else
							result = decToOct(expn).concat('o');
					}
					
				break;

				case "hex":
					var expn = getVal('expn');
					var result;
					// alert(expn.indexOf('h'));
					if(expn.indexOf('h')>0)
						result = expn;
					else{
						if(expn.indexOf('b')>0)
							 result = binToHex(expn).concat('h');
						else if(expn.indexOf('o')>0)
							 result = octToHex(expn).concat('h');
						else
							result = decToHex(expn).concat('h');
					}
					
				break;

				case 'sqrt': 
					var expn = getVal('expn');
					var result = sqrt(expn);
				break;

				case 'sqr': 
					var expn = getVal('expn');
					var result = sqr(expn);
				break;

				case 'cube': 
					var expn = getVal('expn');
					var result = cube(expn);
				break;

				case 'nth': 
					var expn = getVal('expn');
					var arr = expn.split(',');
					var result = nth(arr[0],arr[1]);
				break;

				case 'root3': 
					var expn = getVal('expn');
					var result = cbrt(expn);
				break;

				case 'root4': 
					var expn = getVal('expn');
					var result = nth(expn,1/4);
				break;

				case 'rootn': 
					var expn = getVal('expn');
					var arr = expn.split(',');
					var result = nth(arr[0],1/arr[1]);
				break;

				case 'sum': 
					var expn = getVal('expn');
					var arr = expn.split(',');
					var result = sum(arr[0],arr[1],arr[2]);
				break;

				case 'and': 
					var expn = getVal('expn');
					var arr = expn.split(',');
					var result = and(arr[0],arr[1]);
				break;

				case 'or': 
					var expn = getVal('expn');
					var arr = expn.split(',');
					var result = or(arr[0],arr[1]);
				break;

				case 'xor': 
					var expn = getVal('expn');
					var arr = expn.split(',');
					var result = xor(arr[0],arr[1]);
				break;

				case 'not': 
					var expn = getVal('expn');
					var result = not(expn);
				break;

				case 'dervtv': 
					var expn = getVal('expn');
					var arr = expn.split(',');
					if(arr.length == 2)
						var result = dervtv(arr[0],arr[1]);
					else
						var result = dervtvEval(arr[0],arr[1],arr[2]);
				break;
			}//switch close
			showResult2(result);
		}
	}
}

function expn_valid() {
	if(document.getElementById('expn').value==''){
		document.getElementById('expn').placeholder="Enter Expression Please...";
		return false;
	}
	return true;
}

function showResult(result) {
	hide('expn2_block');
	hide('reset_logo2');
	hide('result2');

	hide('expn3_block');
	hide('reset_logo3');
	hide('result3');

	hide('result4');

	setContent('expand1',"<img width='10px' src='images/icons/down.png'>");
	hide('expand1_btns');
	hide('expand2_btns');

	display('expand3_btns');
	display('expand4_btns');

	display('expn1_block');
	setContent('result1',result);
	display('reset_logo1');
	display('result1');
}

function showResult2(result) {
	hide('expn1_block');
	hide('reset_logo1');
	hide('result1');

	hide('expn3_block');
	hide('reset_logo3');
	hide('result3');

	hide('result4');

	setContent('expand3',"<img width='10px' src='images/icons/down.png'>");
	hide('expand3_btns');
	hide('expand4_btns');

	display('expand1_btns');
	display('expand2_btns');

	display('expn2_block');
	setContent('result2',result);
	display('reset_logo2');
	display('result2');
}


function operations() {
	var result;
	if(expn_valid()){
		var expn = getVal('expn');
		switch(document.getElementById('select').value){
			case 'factors':
				
					result = factors(expn);
			break;

			case 'prime':
				
				if(prime(expn))
					result = 'Number is Prime';
				else
					result = 'Number is not Prime';
			break;

			case 'fib':
				
				result = fibo(expn);
			break;

			case 'ascii':
				
					result = ascii(expn);
			break;

			case 'armstrong':
				
				if(armstrong(expn))
					result = 'Number is Armstrong';
				else
					result = 'Number is not Armstrong';
			break;
			
			case 'avg':
				
				var arr = expn.split(',');
				result = avg(arr);
			break;
			
			case 'digit_sum':
				
				var arr = expn.split('');
				result = digitSum(arr);
			break;
			
			case 'digit_prod':
				
				var arr = expn.split('');
				result = digitProd(arr);
			break;
			
			case 'fib_ser':
				
				var arr = expn.split(',');
				result = fibSer(arr[0],arr[1]);
			break;
			
			case 'prime_ser':
				
				var arr = expn.split(',');
				result = primeSer(arr[0],arr[1]);
			break;
			
			case 'arm_ser':
				
				var arr = expn.split(',');
				result = armSer(arr[0],arr[1]);
			break;
			
			case 'divisible':
				var arr = expn.split(',');
				if(divisible(arr[0],arr[1]))
					result = "Number is divisible";
				else
					result = "Number is not divisible";
			break;
			
			case 'cmplnt':
				var expn = getVal('expn');
				result = cmplnt(expn);
			break;
			
			case 'cmplnt2':
				var expn = getVal('expn');
				//;setContent('result3',cmplnt2(expn));
			break;
		}
		showResult3(result);
	}
}

function showResult3(result) {
	hide('expn1_block');
	hide('reset_logo1');
	hide('result1');

	hide('expn2_block');
	hide('reset_logo2');
	hide('result2');

	hide('result4');

	display('expand1_btns');
	display('expand2_btns');
	display('expand3_btns');
	display('expand4_btns');

	setContent('result3',result);
	display('expn3_block')
	display('result3');
	display('reset_logo3');
}


function operations2() {
		switch(document.getElementById('select2').value){
			case 'matrix':
				// alert('hi');
				setContent('result4',"<center><select class='select' id='mat_num'>\
										<option value='-1'>Number of Matrix</option>\
										<option value='1'>1</option>\
										<option value='2'>2</option>\
										<option value='3'>3</option>\
										<option value='4'>4</option>\
									  </select>\
									  <br>\
									  <button class='btn_result' onclick='matNum()'>Proceed</button>\
									  </center>");
				hide('btn_perform');
				display('result4');
			break;

			case 'bubble_sort':
				sortMenu('bubble_sort');
				hide('btn_perform');
				display('result4');
			break;

			case 'slctn_sort':
				sortMenu('slctn_sort');
				hide('btn_perform');
				display('result4');
			break;

			case 'insrtn_sort':
				sortMenu('insrtn_sort');
				hide('btn_perform');
				display('result4');
			break;

			case 'quick_sort':
				getArrSize();
				hide('btn_perform');
				display('result4');
			break;

			case 'prob_chart':
				getArrSize();
				hide('btn_perform');
				display('result4');
			break;

			case 'intrst':
				intrst();
				hide('btn_perform');
				display('result4');
			break;

			case 'ap_ser':
				apSer();
				hide('btn_perform');
				display('result4');
			break;
		}
}