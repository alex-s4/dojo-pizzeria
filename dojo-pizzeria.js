// Create a function called pizzaOven that returns a JavaScript (Pizza) Object

function pizzaOven (crustType, sauceType, cheeses, toppings) {
    var Pizza = {};
    Pizza.crustType = crustType;
    Pizza.sauceType = sauceType;
    Pizza.cheeses = cheeses;
    Pizza.toppings = toppings;
    Pizza.info = function() {
        console.log("Crust Type:", this.crustType);
        console.log("Sauce Type:", this.sauceType);
        console.log("Cheeses:", this.cheeses);
        console.log("Toppings:", this.toppings);
    }
    return Pizza;
}


// Create a pizza with: "deep dish", "traditional", ["mozzarella"], and ["pepperoni", "sausage"]

var firstPizza = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"])


// Create a pizza with: "hand tossed", "marinara", ["mozzarella", "feta"], and ["mushrooms", "olives", "onions"]

var secondPizza = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])

// Create 2 more pizzas with any toppings we like!

var thirdPizza = pizzaOven("thin crust", "traditional", ["white cheese", "blue cheese", "cheese whiz"], ["pineapple", "watermelon", "hotdogs"])

var fourthPizza = pizzaOven("deep dish", "marinara", ["parmesan", "cheddar"], ["raisins", "m&ms", "rabbit meat"])



// Bonus Challenge: Create a function called randomPizza that uses Math.random() to create a random pizza!

var crustTypesForPizza = ["stuffed crust", "cracker crust", "flat bread crust", "thin crust", "cheese crust", "thick crust", "wrapping it up"]
var sauceForPizza = ["pesto", "white garlic sauce", "garlic ranch sauce", "hummus", "buffalo sauce", "marinara sauce"]
var cheesesForPizza = ["mozzarella", "parmesan", "cheddar", "pecorino romano", "provolone", "ricotta", "parmigiano reggiano", "goat cheese"]
var toppingsForPizza = ["pepperoni", "sausages", "olives", "pineapple", "raisins", "m&ms", "barbecue sauce", "egg", "broccoli", "canned sardines", "canned tunas", "canned mushrooms", "avocado", "banana"]

function RandomPizza () {
    this.crustType = crustTypesForPizza[Math.trunc(Math.random() * crustTypesForPizza.length)]
    this.sauceType = sauceForPizza[Math.trunc(Math.random() * sauceForPizza.length)]
    this.cheeses = cheesesForPizza[Math.trunc(Math.random() * cheesesForPizza.length)]
    this.toppings = toppingsForPizza[Math.trunc(Math.random() * toppingsForPizza.length)]

    this.info = function() {
        console.log("Crust Type:", this.crustType);
        console.log("Sauce Type:", this.sauceType);
        console.log("Cheeses:", this.cheeses);
        console.log("Toppings:", this.toppings);
    }
}

// Create and print random pizza to the console
var randPizza1 = new RandomPizza()
randPizza1.info()