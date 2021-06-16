function Sort(size) {
	this.arr = new ArrayStar(size);
	var comparision;
	var time;
	this.class = this.id;
}

Sort.prototype.bubbleSort = function(arr){
	var result = '';
	for (var i = 0; i < arr.length; i++)
		arr[i] = Number(arr[i]);
	for (var i = 0; i < arr.length; i++) {
		result += arrToStr(arr) + '<br>';
		for (var j = 0; j < arr.length; j++) {
			if(arr[j]>arr[j+1])
				arr[j] = arr[j] + arr[j+1] - (arr[j+1] = arr[j]);
		}
	}
	return result;
}

// Sort.prototype.slctnSort = function(arr){
// 	var result = '';
//   var minIdx, temp, 
//       len = arr.length;
//   for(var i = 0; i < len; i++){
//   	result += arrToStr(arr) + "<br>";
//     minIdx = i;
//     for(var  j = i+1; j<len; j++){
//        if(arr[j]<arr[minIdx]){
//           minIdx = j;
//        }
//     }
//     temp = arr[i];
//     arr[i] = arr[minIdx];
//     arr[minIdx] = temp;
//   }
//   result += arrToStr(arr) + "<br>";
//   return result;
// }

// Sort.prototype.insrtnSort = function(arr) {
// 	var result = '';
// 	var i, len = arr.length, el, j;
// 	for (i = 1; i < len; i++) {
// 		result += arrToStr(arr) + "<br>";
// 		el = arr[i];
// 		j = i;
// 		while (j > 0 && arr[j - 1] > toInsert) {
// 			arr[j] = arr[j - 1];
// 			j--;
// 		}
// 		arr[j] = el;
// 	}
// 	return result;
// }

Sort.prototype.quick = function(arr){
	this.quickSort(arr,0,arr.length-1);
}

Sort.prototype.quickSort = function(arr,start,end) {
	if(start == end)
		return;
	printArr(arr);
	br();
	var pos = this.partition(arr,start,end);
	this.quickSort(arr,0,pos);
	this.quickSort(arr,pos+1,arr.length-1);
}

Sort.prototype.partition = function(arr,r,l) {
	var pivot = r++;
	while(r<=l){
		while(arr[r++]<=arr[pivot]);
		while(arr[l--]>=arr[pivot]);
		if(r<l)
			arr[r] = arr[r] + arr[l] - (arr[l] = arr[r]);
		else
			return l;
	}
	arr[pivot] = arr[pivot] + arr[l] - (arr[l] = arr[pivot]);
	return l;
}

