//Variables y Lista de compras del cliente

const item1 = {
    name: "Buzo Dragon Ball Z",
    size: "XL",
    price: "300",
    isFragile: false,
}
const item2 = {
    name: "Buzo One piece",
    size: "L",
    price: "100",
    isFragile: false,
}
const item3 = {
    name: "Jarra Pokemon",
    size: "S",
    price: "800",
    isFragile: true,
}
var shoppingList = [item1, item2, item3]


//simulador de Costos de envío basados en locación. Utiliza CONDICIONAL y CICLO
function shippingCost() {
    let shippingCost = 0;
    let area = parseInt(prompt('¿De que zona sos? 1 - CABA, 2 - Conurbano, 3 - Interior?'));
    console.log(area)
    while (isNaN(area) || area < 1 || area > 3 ) {
        area = parseInt(prompt('Por favor, escribí entre 1 (para CABA), 2 (para Conurbano) o 3 (para interior)'))
    }
    switch(area) {
        case 1:
            shippingCost = 0;
            break;
        case 2:
            shippingCost = 800;
            break;
        case 3:
            shippingCost = 4000;
            break;      
    }

    alert('El costo del envío es ' + shippingCost)
}



//Simulador que checkea si hay objetos frágiles en el pedido útil para el proyecto. Utiliza CICLO.
function fragileItems(shoppingList) {
    for(let i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i].isFragile === true) 
        {
            console.log(`item ${i} es fragil`) 
        }
        else 
        {
            console.log(`${i} no es fragil`)
        }
    }
}

