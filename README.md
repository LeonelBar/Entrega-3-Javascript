# Entrega-3-Javascript
Pre-Entrega 3: Funciones e Integración de Lógica
# Super-Arcade Store - Simulador de Compras

Simulador interactivo de compras de videojuegos retro desarrollado en JavaScript para practicar funciones, condicionales y bucles.

## ¿Cómo funciona?

1. El usuario abre la página en el navegador.
2. Un menú desplegable (`prompt`) permite elegir juegos de PS2.
3. Cada selección agrega el juego al carrito y acumula el total.
4. Si se compran 3 o más juegos, se aplica un 15% de descuento.
5. Al finalizar, se muestra el resumen de la compra por pantalla y consola.

## Funciones implementadas

- `agregarJuegoAlCarrito(nombre, precio)`: Procesa el juego elegido y retorna su valor.
- `calcularMontoDescuento(subtotal, porcentaje)`: Función flecha que calcula el beneficio.
- `mostrarResumenFinal(totalItems, descuento, montoFinal)`: Muestra la boleta final.

## Requisitos y Ejecución

Solo se necesita un navegador web.

1. Clonar o descargar el repositorio.
2. Abrir el archivo `index.html` en cualquier navegador.
3. Abrir la Consola de Desarrollador (F12) para ver las salidas del programa.
