const productos = [
	{
        "id": 1,
        "name": "Medias My Hero Academia",
        "price": 1500,
        "image": "/images/tienda/medias/mediasheroaca.webp",
        "category": {
            "name": "Medias",
            "id": "medias"
        }
    },
	{
        "id": 2,
        "name": "Medias My Hero Academia Bakugo",
        "price": 1500,
        "image": "/images/tienda/medias/mediasheroacabakugo.webp",
        "category": {
            "name": "Medias",
            "id": "medias"
        }
    },
	{
        "id": 3,
        "name": "Medias Naruto",
        "price": 1500,
        "image": "/images/tienda/medias/mediasnaruto.webp",
        "category": {
            "name": "Medias",
            "id": "medias"
        }
    },
	{
        "id": 4,
        "name": "Remera Darling in the Franxx",
        "price": 3500,
        "image": "/images/tienda/remera/remeradarlingfranz.webp",
        "category": {
            "name": "Remera",
            "id": "remera"
        }
    },
	{
        "id": 5,
        "name": "Remera My Hero Academia",
        "price": 3500,
        "image": "/images/tienda/remera/remeraheroaca.webp",
        "category": {
            "name": "Remera",
            "id": "remera"
        }
    },
	{
        "id": 6,
        "name": "Remera Junji Ito - Uzumaki",
        "price": 3500,
        "image": "/images/tienda/remera/remerajunjiitouzumaki.webp",
        "category": {
            "name": "Remera",
            "id": "remera"
        }
    },
    {
        "id": 7,
        "name": "Remera One Piece - Straw Hat",
        "price": 3500,
        "image": "/images/tienda/remera/remereaonepiecestrawhat.webp",
        "category": {
            "name": "Remera",
            "id": "remera"
        }
    },
    {
        "id": 8,
        "name": "Sweater Jojo",
        "price": 8000,
        "image": "/images/tienda/sweater/jojo.jpg",
        "category": {
            "name": "Sweater",
            "id": "sweater"
        }
    },
	{
        "id": 9,
        "name": "Sweater Junji-Ito",
        "price": 8000,
        "image": "/images/tienda/sweater/junji-ito.webp",
        "category": {
            "name": "Sweater",
            "id": "sweater"
        }
    },
	{
        "id": 10,
        "name": "Sweater naruto",
        "price": 8000,
        "image": "/images/tienda/sweater/naruto.jpg",
        "category": {
            "name": "Sweater",
            "id": "sweater"
        }
    },
	{
        "id": 11,
        "name": "Sweater One Piece - Devil Fruit",
        "price": 8000,
        "image": "/images/tienda/sweater/onepiece.jpg",
        "category": {
            "name": "Sweater",
            "id": "sweater"
        }
    },
	{
        "id": 12,
        "name": "Sweater Shingeki no Kyojin Corps",
        "price": 8000,
        "image": "/images/tienda/sweater/shingeki.jpg",
        "category": {
            "name": "Sweater",
            "id": "sweater"
        }
    },
    {
        "id": 13,
        "name": "Medias Avatar - Aang",
        "price": 1500,
        "image": "/images/tienda/medias/mediaang.jpg",
        "category": {
            "name": "Medias",
            "id": "medias"
        }
    },
    {
        "id": 14,
        "name": "Medias Avatar - Zuko",
        "price": 1500,
        "image": "/images/tienda/medias/mediazuko.jpg",
        "category": {
            "name": "Medias",
            "id": "medias"
        }
    },
    {
        "id": 15,
        "name": "Remera Death Note",
        "price": 3500,
        "image": "/images/tienda/remera/remeradeathnote.webp",
        "category": {
            "name": "Remera",
            "id": "remera"
        }
    },
    {
        "id": 16,
        "name": "Remera Bleach",
        "price": 3500,
        "image": "/images/tienda/remera/remerableach.webp",
        "category": {
            "name": "Remera",
            "id": "remera"
        }
    }
]


loadProductos(productos);

//Utilizacion de loops, metodos de array: ya se deja el codigo para utilizar al momento de cargar elementos en el DOM de manera dinamica
const tituloSeccion = document.querySelector("#titulo-principal");
function loadProductos (productoSeleccion) {
    const  contenedor = document.getElementById("contenedor-productos");

    contenedor.innerHTML = "";

    productoSeleccion.forEach(p => {
        const div = document.createElement("div");
        div.classList.add("producto");

        div.innerHTML = `
            <img class="producto-imagen" src="${p.image}" alt="${p.name}"">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${p.name}</h3>
                <p class="producto-precio">$${p.price}</p>
                <button class="producto-agregar" id=${p.id}">Agregar</button>
            </div>`

            contenedor.append(div);
    });
}


//Utilizacion de loops, metodos de array: ya se deja el codigo para utilizar al momento de cargar elementos en el DOM de acuerdo a seleccion de boton de usuario
const grupoItems = document.querySelectorAll(".boton-categoria"); 

grupoItems.forEach(item => {
    item.addEventListener("click", (e) => {

        grupoItems.forEach(b => b.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.category.id === e.currentTarget.id);
            tituloSeccion.innerText = productoCategoria.category.name;

            const productosBoton = productos.filter(producto => producto.category.id === e.currentTarget.id);
            loadProductos(productosBoton);
        } else {
            tituloSeccion.innerText = "Todos los productos";
            loadProductos(productos);
        }

    })
});

// interacion con el usuario mediante prompt y alert
let btnAgregarProductos = document.querySelectorAll(".producto-agregar"); 
let productosCart = 0;
let productosAgregadosAlCarrito = []

btnAgregarProductos.forEach(item => {
    item.addEventListener("click", () => {

        let seAgrega = parseInt(prompt("Cuantos items desea agregar"));

        productosAgregadosAlCarrito.push(item);

        productosCart += seAgrega;

        if(seAgrega > 0){
            alert(`Agregaste ${productosCart} al carrito con exito!`);
            console.log('Se agregaron los productos al carrito')
        }
        else{
            alert("No se agrego ningun item al carrito")
            console.log('No se agregó nada al carrito')
        }
    });
});

// funcion que realiza operacion de suma y resta para obtener el total a pagar
function totalAPagar(){
    let totalAPagar = 0;
    productosAgregadosAlCarrito.forEach(item =>{
        totalAPagar += item.price;
    });

    let descuento = 100;
    let total = totalAPagar - descuento;
    return total;
   
}


//PARA PRE ENTREGA N°2 - PROMPT Y ALERT
//simulador de carrito via prompt.
function cartViaPrompt() {
    const precioMedias = 1500
    const precioRemera = 3500
    const precioSweater = 8000
    let cart = []

//selección de cantidad de elementos de cada tipo con agregado al array
    let compraMedias = parseInt(prompt('¿Cuantas medias querés comprar?'));
    while (isNaN(compraMedias)) {
        compraMedias = parseInt(prompt('Por favor escribi un numero'))
    };

    totalMedias = precioMedias*compraMedias;
    cart.push(compraMedias + ' par/es de medias');

    let compraRemeras = parseInt(prompt('¿Cuantas remeras querés comprar?'));
    while (isNaN(compraRemeras)) {
        compraRemeras = parseInt(prompt('Por favor escribi un numero'))
    };
    totalRemeras = precioRemera*compraRemeras;
    cart.push(compraRemeras + ' remeras');

    let compraSweater = parseInt(prompt('¿Cuantos sweaters querés comprar?'));
    while (isNaN(compraSweater)) {
        compraSweater = parseInt(prompt('Por favor escribi un numero'));
    };
   
    totalSweater = precioSweater*compraSweater;
    cart.push(compraSweater + ' sweaters');

//cálculo del precio total
    totalCartPrecio = totalMedias + totalRemeras + totalSweater;

    console.log(cart);

    alert(`Tu carrito contiene ${cart} y su costo es ${totalCartPrecio}`);

//prompt para remover elemento del carrito
    let remover = parseInt(prompt('Para remover medias presiona 1, para remover remeras presiona 2, para remover sweater presiona 3, para no remover nada y continuar presiona 4'));
    while (isNaN(remover) || remover < 1 || remover > 4 ) {
        remover = parseInt(prompt('Por favor, para remover medias presiona 1, para remover remeras presiona 2, para remover sweater presiona 3, para no remover nada y continuar presiona 4'))
    };

// se usan diferentes métodos para alterar el array. Basado en la posición de cada producto en el mismo
    switch(remover) {
        case 1:
            cart.shift();
            totalCartPrecio -= totalMedias
            break;
        case 2:
            cart.splice(1,1)
            totalCartPrecio -= totalRemeras
            break;
        case 3:
            cart.pop()
            totalCartPrecio -= totalSweater
            break; 
        case 4:
            break;     
    };


    alert(`Tu carrito contiene ${cart} y su costo es ${totalCartPrecio}`)
}
