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
  pizza.doughPriceCalc(pizza);
  this.pizzas[pizza.id] = pizza
  this.priceCalc(this)
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
};


// pizza Logic
function Pizza(size, crust, sauce) {
  this.size = size
  this.crust = crust
  this.sauce = sauce
  this.doughPrice = 0
  this.toppings = {}
  this.topPrice = 0
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

Pizza.prototype.doughPriceCalc = function(){
   // calculating size price
  if (this.size === "small") {
    this.doughPrice += 5;

  }
  else if (this.size === "med") {
    this.doughPrice += 8;

  }
  else if (this.size === "large") {
    this.doughPrice += 12

  }
  else {
    return false
  }
  // calculating crust price
  if (this.crust === "butter") {
    this.doughPrice += 0
  }
  else if (this.crust === "garlic") {
    this.doughPrice += 1
  }
  else if (this.crust === "cheese") {
    this.doughPrice += 1
  }
  else {
    this.doughPrice += 2
  }
  this.price = this.doughPrice
}

Pizza.prototype.topPriceCalc = function (pizzaToSearch) {
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
    this.topPrice += sum
    this.price = this.topPrice + this.doughPrice
  }
};

//toppings logic

function Topping(topping, price) {
  this.toppings = topping;
  this.price = price
}



// USER INTERFACE LOGIC


// topping generation

let pepperoni = new Topping("Pepperoni", 0.5);
let salami = new Topping("Salami", 0.5);
let chicken = new Topping("Chicken", 2);
let bacon = new Topping("Bacon", 0.5);

let gPeppers = new Topping("Green Peppers", 0.5);
let onion = new Topping("Onion", 0.5);
let garlic = new Topping("Garlic", 0.5);
let mushrooms = new Topping("Mushrooms", 0.5);
let anchovies = new Topping("Anchovies", 0.5);

let exCheese = new Topping("Extra Cheese", 1.00)
let noCheese = new Topping("No Cheese", -1)
let fourCheese = new Topping("Four Cheese Blend", 1.00)



let newOrder = new Order;

function displayPizzaDropdown(newOrder) {
  let pizzadrop = $("select#pizzaList");
  let htmlForContactInfo = "";
  Object.keys(newOrder.pizzas).forEach(function(key) {
    const pizza = newOrder.findPizza(key);
    htmlForContactInfo += "<option value=" + pizza.id + ">Your ZA </option>";
  });
  pizzadrop.html(htmlForContactInfo);
}


function displaytoppingsDetails(PizzaToDisplay) {
  let toppingsList = $("ul#topList");
  let htmlForToppingInfo = "";
  Object.keys(PizzaToDisplay.toppings).forEach(function(key) {
    const pizza = PizzaToDisplay.findTopping(key);
    htmlForToppingInfo += "<li id=" + pizza.id + ">" + pizza.toppings + "</li>";
  });
  toppingsList.html(htmlForToppingInfo);
}

$(document).ready(function(event){
  
  $("button#pizzaCreate").click(function(){
    let size = $("input[name='size']:checked").val();
    let crust = $("input[name='crust']:checked").val();
    let sauce = $("input[name='sauce']:checked").val();

    let newPizza = new Pizza(size, crust, sauce)
    newOrder.addPizza(newPizza)

    $("#pizza-creator").addClass("hidden")
    $("#topping-creator").removeClass("hidden")
    $("#pizzadrop").removeClass("hidden")
    newOrder.priceCalc(newOrder);
    displayPizzaDropdown(newOrder);
  });

  $("button#pep").click(function(){
    let id = $("#pizzaList option:selected").val();
    let pizza = newOrder.findPizza(id);
    pizza.addTopping(pepperoni);
    displaytoppingsDetails(pizza)
    console.log(pizza)
  });
  $("button#sal").click(function(){
    let id = $("#pizzaList option:selected").val();
    let pizza = newOrder.findPizza(id);
    pizza.addTopping(salami);
    displaytoppingsDetails(pizza);
    console.log(pizza)
  });
  $("button#chicken").click(function(){
    let id = $("#pizzaList option:selected").val();
    let pizza = newOrder.findPizza(id);
    pizza.addTopping(chicken);
    displaytoppingsDetails(pizza);
    console.log(pizza)
  });
  $("button#bacon").click(function(){
    let id = $("#pizzaList option:selected").val();
    let pizza = newOrder.findPizza(id);
    pizza.addTopping(bacon);
    displaytoppingsDetails(pizza);
    console.log(pizza)
  });
  $("button#gPepper").click(function(){
    let id = $("#pizzaList option:selected").val();
    let pizza = newOrder.findPizza(id);
    pizza.addTopping(gPeppers);
    displaytoppingsDetails(pizza);
    console.log(pizza)
  });
  $("button#onion").click(function(){
    let id = $("#pizzaList option:selected").val();
    let pizza = newOrder.findPizza(id);
    pizza.addTopping(onion);
    displaytoppingsDetails(pizza);
    console.log(pizza)
  });
  $("button#garlic").click(function(){
    let id = $("#pizzaList option:selected").val();
    let pizza = newOrder.findPizza(id);
    pizza.addTopping(garlic);
    displaytoppingsDetails(pizza);
    console.log(pizza)
  })
  $("button#mushrooms").click(function(){
    let id = $("#pizzaList option:selected").val();
    let pizza = newOrder.findPizza(id);
    pizza.addTopping(mushrooms);
    displaytoppingsDetails(pizza);
    console.log(pizza)
  });
  $("button#anchovies").click(function(){
    let id = $("#pizzaList option:selected").val();
    let pizza = newOrder.findPizza(id);
    pizza.addTopping(anchovies);
    displaytoppingsDetails(pizza);
    console.log(pizza)
  });
  $("button#bake").click(function(){
    let id = $("#pizzaList option:selected").val();
    let pizza = newOrder.findPizza(id);
    pizza.topPriceCalc(pizza);
    newOrder.priceCalc(newOrder);
    $("span#finalSize").text(pizza.size)
    $("span#finalCrust").text(pizza.crust)
    $("span#finalSauce").text(pizza.sauce)
    let price = newOrder.price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    $("span#finalPrice").text(price)
    let taxPrice = newOrder.totalPrice.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    $("span#priceTax").text(taxPrice)
    $("#final-order").removeClass("hidden");
    $("#veggies").addClass("hidden");
    $("#meats").addClass("hidden");
  })

})
