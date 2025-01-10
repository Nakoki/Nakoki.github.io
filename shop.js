let elements;

window.onload = function(){
    elements = document.querySelectorAll(".grid-item img");
    for (let i=0; i<elements.length; i++) {
        elements[i].addEventListener("click", (ev) => mostrarPreu(ev.target));
    }
}

function mostrarPreu(element){
    let preu = element.getAttribute("preu");
    document.getElementById("price").innerText = "Current Price: " + preu;
}