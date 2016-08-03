// проверка на спам
/*function checkSpam(str){
    var up = str.toUpperCase()
    if (~up.indexOf('VIAGRA')||~up.indexOf('XXX')){
	    return true
	}
	return false
}
alert(checkSpam('buy ViAgRA now'))
alert(checkSpam('free xxxxx'))
alert(checkSpam("innocent rabbit"))*/

//усечение строки
/*function truncate(str,maxlength){
    if (str.length > maxlength){
	    return str.slice(0,(maxlength-3)) + '...'
	}
	return str
}
alert (truncate("Вот, что мне хотелось сказать:", 20))*/

// выделить число
function extractCurrencyValue(str){
    return +str.slice(1)
}
alert(extractCurrencyValue('$120'))