// Evento para cambiar el color del navbar cuando el mosue esta sobre el elemento (incluido icono y texto)
Array.from(document.querySelector('.nav').children).map(elemento => {
    elemento.addEventListener('mouseover', () => {
        elemento.children[0].style.color = "#ffb20a";
        elemento.children[0].style.fontSize = "1.5rem";
        elemento.children[0].style.cursor = "pointer";
        elemento.children[1].style.color = "#ffb20a";
        elemento.children[1].style.fontSize = "1rem";
    })
    elemento.addEventListener('mouseout', () => {
        elemento.children[0].style.color = "white";
        elemento.children[0].style.fontSize = "1rem";
        elemento.children[1].style.color = "white";
        elemento.children[1].style.fontSize = "1rem";
    })
})