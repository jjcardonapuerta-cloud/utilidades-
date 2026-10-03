// ================================
// SUITE DE UTILIDADES - JAVASCRIPT
// Proyecto académico
// ================================

function mostrarResultado(id, texto, error = false) {
    const caja = document.getElementById(id);

    caja.classList.remove("vacio", "error");

    if (error) {
        caja.classList.add("error");
    }

    caja.innerHTML = texto;
}

function dinero(valor) {
    return valor.toLocaleString("es-CO", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

// ========================================
// 1. CALCULADORA DE PROPINA
// Algoritmo secuencial + prompt
// ========================================

function calcularPropina() {
    const cuenta = parseFloat(prompt("Ingrese el monto de la cuenta:"));
    const porcentaje = parseFloat(prompt("Ingrese el porcentaje de propina:"));

    if (isNaN(cuenta) || isNaN(porcentaje) || cuenta < 0 || porcentaje < 0) {
        mostrarResultado(
            "resultadoPropina",
            "Ingresa valores numéricos válidos.",
            true
        );
        return;
    }

    const propina = cuenta * (porcentaje / 100);
    const total = cuenta + propina;

    mostrarResultado(
        "resultadoPropina",
        `<strong>Propina:</strong> $${dinero(propina)}<br>
         <strong>Total:</strong> $${dinero(total)}`
    );
}

// ========================================
// 2. CLASIFICADOR DE IMC
// Condicionales if / else if / else
// ========================================

function calcularIMC() {
    const peso = parseFloat(prompt("Ingrese su peso en kilogramos:"));
    const altura = parseFloat(prompt("Ingrese su altura en metros:"));

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        mostrarResultado(
            "resultadoIMC",
            "Ingresa un peso y una altura válidos.",
            true
        );
        return;
    }

    const imc = peso / (altura ** 2);
    let categoria;

    if (imc < 18.5) {
        categoria = "Bajo peso";
    } else if (imc < 25) {
        categoria = "Normal";
    } else if (imc < 30) {
        categoria = "Sobrepeso";
    } else {
        categoria = "Obesidad";
    }

    mostrarResultado(
        "resultadoIMC",
        `<strong>IMC:</strong> ${imc.toFixed(2)}<br>
         <strong>Categoría:</strong> ${categoria}`
    );
}

// ========================================
// 3. MENÚ DE UTILIDADES CON SWITCH
// ========================================

function ejecutarMenu() {
    const opcion = document.getElementById("menuOpcion").value;

    if (opcion === "") {
        mostrarResultado(
            "resultadoMenu",
            "Selecciona una opción del menú.",
            true
        );
        return;
    }

    switch (opcion) {

        // Opción 1: Celsius -> Fahrenheit
        case "1": {
            const celsius = parseFloat(prompt("Ingrese la temperatura en Celsius:"));

            if (isNaN(celsius)) {
                mostrarResultado(
                    "resultadoMenu",
                    "Ingresa una temperatura válida.",
                    true
                );
                return;
            }

            const fahrenheit = celsius * 9 / 5 + 32;

            mostrarResultado(
                "resultadoMenu",
                `<strong>${celsius.toFixed(2)} °C</strong> equivalen a
                 <strong>${fahrenheit.toFixed(2)} °F</strong>.`
            );
            break;
        }

        // Opción 2: Precio con IVA
        case "2": {
            const precio = parseFloat(prompt("Ingrese el precio sin IVA:"));
            const iva = parseFloat(prompt("Ingrese el porcentaje de IVA:"));

            if (isNaN(precio) || isNaN(iva) || precio < 0 || iva < 0) {
                mostrarResultado(
                    "resultadoMenu",
                    "Ingresa valores válidos.",
                    true
                );
                return;
            }

            const valorIVA = precio * (iva / 100);
            const precioFinal = precio + valorIVA;

            mostrarResultado(
                "resultadoMenu",
                `<strong>IVA:</strong> $${dinero(valorIVA)}<br>
                 <strong>Precio final:</strong> $${dinero(precioFinal)}`
            );
            break;
        }

        // Opción 3: Nota -> Letra
        case "3": {
            const nota = parseFloat(prompt("Ingrese una nota entre 0 y 100:"));

            if (isNaN(nota) || nota < 0 || nota > 100) {
                mostrarResultado(
                    "resultadoMenu",
                    "La nota debe estar entre 0 y 100.",
                    true
                );
                return;
            }

            let letra;

            if (nota >= 90) {
                letra = "A";
            } else if (nota >= 80) {
                letra = "B";
            } else if (nota >= 70) {
                letra = "C";
            } else if (nota >= 60) {
                letra = "D";
            } else {
                letra = "F";
            }

            mostrarResultado(
                "resultadoMenu",
                `<strong>Nota:</strong> ${nota}<br>
                 <strong>Calificación:</strong> ${letra}`
            );
            break;
        }

        default:
            mostrarResultado(
                "resultadoMenu",
                "Opción no válida.",
                true
            );
    }
}
