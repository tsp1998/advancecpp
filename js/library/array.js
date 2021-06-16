function printArr(arr) {
	for (var i = 0; i < arr.length; i++) {
		document.write(arr[i] + ' ');
	}
}

function isArrFull(arr){
	for (var i = 0; i < arr.length; i++)
		if(arr[i] == '')
			return false;
	return true;
}

function isArrRem(arr){
	var count = 0;
	for (var i = 0; i < arr.length; i++)
		if(arr[i] == '')
			count++;
	return count;
}

function makeAllNums(arr) {
	for (var i = 0; i < arr.length; i++)
		if(arr[i] != '')
			arr[i] = Number(arr[i]);
	return arr;
}