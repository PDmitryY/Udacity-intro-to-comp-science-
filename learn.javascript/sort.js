//сортировка пузырьком
function sort(arr){
    let i,j,k,n=arr.length;
	for (j = 0; j < n; j++){
	    for (i = 0; i < n-1; i++){
	    if (arr[i]>arr[i+1]){
		    k = arr[i];
			arr[i]=arr[i+1];
			arr[i+1]=k;
		}
	}
	}
	return arr
}
let arr = [5,8,6,9,1,2,0];
alert (sort(arr))