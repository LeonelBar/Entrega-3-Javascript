// TIENDA DE VIDEOSJUEGOS SUPER-ARCADE

//JUEGOS 
const PRECIO_GTASA = 3500;
const PRECIO_RE4 = 3000;
const PRECIO_GOW = 3200;
const PRECIO_DBZBT3 = 3000;
const PRECIO_GT3 = 3400;
const PRECIO_NFS = 3000;

//VARIABLES
let totalCompra = 0;
let cantidadJuegos = 0;
let opcion = "";

//Funcion de Entrada / Interaccion 
function agregarJuegoAlCarrito(nombreJuego, precioJuego) {
    console.log("Agregado: " + nombreJuego + " ($" + precioJuego + ")");
    alert("🎮 " + nombreJuego + " fue agregado al carrito.");
    return precioJuego; // Uso de RETURN
}

//Funcion de Flecha para un procesamiento 
const calcularMontoDescuento = (subtotal, porcentaje) => subtotal * (porcentaje / 100);

//Funcion de Salida  /  Resumen     
const mostrarResumenFinal = function (totalItems, descuentoAplicado, montoFinal) {
    let mensajeResumen = "📄 RESUMEN DE COMPRA Super-Arcade:\n" +
        "- Cantidad de juegos: " + totalItems + "\n" +
        "- Descuento aplicado: $" + descuentoAplicado + "\n" +
        "- Total a Pagar: $" + montoFinal + "\n\n" +
        "¡Gracias por tu compra!";


    console.log(mensajeResumen);
    alert(mensajeResumen);
};

//Comienzo de Algoritmo y de los controles de Flujos

alert("🎮 ¡Bienvenido a Super-Arcade!");

// MENU OPCIONES (con bucle while)
while (opcion !== "7" && opcion !== "ESC" && opcion !== "esc") {
    opcion = prompt(
        "GAME LIST:\n" +
        "1. GTA San Andreas ($" + PRECIO_GTASA + ")\n" +
        "2. Resident Evil 4 ($" + PRECIO_RE4 + ")\n" +
        "3. God of War II ($" + PRECIO_GOW + ")\n" +
        "4. Dragon Ball Z Budokai Tenkaichi 3 ($" + PRECIO_DBZBT3 + ")\n" +
        "5. Gran Turismo 3 ($" + PRECIO_GT3 + ")\n" +
        "6. Need for Speed Carbon ($" + PRECIO_NFS + ")\n" +
        "7. Finalizar compra\n" +
        "🛒 Llevas " + cantidadJuegos + " juego(s)" + " | Total actual: $" + totalCompra
    );


    // CONDICIONALES DENTRO DEL BUCLE 
    if (opcion === "1") {
        totalCompra += agregarJuegoAlCarrito("GTA San Andreas", PRECIO_GTASA);
        cantidadJuegos++;

    } else if (opcion === "2") {
        totalCompra += agregarJuegoAlCarrito("Resident Evil 4", PRECIO_RE4);
        cantidadJuegos++;

    } else if (opcion === "3") {
        totalCompra += agregarJuegoAlCarrito("God of War II", PRECIO_GOW);
        cantidadJuegos++;

    } else if (opcion === "4") {
        totalCompra += agregarJuegoAlCarrito("Dragon Ball Z Budokai Tenkaichi 3", PRECIO_DBZBT3);
        cantidadJuegos++;

    } else if (opcion === "5") {
        totalCompra += agregarJuegoAlCarrito("Gran Turismo 3", PRECIO_GT3);
        cantidadJuegos++;

    } else if (opcion === "6") {
        totalCompra += agregarJuegoAlCarrito("Need for Speed Carbon", PRECIO_NFS);
        cantidadJuegos++;

    } else if (opcion === "7" || opcion === "ESC" || opcion === "esc") {
        console.log("🛒 Finalizando proceso de Compra...");

    } else {
        console.log("⚠️ Opcion no Valida ingresada: " + opcion);
        alert("⚠️ Opcion incorrecta. Por favor ingrese un numero del 1 al 6.");

    }

}

// RESULTADO FINAL

if (cantidadJuegos > 0) {
    let descuento = 0;

    // Condicional para el que aplicaremos Descuento como combo 
    if (cantidadJuegos >= 3) {
        //Invocacion a la funcion 
        descuento = calcularMontoDescuento(totalCompra, 15);
        totalCompra -= descuento;
        console.log("¡Promocion aplicada! 15% de Descuento: -$" + descuento);
    }

    //Invocacion a la funcion de salida 
    mostrarResumenFinal(cantidadJuegos, descuento, totalCompra);

} else {
    console.log("👋 Saliste del simulador sin comprar ningún juego.");
    alert("👋 No agregaste juegos al carrito.");
}

