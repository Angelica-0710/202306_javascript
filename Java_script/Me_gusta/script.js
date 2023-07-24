

var likes = [
    document.querySelector("#like1"),

    document.querySelector("#like2"),

    document.querySelector("#like3")
]

function like(indice) {
    // Obtener el elemento HTML del "span" con el índice que recibimos.
    var valor = likes[indice];
    // Obtener el contenido del elemento HTML "span" y lo convertimos a un número entero.
    valor = parseInt(valor.innerText);
    // Aumentar el valor en 1
    valor++;
    // Actualizamos el contenido del elemento HTML "span"
    likes[indice].innerText = valor;
}