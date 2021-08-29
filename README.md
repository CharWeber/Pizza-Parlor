# _Pizza Parlor_

#### _A website to create and order custom pizzas_

#### By _**Charle T Weber**_

## Technologies Used

* _HTML_
* _CSS_
* _javascript_
* _jquery libraries_
* _bootstrap libraries_

## Description

_{Welcome to the pizza place, we can create and set up a pizza order for you. THis website is designed to take user input to create a pizza order. Firstly you choose size, crust, and sauce. second: you choose what toppings you wish to add to your pizza, finally you confirm your order and see your displayed order}_

## Setup/Installation Requirements

* _clone this github repository to desired directory_ https://github.com/CharWeber/Pizza-Parlor
* _open index.html with any web browser_
* _interact as desired with open webpage_


## Known Bugs

* _when adding toppings, the price of the crust, sauce, and size are compounded again when the customer should only pay once_
* _no show order button to display the final order_
* _results have no where to display just yet_


## License

MIT CHARLIE 2021

## Contact Information

_charlestweber@gmail.com_

## tests/specs

Descibe Order()

test: creates order with properties of pizzas, price, and pizza ID counter
example code: Let newOrder = new Order()
  pizzas = {}
  total price = 0.00
  pizza ID = 0

describe Order.prototype.addPizza

test #1 : adds pizza to order
example code: Order.protype.addPizza(Pizza)
expected outcome
 order.pizzas = {pizza}

 test #2:: assigns id to pizzas added to order
 example code order.prototype.addPIzza (pizza)
 expected outcome
 order.pizzas = {pizza{pizza.id = 1}}

describe Order.prototype.deletePizza

 test #1: deletes pizza from order
 example: order.deletePizza(id)
 expected outcome
  if pizzas.id === undefined
    return false
  else
    delete this.pizzas[id]
    return true

describe Order.prototype.assignID

test #1: id counter increments by one
example code: order.assignID
expected outcome: order.currentId += 1

describe order.prototype.findPizza

test #1 : searches order list for pizzas
examplecode: order.findPizza(1)
expected outcome: return pizza[1]

describe order.prototype.priceCalc

test #1: finds sum of pizza toppingprices and adds tax
examplecode: order.priceCalc
expected outcome: 
price = price of pizzas before tax
total price = price + tax

describe Pizza()

test #1: creates Pizza object with properties of size, crust, toppings and price
example code: let newpizza = new Pizza()
  size: "small"
  crust = "butter"
  sauce = "red"
  toppings = {}
  price = 0

describe Pizza.prototype.assignId

test #1: Assigns Id to additional topings
example code: pizza.addTopping(pepperoni)
expected outcome: pizza{
  ...
  toppings: {1: pepperoni, 0.5}
  ...
}

describe Pizza.prototype.addTopping

test#1: adds topping to pizza
examplecode: pizza.addTopping(pepperoni)
expected outcome:  pizza{
  ...
  toppings: {1: pepperoni, 0.5}
  ...
}

describe Pizza.prototype.findTopping

test#1: finds toppings within pizza object
examplecode. pizza.findToppings(id)
expected output:
this.top[id]

descibe pizza.prototype.priceCalc

test #1: finds price of pizza
example code: pizza.priceCalc(pizza)
expected output: sume of topping prices a

test #2: finds price of pizza with toppings and sizing and crust
example code: pizza.priceCalc(pizza)
expected outcome: toppings price plus size & crust price


describe Top(topping, price)

test #1: create topping object with constructor
example code: let pepperoni = new Top("pepperoni", 0.5);
expected outcome: Top {topping: "pepperoni", price: 0.5}

describe displayToppingDetails(pizzaToDisplay)

test#1: populate topping list as toppings get added to pizza
example code: pizza w/ pepperoni added
expected outcome: <ul>
                  <li> pepperoni
                  </ul>
