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

Order.prototype.deletePizza = function(id) {
  if (this.pizzas[id] === undefined){
    return false
  }
  else{
    delete this.pizzas[id]
    return true
  }
}

function Pizza(){
  this.size = "small"
  this.crust = "butter"
  this.sauce = "red"
  this.toppings = {}
  this.price = 5.00
}

let order1 = new Order
let pizza1 = new Pizza