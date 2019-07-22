// Asociamos nodos con sus id en ámbito global
const btnStop = this.document.getElementById('btnStop'); // Guarda ref al botón Stop

// Función botón inicio
function iniciarApp() {

    window.location.href = "/html/entry.html";

}

function inHabilitaBtnStop() {

    btnStop.style.visibility = 'hidden';
    btnStop.style.display = 'none';

}

// Función que nos cambia texto de elementos ( que contengas texto, evidentemente)
function changeText(node, newText) {

    return node.textContent = newText;
}

// Agregamos un controlador de eventos al objeto ventana
window.addEventListener('click', function(event) {

    const img = document.querySelector('img'); // Guarda referencia al nodo image usando querySelector
    const buttonValue = event.target.textContent; // Guarda el valor del texto del nodo button
    const button = this.document.querySelector('button'); // Guarda referencia al priemer nodo button 


    const h1 = this.document.querySelector('h1'); // Guarda referencia al nodo h1

    if (buttonValue === 'FICHAR') { // Si el texto del nodo button conincide con la condición

        inHabilitaBtnStop();

        img.src = "../img/pause-round-button.png"; // ... cambia imagen 

        changeText(h1, "Working ...") // ... y cambia texto del h1
            //return button.textContent = "PAUSE";
        return changeText(button, "PAUSE"); // ... además cambia texto del botón
    }

    img.src = "../img/play-button.png";
    changeText(h1, "Pausing ...")
    changeText(button, "PLAY");
});