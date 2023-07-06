function ordenarVectores() {
    var vector1 = []; 
    var vector2 = []; 
    var resultado = []; 
    const tamano = 5; // Tamaño máximo de los vectores

    // Solicitar los números para los vectores 
    for (var i = 0; i < tamano; i++) {

        var num1 = parseInt(prompt("Ingrese un número ascendente para el vector 1 (número " + (i + 1) + "):"));
        var num2 = parseInt(prompt("Ingrese un número ascendente para el vector 2 (número " + (i + 1) + "):"));

        // Validación de los números ingresados para asegurarse de que estén en orden ascendente
        while (isNaN(num1) || isNaN(num2) || num1 > num2) {
            
            alert("Los números ingresados no son válidos o no están en orden ascendente.");
            
            // Solicitar los números nuevamente
            num1 = parseInt(prompt("Ingrese un número ascendente para el vector 1 (número " + (i + 1) + "):"));
            num2 = parseInt(prompt("Ingrese un número ascendente para el vector 2 (número " + (i + 1) + "):"));
        }

        // Agregar los números a los vectores
        vector1.push(num1);
        vector2.push(num2);

        // Almacenar los números en el vector resultado
        resultado.push(num1, num2);
    }

    // Ordenar el vector resultado de forma ascendente
    resultado.sort(function (a, b) {
        return a - b;
    });

    // Mostrar el resultado en la consola
    alert("La lista ordenada de la mezcla de los dos vectores es: " + resultado.join(" "));
}

ordenarVectores();