class Juego {
  constructor(pregunta, respuestaCorrecta, opcion1, opcion2) {
    this.pregunta = pregunta;
    this.respuesta = respuestaCorrecta;
    this.opcion1 = opcion1;
    this.opcion2 = opcion2;
  }
}

// Variables.
let contadorVidas = 5;
let contadorArray = 0;
let contadorAciertos = 0;
let contadorFallos = 0;
let respuestaUsuario = "";
let juegoDisponible = true;

// Array de Preguntas y Respuestas con 3 Opciones.
let preguntasRespuestas = [
  {
    pregunta: "¿Cuál era el sistema económico y social dominante en la Edad Media?",
    respuestaCorrecta: "Feudalismo",
    opcion1: "Mercantilismo",
    opcion2: "Capitalismo",
  },
  {
    pregunta: "¿Cómo se llamaba el arma larga usada por los caballeros medievales?",
    respuestaCorrecta: "Lanza",
    opcion1: "Espada corta",
    opcion2: "Ballesta",
  },
  {
    pregunta: "¿Quién escribió 'El Señor de los Anillos'?",
    respuestaCorrecta: "J.R.R. Tolkien",
    opcion1: "C.S. Lewis",
    opcion2: "George R.R. Martin",
  },
  {
    pregunta: "¿En qué siglo ocurrió la Primera Cruzada?",
    respuestaCorrecta: "Siglo XI",
    opcion1: "Siglo XIII",
    opcion2: "Siglo IX",
  },
  {
    pregunta: "¿Cuál era el nombre de la espada legendaria del Rey Arturo?",
    respuestaCorrecta: "Excalibur",
    opcion1: "Andúril",
    opcion2: "Durandal",
  },
  {
    pregunta: "¿Quién era el señor de Mordor en 'El Señor de los Anillos'?",
    respuestaCorrecta: "Sauron",
    opcion1: "Saruman",
    opcion2: "Melkor",
  },
  {
    pregunta: "¿Cómo se llamaba el sistema de castillos y tierras otorgadas por los reyes a los nobles?",
    respuestaCorrecta: "Feudo",
    opcion1: "Mano abierta",
    opcion2: "Tierras reales",
  },
  {
    pregunta: "¿Qué criatura mitológica es mitad águila y mitad león?",
    respuestaCorrecta: "Grifo",
    opcion1: "Mantícora",
    opcion2: "Quimera",
  },
  {
    pregunta: "¿Qué enfermedad devastó Europa en el siglo XIV?",
    respuestaCorrecta: "Peste Negra",
    opcion1: "Viruela",
    opcion2: "Tifus",
  },
  {
    pregunta: "¿Cuál es el nombre del mago que acompaña al Rey Arturo?",
    respuestaCorrecta: "Merlín",
    opcion1: "Gandalf",
    opcion2: "Radagast",
  },
  {
    pregunta: "¿Qué material se decía que protegía a los caballeros mejor que el acero común?",
    respuestaCorrecta: "Acero de Damasco",
    opcion1: "Hierro de los enanos",
    opcion2: "Bronce reforzado",
  },
  {
    pregunta: "¿Quién es el protagonista de 'Canción de Hielo y Fuego'?",
    respuestaCorrecta: "Jon Snow",
    opcion1: "Tyrion Lannister",
    opcion2: "Daenerys Targaryen",
  },
  {
    pregunta: "¿Qué pueblo escandinavo era conocido por sus incursiones en Europa durante la Edad Media?",
    respuestaCorrecta: "Vikingos",
    opcion1: "Godos",
    opcion2: "Hunos",
  },
  {
    pregunta: "¿Qué criatura legendaria es símbolo de la inmortalidad y resurge de sus cenizas?",
    respuestaCorrecta: "Fénix",
    opcion1: "Dragón",
    opcion2: "Basilisco",
  },
  {
    pregunta: "¿Qué rey inglés fue conocido como 'Corazón de León'?",
    respuestaCorrecta: "Ricardo I",
    opcion1: "Eduardo III",
    opcion2: "Enrique V",
  },
  {
    pregunta: "¿Cómo se llamaba la espada de Frodo en 'El Señor de los Anillos'?",
    respuestaCorrecta: "Dardo",
    opcion1: "Glamdring",
    opcion2: "Andúril",
  },
  {
    pregunta: "¿Qué famosa batalla medieval tuvo lugar en 1066?",
    respuestaCorrecta: "Batalla de Hastings",
    opcion1: "Batalla de Agincourt",
    opcion2: "Batalla de Poitiers",
  },
  {
    pregunta: "¿Qué criatura mitológica tenía cabeza de toro y cuerpo humano?",
    respuestaCorrecta: "Minotauro",
    opcion1: "Centauro",
    opcion2: "Cíclope",
  },
  {
    pregunta: "¿Qué rey francés lideró la Séptima Cruzada?",
    respuestaCorrecta: "Luis IX",
    opcion1: "Felipe II",
    opcion2: "Carlos Magno",
  },
  {
    pregunta: "¿Qué arma de asedio medieval se utilizaba para lanzar grandes proyectiles?",
    respuestaCorrecta: "Trabuco",
    opcion1: "Catapulta",
    opcion2: "Ballesta gigante",
  }
];

// Función para mostrar preguntas.

function mostrarPregunta() {
  if (!juegoDisponible) return;

  if (contadorArray === preguntasRespuestas.length) {
    consultarContador();
    return;
  }

  let preguntaActual = preguntasRespuestas[contadorArray];

  let respuestaCorrecta = preguntaActual.respuestaCorrecta
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  let respuestaUsuario = "";

  // Repetir hasta que la respuesta sea correcta
  if (respuestaUsuario.toLowerCase() !== respuestaCorrecta) {
    respuestaUsuario = prompt(
      "Pregunta: " +
        preguntaActual.pregunta +
        "\nA) " +
        preguntaActual.opcion1 +
        "\nB) " +
        preguntaActual.respuestaCorrecta +
        "\nC) " +
        preguntaActual.opcion2
    );

    if (
      respuestaUsuario.toLowerCase() === respuestaCorrecta
    ) {
      alert("¡Muy bien!");
      aumentarVida();
      contadorArray++;
    } else {
      alert("¡Respuesta Incorrecta! Inténtalo de nuevo...");
      quitarVida();
      if (contadorVidas === 0) return;
    }
  }

  // Si el jugador responde todas las preguntas, mostrar el mensaje final

  if (contadorArray === preguntasRespuestas.length) {
    consultarContador();
  }
}


// Función para comprobar respuestas.
function comprobarRespuesta() {
  if (
    respuestaUsuario.toLowerCase() ===
    preguntasRespuestas[contadorArray].respuestaCorrecta
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
  ) {
    alert("¡Muy bien!");
    aumentarVida();
  } else {
    alert("¡Respuesta Incorrecta! Prueba de nuevo...");
    quitarVida();
  }
  contadorArray++;

  // Si se han respondido todas las preguntas, mostrar mensaje final.
  if (contadorArray === preguntasRespuestas.length) {
    consultarContador();
  }
}

// Función para aumentar vidas.
const contenedorVidas = document.querySelector(".vidas");

function aumentarVida() {
  let img = document.createElement("img");
  img.src = "img/mana.png";
  img.alt = "mana";
  img.width = 150;
  contadorVidas++;
  contadorAciertos++;
  contenedorVidas.appendChild(img);
}

// Función para quitar vidas.
function quitarVida() {
  if (contenedorVidas.children.length > 0) {
    contenedorVidas.removeChild(contenedorVidas.lastChild);
  }
  contadorVidas--;
  contadorFallos++;

  if (contadorVidas === 0) {
    alert(
      "¡Game Over! Has perdido todas tus vidas. El juego se reiniciará en cuanto presiones 'ACEPTAR'."
    );
    location.reload();
  }
}

// Función para mostrar el mensaje cuando se terminen todas las preguntas.
function consultarContador() {
  juegoDisponible = false;

  const boton = document.getElementById("boton-preguntas");
  const parrafo = document.createElement("p");
  parrafo.textContent =
    "¡Has respondido a todas las preguntas! \nNº Aciertos: " +
    contadorAciertos +
    "\nNº Fallos: " +
    contadorFallos;

  parrafo.style.color = "#c5a4c5";
  parrafo.style.marginBottom = "20px";
  const contenedor = boton.parentNode;
  contenedor.insertBefore(parrafo, boton);
}