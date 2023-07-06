// Definir un objeto "Persona" para almacenar los datos de cada persona encuestada
function Persona(nombre, cedula, fechaNacimiento, correoElectronico, ciudadResidencia, ciudadOrigen) {
    this.nombre = nombre;
    this.cedula = cedula;
    this.fechaNacimiento = fechaNacimiento;
    this.correoElectronico = correoElectronico;
    this.ciudadResidencia = ciudadResidencia;
    this.ciudadOrigen = ciudadOrigen;
    this.cancionesFavoritas = [];
}

// Definir un vector para almacenar las personas encuestadas
var encuestados = [];

// Función para agregar una persona con sus datos y canciones favoritas
function agregarPersona() {
    var nombre = prompt("Ingrese el nombre de la persona:");
    var cedula = prompt("Ingrese el número de identificación (cedula) de la persona:");
    var fechaNacimiento = prompt("Ingrese la fecha de nacimiento de la persona:");
    var correoElectronico = prompt("Ingrese el correo electrónico de la persona:");
    var ciudadResidencia = prompt("Ingrese la ciudad de residencia de la persona:");
    var ciudadOrigen = prompt("Ingrese la ciudad de origen de la persona:");

    var persona = new Persona(nombre, cedula, fechaNacimiento, correoElectronico, ciudadResidencia, ciudadOrigen);

    for (var i = 0; i < 3; i++) {
        var artista = prompt("Ingrese el nombre del artista de la canción favorita " + (i + 1) + ":");
        var titulo = prompt("Ingrese el título de la canción favorita " + (i + 1) + ":");

        persona.cancionesFavoritas.push({ artista: artista, titulo: titulo });
    }

    encuestados.push(persona);

    alert("Persona agregada exitosamente.");

    mostrarMenu(); // Mostrar el menú nuevamente después de agregar una persona
}

// Función para mostrar la información personal de una persona particular
function mostrarInformacionPersona() {
    var posicion = parseInt(prompt("Ingrese la posición de la persona en el vector (índice base 0):"));

    if (posicion >= 0 && posicion < encuestados.length) {
        var persona = encuestados[posicion];

        alert("Información personal de la persona en la posición " + posicion + ":");
        alert("Nombre: " + persona.nombre);
        alert("Número de identificación (cedula): " + persona.cedula);
        alert("Fecha de nacimiento: " + persona.fechaNacimiento);
        alert("Correo electrónico: " + persona.correoElectronico);
        alert("Ciudad de residencia: " + persona.ciudadResidencia);
        alert("Ciudad de origen: " + persona.ciudadOrigen);
        alert("Canciones favoritas:");

        for (var i = 0; i < persona.cancionesFavoritas.length; i++) {
            var cancion = persona.cancionesFavoritas[i];
            alert("  " + (i + 1) + ". Artista: " + cancion.artista + ", Título: " + cancion.titulo);
        }
    } else {
        alert("La posición ingresada no es válida.");
    }

    mostrarMenu(); // Mostrar el menú nuevamente después de mostrar la información personal
}

// Función para mostrar el menú y ejecutar las opciones seleccionadas
function mostrarMenu() {
    var opcion = prompt("Menú:\n\na. Agregar una persona\nb. Mostrar información personal de una persona\n\nIngrese la opción deseada (a, b):");

    switch (opcion) {
        case "a":
            agregarPersona();
            break;
        case "b":
            mostrarInformacionPersona();
            break;
        default:
            alert("Opción no válida.");
            break;
    }
}

mostrarMenu(); // Mostrar el menú por primera vez

  //
