//business Logic

function Order(){
  this.pizzas = {}
  this.price = 0
  this.totalPrice = this.price * 1.08
  this.currentId = 0
}

Order.prototype.assignId = function(){
  this.currentId = this.currentId += 1;
  return this.currentId;
};

Order.prototype.addPizza = function(pizza){
  pizza.id = this.assignId();
  this.pizzas[pizza.id] = pizza
  console.log(this.pizzas);
};

Order.prototype.deletePizza = function(id) {
  if (this.pizzas[id] === undefined){
    return false
  }
  else{
    delete this.pizzas[id]
    return true
  };
};

Order.prototype.findPizza = function(id){
  if (this.pizzas[id] != undefined){
    return this.pizzas[id]
  }
    return false
}


Order.prototype.PriceCalc =  function(OrderToSearch){
  if (OrderToSearch.pizzas === undefined){
    return false
  }
  else{
    let newPrice = 0
    Object.keys(OrderToSearch.pizzas).forEach(function(key){
      if (OrderToSearch != undefined){
      let pizza = OrderToSearch.findPizza(key)
      let tempPrice = pizza.price 
      let newPrice = tempPrice + newPrice
      console.log(newPrice)
      }
    })
  }
};

function Pizza(){
  this.size = "small"
  this.crust = "butter"
  this.sauce = "red"
  this.toppings = {}
  this.price = 5.00
}

let order1 = new Order
let pizza1 = new Pizza
let pizza2 = new Pizza
let pizza3 = new Pizza
order1.addPizza(pizza1);
order1.addPizza(pizza2);
order1.addPizza(pizza3);