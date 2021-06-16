function decToBin(num) {
	num=Number(num);
	var bin=new String("");
	while(num!=0){
		if(num%2==0)
			bin=bin.concat('0');
		else
			bin=bin.concat('1');
	num=Math.floor(num/2);
	}
	var temp=new String("");
	for (var i = 0; i < bin.length; i++)
		temp=temp.concat(bin[bin.length-i-1]);
	return temp;
}

function decToOct(num) {
	num=Number(num);
	var oct=new String("");
	while(num!=0){
		oct = oct.concat((num%8).toString());
	num=Math.floor(num/8);
	}
	var temp=new String("");
	for (var i = 0; i < oct.length; i++)
		temp=temp.concat(oct[oct.length-i-1]);
	return temp;
}


function hexToBin(num) {
	num = hexToDec(num);
	return decToBin(num);
}

function octToBin(num) {
	num = octToDec(num);
	return decToBin(num);
}

function hexVal(hex) {
	switch(hex){
		case 'a':return 10;
		case 'b':return 11;
		case 'c':return 12;
		case 'd':return 13;
		case 'e':return 14;
		case 'f':return 15;	
	}
}

function hexToDec(num) {
	num = rev(num);
	var result = 0;
	for (var i = 1; i < num.length; i++)
		if(isDigit(num[i]))
			result += num[i]*Math.pow(16,i-1);
		else
			result += hexVal(num[i])*Math.pow(16,i-1);
	return result;
}

function binToDec(num) {
	num = rev(num);
	var result = 0;
	for (var i = 1; i < num.length; i++)
		if(isDigit(num[i]))
			result += num[i]*Math.pow(2,i-1);
		else
			result += hexVal(num[i])*Math.pow(16,i-1);
	return result;
}

function octToDec(num) {
	num = rev(num);
	var result = 0;
	for (var i = 1; i < num.length; i++)
			result += num[i]*Math.pow(8,i-1);
	return result;
}

function ascii(str){
	var result='ASCII of : <br>';
	for (var i = 0; i <str.length; i++)
		result=result.concat(str[i]+' : '+str.charCodeAt(i)+'<br>');
	return '<div>' +result+ '</div>';		
}

function numType(num){
	if(num.indexOf('b')>=0)
		return 'bin';
	else if(num.indexOf('h')>=0)
		return 'hex';
	else if(num.indexOf('o')>=0)
		return 'oct';
	else
		return 'dec';
}

function convertType(num,from,to) {
	if(from == to)
		return num;
	switch(from){
		case 'bin':
		switch(to){
			case 'dec':return binToDec(num);break;
			// case 'oct':return binToOct(num);break;
			// case 'hex':return binToHex(num);break;
		}
		break;
		case 'oct':
		switch(to){
			case 'dec':return octToDec(num);break;
			case 'bin':return octToBin(num);break;
			// case 'hex':return octToHex(num);break;
		}
		break;
		case 'dec':
		switch(to){
			case 'bin':return decToBin(num);break;
			// case 'oct':return decToOct(num);break;
			// case 'hex':return decToHex(num);break;
		}
		break;
		case 'hex':
		switch(to){
			case 'dec':return hexToDec(num);break;
			case 'bin':return hexToBin(num);break;
			// case 'oct':return hexToOct(num);break;
		}
		break;
	}
}

function and(num1,num2) {
	var type = numType(num1);
	num1 = convertType(num1,type,'bin');
	var type = numType(num2);
	num2 = convertType(num2,type,'bin');
	
	if(num1.indexOf('b')>=0)
		num1 = num1.slice(0,-1);
	if(num2.indexOf('b')>=0)
		num2 = num2.slice(0,-1);
	
	num1 = rev(num1).toString();
	num2 = rev(num2).toString();

	var l = maxLen(num1,num2);
	if(l == num1.length)
		for (var i = num2.length; i < num1.length; i++)
			num2 += '0';
	else
		for (var i = num1.length; i < num2.length; i++)
			num1 += '0';

	var result = '';
	for (var i = 0; i < l; i++)
		if(num1[i] == '0' || num2[i] == '0')
			result += '0';
		else
			result += '1';
	result = rev(result).concat('b');
	result = convertType(result,'bin',type);

	return result;
}

function or(num1,num2) {
	var type = numType(num1);
	num1 = convertType(num1,type,'bin');
	var type = numType(num2);
	num2 = convertType(num2,type,'bin');
	
	if(num1.indexOf('b')>=0)
		num1 = num1.slice(0,-1);
	if(num2.indexOf('b')>=0)
		num2 = num2.slice(0,-1);
	
	num1 = rev(num1).toString();
	num2 = rev(num2).toString();

	var l = maxLen(num1,num2);
	if(l == num1.length)
		for (var i = num2.length; i < num1.length; i++)
			num2 += '0';
	else
		for (var i = num1.length; i < num2.length; i++)
			num1 += '0';

	var result = '';
	for (var i = 0; i < l; i++)
		if(num1[i] == '1' || num2[i] == '1')
			result += '1';
		else
			result += '0';
	result = rev(result).concat('b');
	result = convertType(result,'bin',type);

	return result;
}

function xor(num1,num2) {
	var type = numType(num1);
	num1 = convertType(num1,type,'bin');
	var type = numType(num2);
	num2 = convertType(num2,type,'bin');
	
	if(num1.indexOf('b')>=0)
		num1 = num1.slice(0,-1);
	if(num2.indexOf('b')>=0)
		num2 = num2.slice(0,-1);
	
	num1 = rev(num1).toString();
	num2 = rev(num2).toString();

	var l = maxLen(num1,num2);
	if(l == num1.length)
		for (var i = num2.length; i < num1.length; i++)
			num2 += '0';
	else
		for (var i = num1.length; i < num2.length; i++)
			num1 += '0';

	var result = '';
	for (var i = 0; i < l; i++)
		if(num1[i] == num2[i])
			result += '0';
		else
			result += '1';
	result = rev(result).concat('b');
	result = convertType(result,'bin',type);

	return result;
}

function not(num) {
	var type = numType(num);
	num = convertType(num,type,'bin');
	
	if(num.indexOf('b')>=0)
		num = num.slice(0,-1);
	
	num = (num).toString();

	var result = '';
	for (var i = 0; i < num.length; i++)
		if(num[i] == '0')
			result += '1';
		else
			result += '0';
	result = (result).concat('b');
	result = convertType(result,'bin',type);
	return result;
}