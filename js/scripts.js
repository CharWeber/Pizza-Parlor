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
  else{
    return false
  }
}
// Order.prototype.priceCalc = function(){
//   if (this.pizzas === undefined){
//     return false
//   }
//   else{
//     Object.keys(orderToSearch.pizzas).forEach(function(key){
//       const pizza = ordertoSearch.pizzas[key]

//       console.log(OrdertoSearch.pizzas)
//       console.log(this.totalprice)
//     })
//   }
// };

function Pizza(){
  this.size = "small"
  this.crust = "butter"
  this.sauce = "red"
  this.toppings = {}
  this.price = 5.00
}

let order1 = new Order
let pizza1 = new Pizza