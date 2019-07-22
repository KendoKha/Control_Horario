// Función botón inicio
function iniciarApp() {

    window.location.href = "/html/entry.html";
}

// Función que nos cambia texto de elementos ( que contengas texto, evidentemente)
function changeText(node, newText) {

    return node.textContent = newText;
}

window.addEventListener('click', function(event) {
    const img = document.querySelector('img');
    const buttonValue = event.target.textContent;
    const button = this.document.querySelector('button');
    const h1 = this.document.querySelector('h1');

    if (buttonValue === 'FICHAR') {
        img.src = "../img/pause-round-button.png";

        changeText(h1, "Working ...")
            //return button.textContent = "PAUSE";
        return changeText(button, "PAUSE");
    }

    img.src = "../img/play-button.png";
    changeText(h1, "Pausing ...")
    changeText(button, "PLAY");
});