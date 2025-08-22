/* Inicialización de variables */
precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio
/* Fin de los recursos */


let element_cantidad = document.querySelector(".cantidad");
let element_precio_inicial = document.querySelector(".precio-inicial");
let element_precio_total = document.querySelector(".valor-total");

let cantidad = element_cantidad.innerHTML ? parseInt(element_cantidad.innerHTML) : 0;
let precioInicial = element_precio_inicial.innerHTML ? parseFloat(element_precio_inicial.innerHTML) : 0;
let precioTotal = element_precio_total.innerHTML ? parseFloat(element_precio_total.innerHTML) : 0;


function onClickButtonAdd()
{
    cantidad++;
    element_cantidad.innerHTML = cantidad.toString();
    UpdatePriceTotal();
}


function onClickButtonSubtract()
{
    if (cantidad > 0) {
        cantidad--;
        element_cantidad.innerHTML = cantidad.toString();
        UpdatePriceTotal();
    }
}


function UpdatePriceTotal()
{
    precioTotal = cantidad * precioInicial;
    element_precio_total.innerHTML = precioTotal.toString();
}