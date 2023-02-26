let item1 = document.querySelector('.price__sneakers');
console.log (item1)
let item1Value = +item1.innerHTML;
console.log(item1Value); 

let item2 = document.querySelector('.ballet__price');
console.log (item2)
let item2Value = +item2.innerHTML;
console.log(item2Value);

let item3 = document.querySelector('.heels__price');
console.log (item3)
let item3Value = +item3.innerHTML;
console.log(item3Value);

let item4 = document.querySelector('.boots__price');
console.log (item3)
let item4Value = +item3.innerHTML;
console.log(item4Value);

let arr = [item1Value, item2Value, item3Value, item4Value];
let result = arr.reduce(function(sum, elem) {
	return sum + elem;
}, 0);
console.log(result);

let resultElem = document.getElementById("result");
resultElem.innerHTML = result;



