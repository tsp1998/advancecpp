function digitSum(arr){
	var result=0;
	for(var i=0; i<arr.length; i++)
		result+=Number(arr[i]);
		
		return result;
}

function digitProd(arr){
	var result=1;
	for(var i=0; i<arr.length; i++)
		result*=Number(arr[i]);
		
		return result;
}