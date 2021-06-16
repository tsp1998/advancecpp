function maxLen(str1, str2) {
	return str1.length > str2.length ? str1.length : str2.length;
}

function arrToStr(arr){
	var result = '';
	for (var i = 0; i < arr.length; i++) {
		result += ' ' + arr[i].toString();
	}
	return result;
}