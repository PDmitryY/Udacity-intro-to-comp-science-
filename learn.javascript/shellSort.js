function shellSort(arr){
	let d = arr.length/2;
	while (d > 0){
		for (let i = 0; i < (arr.length - d); i++) {
			let k = i;
			while (k >=0 && arr[k] > arr [k + d]){
				let t = arr[k];
				arr[k] = arr[k + d];
				arr[k + d] = t;
				k--;
			}
		}
		d = d/2;
	}
}
