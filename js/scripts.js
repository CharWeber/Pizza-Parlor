//business Logic

function Order(){
  this.pizzas = {}
  this.totalPrice = 0
  this.currentId = 0
}

function Pizza(){
  this.size = "small"
  this.crust = "butter"
  this.toppings = {}
  this.price = 0
}