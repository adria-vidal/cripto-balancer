<<<<<<< HEAD
let criptomonedas = [];
let registros = [];
var modal = document.getElementById('myModal'); // Asegúrate de que este ID coincida con tu modal
var span = document.getElementsByClassName("close")[0]; // El botón de cerrar el modal

function agregarCripto() {
    const criptoInput = document.getElementById('cryptoName');
    const criptoSeleccionada = document.getElementById('criptoSeleccionada');
    const criptoNombre = criptoInput.value.trim().toUpperCase();

    if (criptoNombre && !criptomonedas.includes(criptoNombre)) {
        criptomonedas.push(criptoNombre);
        const opcion = document.createElement('option');
        opcion.value = criptoNombre;
        opcion.innerText = criptoNombre;
        criptoSeleccionada.appendChild(opcion);
    }
    criptoInput.value = ''; // Limpiar el campo de texto después de agregar
}

function actualizarTotalUSDT(cantidad, esCompra) {
    const totalUSDT = document.getElementById('totalUSDT');
    let totalActual = parseFloat(totalUSDT.innerText);
    totalActual += esCompra ? -cantidad : cantidad;
    totalUSDT.innerText = totalActual.toFixed(2).toString();

    // Cambiar el color según sea positivo o negativo
    if (totalActual < 0) {
        totalUSDT.style.color = '#f44336'; // Rojo para negativos
    } else {
        totalUSDT.style.color = '#4CAF50'; // Verde para positivos
    }
}


function actualizarHistorial() {
    const historialDiv = document.getElementById('historial');
    historialDiv.innerHTML = ''; // Limpiar el historial actual para actualizarlo

    // Mostrar los dos últimos registros
    const ultimosRegistros = registros.slice(-2);
    ultimosRegistros.forEach(reg => {
        const regElement = document.createElement('div');
        regElement.innerText = `${reg.fecha} - ${reg.operacion}: ${reg.cripto} por ${reg.cantidad} USDT`;

        // Aplicar color de fondo basado en la operación
        if (reg.operacion === 'Compra') {
            regElement.style.backgroundColor = '#f44336'; // Rojo para compra
            regElement.style.color = 'white'; // Texto blanco para contraste
        } else {
            regElement.style.backgroundColor = '#4CAF50'; // Verde para venta
            regElement.style.color = 'white'; // Texto blanco para contraste
        }

        regElement.style.padding = '10px';
        regElement.style.margin = '5px 0';
        regElement.style.borderRadius = '5px';

        historialDiv.appendChild(regElement);
    });

    if (registros.length > 2) {
        const verTodoBtn = document.createElement('button');
        verTodoBtn.id = 'historialBtn'; // Añadir id al botón
        verTodoBtn.innerText = 'Ver todo el historial';
        // Modificar para abrir el modal y mostrar el historial completo
        verTodoBtn.onclick = function() {
            var historialCompletoDiv = document.getElementById('historialCompleto');
            historialCompletoDiv.innerHTML = ''; // Limpiar para actualizar

            registros.forEach(reg => {
                const regElement = document.createElement('div');
                regElement.innerText = `${reg.fecha} - ${reg.operacion}: ${reg.cripto} por ${reg.cantidad} USDT`;
                if (reg.operacion === 'Compra') {
                    regElement.style.backgroundColor = '#f44336';
                    regElement.style.color = 'white';
                } else {
                    regElement.style.backgroundColor = '#4CAF50';
                    regElement.style.color = 'white';
                }
                regElement.style.padding = '10px';
                regElement.style.margin = '5px 0';
                regElement.style.borderRadius = '5px';
                historialCompletoDiv.appendChild(regElement);
            });

            modal.style.display = "block";
        };
        historialDiv.appendChild(verTodoBtn);
    }
}

// Evento para cerrar el modal cuando el usuario hace clic en el botón de cerrar (span)
span.onclick = function() {
    modal.style.display = "none";
}

// Evento para cerrar el modal cuando el usuario hace clic fuera de él
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function operar(esCompra) {
    const criptoSeleccionada = document.getElementById('criptoSeleccionada').value;
    const cantidadUSDT = parseFloat(document.getElementById('cantidadUSDT').value);

    if (!criptoSeleccionada || isNaN(cantidadUSDT) || cantidadUSDT <= 0) {
        alert('Selecciona una criptomoneda y una cantidad válida de USDT.');
        return;
    }

    const operacion = esCompra ? 'Compra' : 'Venta';
    const fecha = new Date().toLocaleString();

    // Simulación: Añade el registro de la operación sin precio real de la criptomoneda
    registros.push({ fecha, operacion, cripto: criptoSeleccionada, cantidad: cantidadUSDT });

    actualizarTotalUSDT(cantidadUSDT, esCompra);
    actualizarHistorial();

    // Limpiar campo de cantidad
    document.getElementById('cantidadUSDT').value = '';
}

function comprar() {
    operar(true);
}

function vender() {
    operar(false);
}



// Para este ejemplo, omitimos la función que realiza la llamada a la API de Binance para obtener los precios reales.
=======
let criptomonedas = [];
let registros = [];
var modal = document.getElementById('myModal'); // Asegúrate de que este ID coincida con tu modal
var span = document.getElementsByClassName("close")[0]; // El botón de cerrar el modal

function agregarCripto() {
    const criptoInput = document.getElementById('cryptoName');
    const criptoSeleccionada = document.getElementById('criptoSeleccionada');
    const criptoNombre = criptoInput.value.trim().toUpperCase();

    if (criptoNombre && !criptomonedas.includes(criptoNombre)) {
        criptomonedas.push(criptoNombre);
        const opcion = document.createElement('option');
        opcion.value = criptoNombre;
        opcion.innerText = criptoNombre;
        criptoSeleccionada.appendChild(opcion);
    }
    criptoInput.value = ''; // Limpiar el campo de texto después de agregar
}

function actualizarTotalUSDT(cantidad, esCompra) {
    const totalUSDT = document.getElementById('totalUSDT');
    let totalActual = parseFloat(totalUSDT.innerText);
    totalActual += esCompra ? -cantidad : cantidad;
    totalUSDT.innerText = totalActual.toFixed(2).toString();

    // Cambiar el color según sea positivo o negativo
    if (totalActual < 0) {
        totalUSDT.style.color = '#f44336'; // Rojo para negativos
    } else {
        totalUSDT.style.color = '#4CAF50'; // Verde para positivos
    }
}


function actualizarHistorial() {
    const historialDiv = document.getElementById('historial');
    historialDiv.innerHTML = ''; // Limpiar el historial actual para actualizarlo

    // Mostrar los dos últimos registros
    const ultimosRegistros = registros.slice(-2);
    ultimosRegistros.forEach(reg => {
        const regElement = document.createElement('div');
        regElement.innerText = `${reg.fecha} - ${reg.operacion}: ${reg.cripto} por ${reg.cantidad} USDT`;

        // Aplicar color de fondo basado en la operación
        if (reg.operacion === 'Compra') {
            regElement.style.backgroundColor = '#f44336'; // Rojo para compra
            regElement.style.color = 'white'; // Texto blanco para contraste
        } else {
            regElement.style.backgroundColor = '#4CAF50'; // Verde para venta
            regElement.style.color = 'white'; // Texto blanco para contraste
        }

        regElement.style.padding = '10px';
        regElement.style.margin = '5px 0';
        regElement.style.borderRadius = '5px';

        historialDiv.appendChild(regElement);
    });

    if (registros.length > 2) {
        const verTodoBtn = document.createElement('button');
        verTodoBtn.id = 'historialBtn'; // Añadir id al botón
        verTodoBtn.innerText = 'Ver todo el historial';
        // Modificar para abrir el modal y mostrar el historial completo
        verTodoBtn.onclick = function() {
            var historialCompletoDiv = document.getElementById('historialCompleto');
            historialCompletoDiv.innerHTML = ''; // Limpiar para actualizar

            registros.forEach(reg => {
                const regElement = document.createElement('div');
                regElement.innerText = `${reg.fecha} - ${reg.operacion}: ${reg.cripto} por ${reg.cantidad} USDT`;
                if (reg.operacion === 'Compra') {
                    regElement.style.backgroundColor = '#f44336';
                    regElement.style.color = 'white';
                } else {
                    regElement.style.backgroundColor = '#4CAF50';
                    regElement.style.color = 'white';
                }
                regElement.style.padding = '10px';
                regElement.style.margin = '5px 0';
                regElement.style.borderRadius = '5px';
                historialCompletoDiv.appendChild(regElement);
            });

            modal.style.display = "block";
        };
        historialDiv.appendChild(verTodoBtn);
    }
}

// Evento para cerrar el modal cuando el usuario hace clic en el botón de cerrar (span)
span.onclick = function() {
    modal.style.display = "none";
}

// Evento para cerrar el modal cuando el usuario hace clic fuera de él
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function operar(esCompra) {
    const criptoSeleccionada = document.getElementById('criptoSeleccionada').value;
    const cantidadUSDT = parseFloat(document.getElementById('cantidadUSDT').value);

    if (!criptoSeleccionada || isNaN(cantidadUSDT) || cantidadUSDT <= 0) {
        alert('Selecciona una criptomoneda y una cantidad válida de USDT.');
        return;
    }

    const operacion = esCompra ? 'Compra' : 'Venta';
    const fecha = new Date().toLocaleString();

    // Simulación: Añade el registro de la operación sin precio real de la criptomoneda
    registros.push({ fecha, operacion, cripto: criptoSeleccionada, cantidad: cantidadUSDT });

    actualizarTotalUSDT(cantidadUSDT, esCompra);
    actualizarHistorial();

    // Limpiar campo de cantidad
    document.getElementById('cantidadUSDT').value = '';
}

function comprar() {
    operar(true);
}

function vender() {
    operar(false);
}



// Para este ejemplo, omitimos la función que realiza la llamada a la API de Binance para obtener los precios reales.
>>>>>>> 25baa302bd18528edbe54baef9467e48b6e7abe6
