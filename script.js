function applyDiscount(price) {
	return price * 0.8; 
  }
  let item1 = document.querySelector('.price__sneakers');
  let item1Value = +item1.innerHTML;
  let discountedItem1Value = applyDiscount(item1Value);
  console.log(discountedItem1Value);
  
  let item2 = document.querySelector('.ballet__price');
  let item2Value = +item2.innerHTML;
  let discountedItem2Value = applyDiscount(item2Value);
  console.log(discountedItem2Value);
  
  let item3 = document.querySelector('.heels__price');
  let item3Value = +item3.innerHTML;
  let discountedItem3Value = applyDiscount(item3Value);
  console.log(discountedItem3Value);
  
  let item4 = document.querySelector('.boots__price');
  let item4Value = +item4.innerHTML;
  let discountedItem4Value = applyDiscount(item4Value);
  console.log(discountedItem4Value);
  
  let arr = [discountedItem1Value, discountedItem2Value, discountedItem3Value, discountedItem4Value];
  
  let result = arr.reduce(function(sum, elem) {
	  return sum + elem;
  }, 0);
  console.log(result);
  function applyCoupon(discount) {
	let cartTotal = document.getElementById('result');
	let totalValue = result - (result * discount / 100);
	cartTotal.innerHTML = totalValue.toFixed(2);
  }
  
  let resultElement = document.getElementById("result");
  resultElement.innerHTML = result.toFixed(2);
  
const couponButton = document.querySelector('button');
couponButton.addEventListener("click",() => {
applyCoupon(20);
item1.textContent = (item1.textContent * 0.8).toFixed(2);
item2.textContent = (item2.textContent * 0.8).toFixed(2);
 item3.textContent = (item3.textContent * 0.8).toFixed(2);
 item4.textContent = (item4.textContent * 0.8).toFixed(2);},
 
{once: true}
 )


