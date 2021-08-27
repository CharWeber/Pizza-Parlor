//business Logic

// Order Logic
function Order() {
  this.pizzas = {}
  this.price = 0
  this.totalPrice = this.price * 1.08
  this.currentId = 0
}

Order.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

Order.prototype.addPizza = function (pizza) {
  pizza.id = this.assignId();
  this.pizzas[pizza.id] = pizza
  console.log(this.pizzas);
};

Order.prototype.deletePizza = function (id) {
  if (this.pizzas[id] === undefined) {
    return false
  }
  else {
    delete this.pizzas[id]
    return true
  };
};

Order.prototype.findPizza = function (id) {
  if (this.pizzas[id] != undefined) {
    return this.pizzas[id]
  }
  return false
}


Order.prototype.PriceCalc = function (OrderToSearch) {
  if (this.pizzas === undefined) {
    return false
  }
  else {
    let tempPrice = []
    Object.keys(OrderToSearch.pizzas).forEach(function (key) {
      if (OrderToSearch != undefined) {
        let pizza = OrderToSearch.findPizza(key)
        tempPrice.push(pizza.price);
      }
    })
    const sum = tempPrice.reduce((accumulator, currentvalue) => {
      return accumulator + currentvalue;
    }, 0);
    this.price = sum
    this.totalPrice = Math.round((sum * 1.08) * 100) / 100
  }
  console.log(this.price)
};


// pizza Logic
function Pizza() {
  this.size = "small"
  this.crust = "butter"
  this.sauce = "red"
  this.toppings = {}
  this.price = 5.00
  this.currentId = 0
}

Pizza.prototype.assignId = function(){
  this.currentId += 1;
  return this.currentId
}

Pizza.prototype.addTopping = function(top){
  top.id = this.assignId();
  this.toppings[top.id] = top;
  console.log(this.toppings);
};

pizza.prototype.findTopping = function(id){
  
}

Pizza.prototype.deleteTopping = function(){

};

Pizza.prototype.priceCalc = function(){

};

//toppings logic

function Top(topping, price) {
  this.name = topping;
  this.price = price;
}



// USER INTERFACE LOGIC


// topping generation

let pepperoni = new Top("pepperoni", 0.5);
let salami = new Top("salami", 0.5);
let chicken = new Top("chicken", 2);
let bacon = new Top("bacon", 0.5);

let gPeppers = new Top("Green Peppers", 0.5);
let onion = new Top("onion", 0.5);
let garlic = new Top("garlic", 0.5);
let mushrooms = new Top("mushrooms", 0.5);
let anchovies = new Top("anchovies", 0.5);

let exCheese = new Top("Extra Cheese", 1.00)
let noCheese = new Top("No Cheese", -1)
let fourCheese = new Top("four Cheese Blend", 1.00)





let order1 = new Order
let pizza1 = new Pizza
order1.addPizza(pizza1);
