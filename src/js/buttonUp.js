let mybutton = document.getElementById("btn-goUp");

// Cuando en la ventana, se hace scrolling, llama a la cunción "scrollFunction"
window.onscroll = function () {
    scrollFunction();
};

//Función, que si el el usuario ha hecho scroll 20 pixeles o más, el estilo cambia a block, y si no, está en none
function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// Event listener, si se hace click en el botón, llama a una funcion
mybutton.addEventListener("click", backToTop);

// Función a la que llama el event listener si se hace click en el botón, que hace un scroll top hasta 0 pixeles
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}