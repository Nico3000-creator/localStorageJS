// clase para guardar y seguir el ingreso de un usuario en la web

localStorage.setItem("nombre", "Nicolas Grimaldi");

// PRIMER EJEMPLO
// indicamos la variable del producto para ser reflejado en el localStorage

const producto = {
    nombre: "Shampoo",
    cantidad: 5
}

// convertimos el producto en un string con una variable

const strProduct = JSON.stringify(producto);

// guardamos el producto en el localStorage
localStorage.setItem("productos", strProduct);

// SEGUNDO EJEMPLO
// indicamos la variable del producto para ser reflejado en el localStorage
const meses = ["Enero", "Febrero", "Marzo"];

// convertimos el producto en un string con una variable
srtMeses = JSON.stringify(meses);

// guardamos el producto en el localStorage
localStorage.setItem("meses", srtMeses);  

// comando para sacarlo del localStorage
const localMeses = localStorage.getItem("meses");
console.log(typeof localMeses);
const strLocalMeses = JSON.parse(localMeses);
console.log(typeof strLocalMeses);

// Remover item 
// desaparecer "nombre" del localstorage
 localStorage.removeItem("nombre")

// agregamos el mes abril al localstorage
strLocalMeses.push("abril")
localStorage.setItem("meses", JSON.stringify(strLocalMeses));