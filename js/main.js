<<<<<<< HEAD
let productos = [];

const fetchProducto = async() => {
    try{
        const productosJson = await fetch("../data.json");
        const data = await productosJson.json();
        productos = data;
        cargarProductos(productos);
    }catch{
        console.log(error);
    }
}

fetchProducto();

const tituloSeccion = document.querySelector("#titulo-principal");
let btnAgregarProductos = document.querySelectorAll(".producto-agregar"); 

function cargarProductos (productoSeleccion) {
=======
import data from '../data.json' assert { type: "json" };

const productos = data;
const tituloSeccion = document.querySelector("#titulo-principal");
let btnAgregarProductos = document.querySelectorAll(".producto-agregar"); 

loadProductos(productos);

function loadProductos (productoSeleccion) {
>>>>>>> 81848f49b553f69e8d8d0dbb273058aec1eaf553
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
<<<<<<< HEAD
            cargarProductos(productosBoton);
=======
            loadProductos(productosBoton);
>>>>>>> 81848f49b553f69e8d8d0dbb273058aec1eaf553

        } else {
            tituloSeccion.innerText = "Todos los productos";
            cargarProductos(productos);
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
<<<<<<< HEAD

    Toastify({
        text: `Se agregó ${productoAgregado.name} al carrito`,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom", 
        position: "right", 
        stopOnFocus: true, 
        style: {
          background:  "#198754",
        },
        onClick: function(){} 
      }).showToast();
=======
>>>>>>> 81848f49b553f69e8d8d0dbb273058aec1eaf553
}

function actualizarNumeroCarrito(){
    let numero = productosEnCarrito.reduce((acc, producto) => acc + producto.amount, 0);
    carrito_numero.innerText = numero;
<<<<<<< HEAD
}


const enviarMail = document.getElementById("send");
var input = document.querySelector("input[type='email']");

enviarMail.addEventListener("click", suscribirse);

function suscribirse(){
    Swal.fire({
        title: '¡Listo!',
        text: 'Ya estas suscripto.',
      });

      input.value = "";
=======
>>>>>>> 81848f49b553f69e8d8d0dbb273058aec1eaf553
}