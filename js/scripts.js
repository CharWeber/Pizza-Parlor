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
  pizza.priceCalc(pizza);
  this.pizzas[pizza.id] = pizza
  this.priceCalc(this)
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


Order.prototype.priceCalc = function (OrderToSearch) {
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
function Pizza(size, crust, sauce) {
  this.size = size
  this.crust = crust
  this.sauce = sauce
  this.toppings = {}
  this.price = 0.00
  this.currentId = 0
}

Pizza.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId
}

Pizza.prototype.addTopping = function (top) {
  top.id = this.assignId();
  this.toppings[top.id] = top;
  console.log(this.toppings);
};

Pizza.prototype.findTopping = function (id) {
  if (this.toppings[id] != undefined) {
    return this.toppings[id]
  }
  return false
}

Pizza.prototype.deleteTopping = function (id) {
  if (this.toppings[id] === undefined) {
    return false
  }
  else {
    delete this.toppings[id]
    return true
  }
};

Pizza.prototype.priceCalc = function (pizzaToSearch) {
  // calculating size price
  if (this.size === "small") {
    this.price += 5;

  }
  else if (this.size === "med") {
    this.price += 8;

  }
  else if (this.size === "large") {
    this.price += 12

  }
  else {
    return false
  }
  // calculating crust price
  if (this.crust === "butter") {
    this.price += 0
  }
  else if (this.crust === "garlic") {
    this.price += 1
  }
  else if (this.crust === "cheese") {
    this.price += 1
  }
  else {
    this.price += 2
  }
  // calculating toppings price
  if (this.toppings === undefined) {
    return false
  }
  else {
    let tempPrice = []
    Object.keys(pizzaToSearch.toppings).forEach(function (key) {
      if (pizzaToSearch != undefined) {
        let toppings = pizzaToSearch.findTopping(key)
        tempPrice.push(toppings.price);
      }
    })
    const sum = tempPrice.reduce((accumulator, currentvalue) => {
      return accumulator + currentvalue;
    }, 0);
    this.price += sum
  }
  console.log(this.price)
};

//toppings logic

function Topping(topping, price) {
  this.toppings = topping;
}



// USER INTERFACE LOGIC


// topping generation

let pepperoni = new Topping("pepperoni", 0.5);
let salami = new Topping("salami", 0.5);
let chicken = new Topping("chicken", 2);
let bacon = new Topping("bacon", 0.5);

let gPeppers = new Topping("Green Peppers", 0.5);
let onion = new Topping("onion", 0.5);
let garlic = new Topping("garlic", 0.5);
let mushrooms = new Topping("mushrooms", 0.5);
let anchovies = new Topping("anchovies", 0.5);

let exCheese = new Topping("Extra Cheese", 1.00)
let noCheese = new Topping("No Cheese", -1)
let fourCheese = new Topping("four Cheese Blend", 1.00)



let newOrder = new Order;

// let order1 = new Order
// let pizza1 = new Pizza("small", "butter", "red")
// let pizza2 = new Pizza("med", "garlic", "red")

// order1.addPizza(pizza1);
// order1.addPizza(pizza2);
// pizza1.addTopping(pepperoni);
// pizza1.addTopping(salami);
// pizza1.addTopping(gPeppers);


// .toLocaleString('en-US', {
//   style: 'currency',
//   currency: 'USD',
// });

$(document).ready(function(event){
  
  $("button#pizzaCreate").click(function(){
    let size = $("input[name='size']:checked").val();
    let crust = $("input[name='crust']:checked").val();
    let sauce = $("input[name='crust']:checked").val();

    let newPizza = new Pizza(size, crust, sauce)
    newOrder.addPizza(newPizza)

    $("#pizza-creator").addClass("hidden")
    $("#topping-creator").removeClass("hidden")
    newOrder.priceCalc(newOrder);
    return newPizza
  });

  $("button#pep").click(function(){
    newPizza.addTopping(pepperoni)
    console.log(newPizza)
  })


















})