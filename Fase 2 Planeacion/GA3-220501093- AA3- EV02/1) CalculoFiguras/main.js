// Menu de opciones para calcular el area o perimetro de una figura geometrica

var opcion = parseInt(prompt("Seleccione una opción:\n1. Calcular área\n2. Calcular perímetro"));

if (opcion === 1) {
    var figura = prompt("Ingrese la figura (triangulo, rectangulo, cuadrado, circulo):");
    calcularArea(figura);
} else if (opcion === 2) {
    var figura = prompt("Ingrese la figura (triangulo, rectangulo, cuadrado, circulo):");
    calcularPerimetro(figura);
} else {
    console.log("Opción no válida.");
}

let continuar = prompt("¿Desea Empezar de nuevo? (s/n)");

if (continuar === "s") {
    window.location.reload();
}




// Funciones para hacer el calculo

function calcularArea(figura) {
    var area;

    if (figura === "triangulo") {
        var base = parseFloat(prompt("Ingrese la base del triángulo:"));
        var altura = parseFloat(prompt("Ingrese la altura del triángulo:"));
        area = (base * altura) / 2;
    } else if (figura === "rectangulo") {
        var largo = parseFloat(prompt("Ingrese el largo del rectángulo:"));
        var ancho = parseFloat(prompt("Ingrese el ancho del rectángulo:"));
        area = largo * ancho;
    } else if (figura === "cuadrado") {
        var lado = parseFloat(prompt("Ingrese el lado del cuadrado:"));
        area = lado * lado;
    } else if (figura === "circulo") {
        var radio = parseFloat(prompt("Ingrese el radio del círculo:"));
        area = Math.PI * radio * radio;
    }

    if (area) {
        alert("El área de la figura seleccionada es: " + area.toFixed(2));
    } else {
        alert("Figura no válida.");
    }
}

function calcularPerimetro(figura) {
    var perimetro;

    if (figura === "triangulo") {
        var lado1 = parseFloat(prompt("Ingrese el primer lado del triángulo:"));
        var lado2 = parseFloat(prompt("Ingrese el segundo lado del triángulo:"));
        var lado3 = parseFloat(prompt("Ingrese el tercer lado del triángulo:"));
        perimetro = lado1 + lado2 + lado3;
    } else if (figura === "rectangulo") {
        var largo = parseFloat(prompt("Ingrese el largo del rectángulo:"));
        var ancho = parseFloat(prompt("Ingrese el ancho del rectángulo:"));
        perimetro = 2 * (largo + ancho);
    } else if (figura === "cuadrado") {
        var lado = parseFloat(prompt("Ingrese el lado del cuadrado:"));
        perimetro = 4 * lado;
    } else if (figura === "circulo") {
        var radio = parseFloat(prompt("Ingrese el radio del círculo:"));
        perimetro = 2 * Math.PI * radio;
    }

    if (perimetro) {
        alert("El perímetro de la figura seleccionada es: " + perimetro.toFixed(2));
    } else {
        alert("Figura no válida.");
    }
}
