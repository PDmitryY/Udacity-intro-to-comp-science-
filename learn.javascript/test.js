/*function sumTo(num){
    var result = num;
    for (var i=0;i<num;i++){
	    result += i
	}
	return result
}*/
//alert (sumTo(100))

/*function sumTo(num){
    var result = num
    if (num>1){
	    result = result + sumTo(num-1)
	}
	else{
	    result = num
	}
	return result
}*/
/*function fact(num){
    if (num == 1){
	    return num
	}
	return num*fact(num-1)
}

alert (fact(5))*/

/*function fib(n){
    var a = 1, b = 0;
	for (var i=1;i<n;i++){
	    res = a+b;
		b = a
		a = res;
	}
	return res
}*/
function fib(n){
    res = 0
    if (n==1 || n==2){
	    return 1}
	res = fib(n-1)+fib(n-2);
	return res
}
alert(fib(7))