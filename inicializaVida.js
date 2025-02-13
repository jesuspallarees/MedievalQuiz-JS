/* Si creo las imágenes en html, salen distintas a si las creo todas con js, a parte que el wrap no funciona correctamente.
Por tanto, inicializo 5 objetos img y los añado a vidas. */

const vidas = document.querySelector(".vidas");

function inicializarVidas() {
  for (let i = 0; i < 5; i++) {
    let img = document.createElement("img");
    img.src = "img/mana.png";
    img.alt = "mana";
    img.width = 150;
    vidas.appendChild(img);
  }
}

inicializarVidas();
