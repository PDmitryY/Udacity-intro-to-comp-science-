var login = prompt("Введите логин",'')
if (login == "Админ"){
    var password = prompt('Введите пароль','')
	if (password == 'Черный Властелин'){
	    alert('Добро пожаловать')
	}
	else if (password == null){
	    alert('Вход отменен')
	}
	else{
	    alert('Пароль не верен')
	}
}
else if (login == null){
    alert('Вход отменен')
}
else{
    alert('Я вас не знаю')
}

/*next:
for (i=2;i<10;i++){
    for (j=2;j<i;j++){
	    if(i%j == 0) continue next
	}
	alert(i)
}*/
