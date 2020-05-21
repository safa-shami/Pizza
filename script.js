/*var TotalPrice = [];
function Order(sizeOptions, type){
	this.sizeOptions= sizeOptions;
	this.type =type;
	this.sauce =1;
	this.meat= 1;
	this.pizzaPrice=0;

}
 Order.pizzaPrice = function() {
 	if(this.sizeOptions === "small"){
 		this.pizzaPrice += 7;
 	}else if(this.sizeOptions === "medium") {
 		this.pizzaPrice += 10;
 	} else if (this.sizeOptions === "large"){
 		this.pizzaPrice +=15;
 	}

 	if (this.type === "Margherita"){
 		this.pizzaPrice += 1;
 	}else if (this.type === "four seasons") {
    this.pizzaPrice += 0.5;
 } 
  this.pizzaPrice += this.sauce;
  this.pizzaPrice += this.meat;
  return this.pizzaPrice;
}

Order.finalCost = function () {
  var cartTotalPrice = 0;
  for (var arrayElement = 0; arrayElement < totalPriceArray.length; arrayElement ++) {
    cartTotalPrice += totalPriceArray[arrayElement]; 
  }
  return cartTotalPrice;

})*/

var orders = [];

function bill(){
  var typePrice = 0;
  var sizePrice = 0; 
  var saucePrice = 0; 
  var meatPrice = 0;   
  var size = document.getElementById("pizaa-size");
  var selectSize = size.options[size.selectedIndex].value;
  console.log("size="+selectSize);  
  //var sizePrice = 0;
  if (selectSize === "Small") {
    sizePrice = 7;
  }else if (selectSize === "Medium") {
    sizePrice = 9;
  }else if (selectSize === "Large") {
    sizePrice = 12;  
  }

var type = document.getElementById("pizza-type");
var selectType = type.options[type.selectedIndex].value;
 console.log("type="+selectType);
  //var typePrice = 0;
  if (selectType === "Margherita") {
      if (size === "Small") {
        typePrice = 1;
      } else if (size === "Medium") {
        typePrice = 2;
      } else if (size === "Large") {
        typePrice = 3;    
      };
  }else if (selectType === "Four seasons") {
      if (size === "Small") {
        typePrice = 1;
      } else if (size === "Medium") {
        typePrice = 2;
      } else if (size === "Large") {
        typePrice = 3;    
      };
  }
  
var sauce = document.getElementById("Pizza-sauce");
var selectSauce = sauce.options[sauce.selectedIndex].value;
 console.log("sauce="+selectSauce);
  //var typePrice = 0;
  if (selectSauce === "Tomato") {
      if (size === "Small") {
        saucePrice = 1;
      } else if (size === "Medium") {
        saucePrice = 2;
      } else if (size === "Large") {
        saucePrice = 3;    
      };
  }else if (selectSauce === "Alfredo") {
      if (size === "Small") {
        saucePrice = 1;
      } else if (size === "Medium") {
        saucePrice = 2;
      } else if (size === "Large") {
        saucePrice = 3;    
      };
  }
   
var meat = document.getElementById("pizza-meat");
var selectMeat = meat.options[meat.selectedIndex].value;
 console.log("meat="+selectMeat);
  //var typePrice = 0;
  if (selectMeat === "Meat") {
      if (size === "Small") {
        meatPrice = 1;
      } else if (size === "Medium") {
        meatPrice = 2;
      } else if (size === "Large") {
        meatPrice = 3;    
      };
  }else if (selectMeat === "None") {
    meatPrice = 0;
  }
  var totalPrice = typePrice + sizePrice + saucePrice + meatPrice;
  return {size: selectSize, type:selectType, sauce: selectSauce, meat: selectMeat, totalPrice: totalPrice};
}

var order = document.getElementById('submit');
var checkout = document.getElementById('checkout-btn');
var currentOrder;

order.onclick = function(){
  currentOrder = bill();
  orders.push(currentOrder);
 //console.log(order);  
}
checkout.onclick = function(){
  var index = orders.indexOf(currentOrder);
  //console.log(index);  
  document.getElementById('final-cost').innerText = orders[index].totalPrice;
}

