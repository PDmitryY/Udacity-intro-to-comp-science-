//Получить последний элемент мамассива
//var lastItem = goods[goods.length-1]

//Добавить новый элемент в конец массива
/*goods.push('Компьютер')
goods[goods.length] = 'Компьютер'*/

/*Создание массива. Задача из 5 шагов-строк:
Создайте массив styles с элементами «Джаз», «Блюз».
Добавьте в конец значение «Рок-н-Ролл»
Замените предпоследнее значение с конца на «Классика». Код замены предпоследнего значения должен работать для массивов любой длины.
Удалите первое значение массива и выведите его alert.
Добавьте в начало значения «Рэп» и «Регги».*/
/*var styles = ["Джаз","Блюз"];
styles.push("Рок-н-Ролл»");
styles[styles.length - 2] = "Классика";
alert(styles.shift());
styles.unshift("Рэп","Рэгги");*/

//Получить случайное значение из массива
/*var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
function arrRand(min,max){
    var min = 0;
	var max = arr.length - 1;
    var rand = min + Math.floor(Math.random() * (max + 1 - min));// rand = Math.floor(Math.random()*arr.length)
	return arr[rand]
};*/

/*Создайте калькулятор для введённых значений.Напишите код, который:
Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
Выводит сумму всех значений массива*/

/*function calc(){
    var arr = []
    var sum = 0
	while (true){
	    var enter = prompt("Введите число",0);
	    if (enter){
		    arr.push(+enter)
		}
		else if (enter === 0){
		    arr.push(+enter)
		}
		else
		break
		
	}
	for (var i=0; i<arr.length;i++){
	    sum += arr[i]
	}
	return sum
}
alert (calc())*/

//Поиск в массиве.Создайте функцию find(arr, value), которая ищет в массиве arr значение value и возвращает его номер, если найдено, или -1, если не найдено.
/*function find(arr, value){
    for (var i=0; i<arr.length;i++){
	    if(arr[i] === value){
		    return i;
		}
		else 
		    return -1
	}
}*/

//Фильтр диапазона. Создайте функцию filterRange(arr, a, b), которая принимает массив чисел arr и возвращает новый массив,
//который содержит только числа из arr из диапазона от a до b. То есть, проверка имеет вид a ≤ arr[i] ≤ b. Функция не должна менять arr.
/*var arr = [5, 4, 3, 8, 0];
var newArr = []
function filterRange(arr, a, b){
    for (var i=0;i<arr.length;i++){
	    if (a<=arr[i] && arr[i]<=b){
		    newArr.push(arr[i])
		}
	}
	return newArr
}
alert(filterRange(arr,3,5))*/

//Подмассив наибольшей суммы
/*function getMaxSubSum(arr){
    var maxSum = 0;
	var partSum = 0;
    for(var i=0;i<arr.length;i++){
	    partSum += arr[i];
		maxSum = Math.max(maxSum,partSum);
		if (partSum<0){partSum = 0}
	}
	return maxSum
}
alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([-1, -2, -3]) ); // 0
*/

//Добавить класс в строку.В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом.Создайте функцию addClass(obj, cls), 
//которая добавляет в список класс cls, но только если его там еще нет:
/*var obj = {
  className: 'open menu'
}
function addClass(obj,cls){
    var clsName = obj.className?obj.className.split(' '):[]
	for (i=0;i<clsName.length;i++){
	    if (clsName[i] == cls){
		    clsName.push(cls)
		}
	}
	
}*/
function array_diff(a, b) {
   var middle = [];
   if(b!=[]){
   step:
   for (i=0;i<a.length;i++){
       for(j=0;j<b.length;j++){
           if(a[i]==b[j]){
               continue step;
           }
		   else{
           middle.push(a[i]);
		   }
       }
   }
   }
   else{
    middle = a
   }
   var result = [];
   next:
    for (var i = 0; i < middle.length; i++) {
      var str = middle[i]; // для каждого элемента
      for (var j = 0; j < result.length; j++) { // ищем, был ли он уже?
        if (result[j] == str) continue next; // если да, то следующий
      }
      result.push(str);
    }

  return result;
}
alert(array_diff([1,2,2],[]))
