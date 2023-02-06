import data from '../data.json' assert { type: "json" };

const productos = data;
const tituloSeccion = document.querySelector("#titulo-principal");
let btnAgregarProductos = document.querySelectorAll(".producto-agregar"); 

loadProductos(productos);

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
                <button class="producto-agregar" id=${p.id}>Agregar</button>
            </div>`

            contenedor.append(div);
    });

    actualizarBotonesAgregar();
}


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


function actualizarBotonesAgregar() {
    btnAgregarProductos = document.querySelectorAll(".producto-agregar");

    btnAgregarProductos.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}


const carrito_numero = document.getElementById("carrito_numero");
let productosEnCarrito;
const productosEnCarritoLocalStorage = JSON.parse(localStorage.getItem("productos-en-carrito"));

if(productosEnCarritoLocalStorage){
    productosEnCarrito = productosEnCarritoLocalStorage;
    actualizarNumeroCarrito();
}else{
    productosEnCarrito = [];
}

function agregarAlCarrito(e){
    const btnId = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === btnId);

    if(productosEnCarrito.some(producto => producto.id === btnId)){

        const index = productosEnCarrito.findIndex(producto => producto.id === btnId);
        productosEnCarrito[index].amount++;

    }else{
        productoAgregado.amount = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumeroCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumeroCarrito(){
    let numero = productosEnCarrito.reduce((acc, producto) => acc + producto.amount, 0);
    carrito_numero.innerText = numero;
}