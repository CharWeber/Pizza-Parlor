//business Logic

function Order(){
  this.pizzas = {}
  this.totalPrice = 0
  this.currentId = 0
}

Order.prototype.assignId = function(){
  this.currentId = this.currentId += 1;
  return this.currentId;
}

Order.prototype.addPizza = function(pizza){
  pizza.id = this.assignId();
  this.pizzas[pizza.id] = pizza
}


function Pizza(){
  this.size = "small"
  this.crust = "butter"
  this.toppings = {}
  this.price = 0
}

let order1 = new Order
let pizza1 = new Pizza