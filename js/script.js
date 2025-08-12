function cambiarTexto(){
    document.getElementById('parrafo').textContent = "Texto cambiado";
}

function cambiarColorFondo(){
    document.body.style.backgroundColor = "#333333";
    document.body.style.color = "white";
}

function mostrarOcultar(){
    const elemento = document.getElementById('mensajeAOcultar');
    elemento.style.display = elemento.style.display === "none" ? "block" : "none";
}

let tamañoTexto = 16;

function aumentarTamañoTexto(){
    tamañoTexto += 2;
    document.getElementById('textoTamaño').style.fontSize = tamañoTexto + "px"; 
}

function disminuirTamañoTexto(){
    tamañoTexto -= 2;
    document.getElementById('textoTamaño').style.fontSize = tamañoTexto + "px";
}

function validarCampo(){
    const textoCampo = document.getElementById('validarCampo').value;
    let mensaje = textoCampo.trim() === "" ? "Campo vacío" : "Hola, " + textoCampo + "!";
    
    document.getElementById('resultado').textContent = mensaje;
    vaciarCampo();
}

function vaciarCampo(){
    document.getElementById('validarCampo').value = "";
}

function cambiarImagen(){
    let imagen = document.getElementById('imagen');

    imagen.src = imagen.src.includes("ff043987-239b-4661-bdb1-7f4ca6092c48") ? "img/pngwing.com (2).png" : "img/ff043987-239b-4661-bdb1-7f4ca6092c48.png"
}