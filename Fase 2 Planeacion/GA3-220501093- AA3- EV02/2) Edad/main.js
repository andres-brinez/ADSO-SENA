function calcularEdades() {
    var edades = [];
    var menores = 0;
    var mayores = 0;
    var adultosMayores = 0;
    var edadMinima=Infinity;
    var edadMaxima= -Infinity;
    var sumaEdades = 0;

    // Ciclo para llenar el vector de edades ingresadas por el usuario
    for (var i = 0; i < 10; i++) {

        var edad = parseInt(prompt("Ingrese la edad de la persona " + (i + 1) + ":")); // Se pide la edad de la persona

        // Validación de la edad ingresada
        while (isNaN(edad) || edad < 1 || edad > 120) {
            // Si la edad no es un número o es menor a 1 o mayor a 120, se pide de nuevo
            alert("Edad no válida. Ingrese un valor entre 1 y 120.");
            edad = parseInt(prompt("Ingrese la edad de la persona " + (i + 1) + ":"));
        }

        // Se agrega la edad al vector
        edades.push(edad);


        if (edad < 18) {
            // guarda la cantidad de menores de edad
            menores++;

        } else if (edad >= 18 && edad < 60) {
            // guarda la cantidad de personas mayores de edad
            mayores++;

        } else if (edad >= 60) {
            // guarda la cantidad de adultos mayores
            adultosMayores++;
        
        }

        if (edad < edadMinima) {
            // guarda la edad más baja
            edadMinima = edad;
        }

        if (edad > edadMaxima) {
            // guarda la edad más alta
            edadMaxima = edad;
        }

        sumaEdades += edad; // suma las edades para calcular el promedio
    }

    var promedioEdades = sumaEdades / edades.length; // calcula el promedio de las edades


    // Se muestran los resultados
    alert("Cantidad de personas menores de edad: " + menores);
    alert("Cantidad de personas mayores de edad: " + mayores);
    alert("Cantidad de adultos mayores: " + adultosMayores);
    alert("Edad más baja: " + edadMinima);
    alert("Edad más alta: " + edadMaxima);
    alert("Promedio de edades: " + promedioEdades.toFixed(2));
}

calcularEdades();
