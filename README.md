# _{Application Name}_

#### _{Brief description of application}_

#### By _**{List of contributors}**_

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## License

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Contact Information

_{Add your contact information here.}_

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

test #1: finds sum of pizza prices and adds tax
examplecode: order.priceCalc
expected outcome: 
price = price of pizzas before tax
total price = price + tax

describe Pizza()

test: creates Pizza object with properties of size, crust, toppings and price
example code: let newpizza = new Pizza()
  size: "small"
  crust = "butter"
  sauce = "red"
  toppings = {}
  price = 0

  describe Top(topping, price)

  test: create topping object with 