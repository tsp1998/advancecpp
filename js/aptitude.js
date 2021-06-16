function avg(arr){
	var result = 0;
	for(var i=0; i<arr.length; i++)
		result+=Number(arr[i]);
	
	return (result/arr.length).toFixed(4);
}