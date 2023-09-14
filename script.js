/* var sandwich = {
    pan:    "masa madre",
    proteína:  "asado",
    queso:   "queso suizo lacey",
    salsas: ["lechuga romana", "tomates reliquia", "salsa de rábano"]
};
    
console.log(sandwich);
 */

/* function sandwichFactory(pan, proteína, queso, salsas) {
    var sandwich = {};
    sandwich.pan = pan;
    sandwich.proteína = proteína;
    sandwich.queso = queso;
    sandwich.salsas = salsas;
    return sandwich;
}
    
var s1 = sandwichFactory("trigo", "pavo", "provolone", ["mostaza", "cebolla frita", "rúcula"]);
console.log(s1);
 */

/* Crea una función llamada pizzaOven que devuelva un objeto JavaScript (Pizza) */
/* Crea una pizza con: "estilo Chicago", "tradicional", ["mozzarella"] y ["pepperoni", "salchicha"] */
function pizzaOven(tipoCorteza, tipoSalsa, quesos, ingredientes) {
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.ingredientes = ingredientes;
    return pizza;
}

var p1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
console.log(p1);

/* crea una pizza con: "lanzada a mano" , "marinara" , ["mozzarella", "feta"] y ["champiñones", "aceitunas", "cebollas"] */
function pizzaOven(tipoCorteza, tipoSalsa, quesos, ingredientes) {
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.ingredientes = ingredientes;
    return pizza;
}

var p1 = pizzaOven("Lanzada a mano", "marinara", ["mozzarella" , "feta"], ["pepperoni", "salchicha" , "Cebollas"]);
console.log(p1);


/* ¡Crea 2 pizzas más con los ingredientes que quieras! */

function telePizza(tipoCorteza,tipoSalsa,quesos,ingredientes){
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.ingredientes = ingredientes;
    return pizza;
}
var p1 = telePizza ("Delgada","BBQ","Queso suizo", ["Salame" , "Cebolla","Extra queso"]);
var p2 = telePizza ("Rellena de queso","BBQ","Queso suizo", ["Carne" , "Choclo","Pimenton"]);
console.log(p1);
console.log(p2);