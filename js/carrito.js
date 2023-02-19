const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));

const contenedorCarritoVacio = document.getElementById("carrito-vacio");
const contenedorCarritoProductos = document.getElementById("carrito-productos");
const contenedorAcciones = document.getElementById("carrito-acciones");
const contenedorCarritoComprado = document.getElementById("carrito-comprado");
const btnVaciar = document.getElementById("eliminar");
const btnTotal = document.getElementById("total");
const btnComprar = document.getElementById("comprar");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");


function cargarCarrito(){
    if(productosEnCarrito && productosEnCarrito.length > 0 ){
        contenedorCarritoVacio.classList.add("disabled");

        contenedorCarritoProductos.classList.remove("disabled");
        contenedorAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");

        contenedorCarritoProductos.innerHTML = "";

        productosEnCarrito.forEach(p => {
            const subtotal = p.price * p.amount;
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            
            div.innerHTML = `
                        <img class="carrito-producto-imagen" src="${p.image}" alt="${p.name}">
                        <div class="carrito-titulo carrito-producto-titulo">
                            <small>Articulo</small>
                            <p>${p.name}</p>
                        </div>
                        <div class="carrito-titulo carrito-producto-cantidad">
                            <small>Cantidad</small>
                            <p>${p.amount}</p>
                        </div>
                        <div class="carrito-titulo carrito-producto-precio">
                            <small>Precio</small>
                            <p>$${p.price}</p>
                        </div>
                        <div class="carrito-titulo carrito-producto-subtotal">
                            <small>Subtotal</small>
                            <p>$${subtotal}</p>
                        </div>
                        <button class="carrito-producto-eliminar" id=${p.id}><ion-icon name="trash-outline"></ion-icon></button>
                        `

            contenedorCarritoProductos.append(div);

            total += subtotal;
        });
    }else{
        contenedorCarritoVacio.classList.remove("disabled");

        contenedorCarritoProductos.classList.add("disabled");
        contenedorAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }

    actualizarBotonesEliminar();

    calcularTotal();
}

cargarCarrito();

function actualizarBotonesEliminar(){
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton =>{
        boton.addEventListener("click", eliminarDelCarrito);
    })
}

function eliminarDelCarrito(e){
    const btnId = e.currentTarget.id;
    const productoAEliminar = productosEnCarrito.find(producto => producto.id === btnId);
    const index = productosEnCarrito.findIndex(producto => producto.id === btnId);
    productosEnCarrito.splice(index, 1);

    Toastify({
        text: `Se ha eliminado ${productoAEliminar.name} del carrito`,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom", 
        position: "right", 
        stopOnFocus: true, 
        style: {
          background:  "#DC3545",
        },
        onClick: function(){} 
      }).showToast();

    cargarCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

btnVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito(){

    Swal.fire({
        title: '¿Estas seguro que deseas vaciar tu carrito?',
        text: "Se removeran todos los productos",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#198754',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
      }).then((result) => {
        if (result.isConfirmed) {
            productosEnCarrito.length = 0;
            localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

            cargarCarrito();
        
        }
      })
}

function calcularTotal(){

    const total = productosEnCarrito.reduce((acc, producto) => acc + (producto.amount * producto.price), 0);
    btnTotal.innerHTML = `$${total}`;
}

btnComprar.addEventListener("click", comprarCarrito);

function comprarCarrito(){
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");
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
}

