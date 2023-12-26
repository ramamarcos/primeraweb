function primera() {
    var barra = document.getElementById("barra")

    if(barra.style.display === 'block' || barra.style.display === '') {
        barra.style.display = 'none'
    } else {
        barra.style.display = 'block'
    }
}

function interaccionar() {
    var imag = document.getElementById("img")
    
    var src = imag.getAttribute("src")

    if (src === 'off.gif') {
        imag.setAttribute("src", 'on.gif')
    } else {
        imag.setAttribute("src", 'off.gif')
    }
}

function alerta() {
    window.alert("Este es un mensaje de alerta.")
}

function imprimir() {
    window.print()
}
