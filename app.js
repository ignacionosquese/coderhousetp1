let valorTotal = document.getElementById ('total');
let bienvendida = prompt('Bienvenido a la tienda virtual Coderhouse. Desea comprar algo? S/N');
let bienvendidas = bienvendida.toLowerCase;
let cupon = false;
let resultado;


valorTotal.innerHTML = "fghfghfghfhj";

document.getElementById('check1').addEventListener("click", descuento);

function descuento(cupon){

    cupon = true;
    return cupon;
}



function calcularPrecio (cupon){ 

let cantidadZapatillas = document.getElementById('cantidadZapatillas').value;
let cantidadPantalones = document.getElementById('cantidadPantalones').value;
let cantidadRemeras = document.getElementById('cantidadRemeras').value;




    //while (bienvendidas != n && seguirComprando != n){

        if (cupon == true){
            resultado = (cantidadZapatillas* 1600) + (cantidadPantalones * 1000) + (cantidadRemeras * 600);
        }
        else{
            resultado = (cantidadZapatillas * 2000) + (cantidadPantalones * 1500) + (cantidadRemeras * 1000);
        }
//} 
valorTotal.innerHTML = "Total a pagar: $ " + resultado;

}



//document.getElementById ("total").innerHTML = "fghdfghfghfghf";



