var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(e){
    document.querySelector(".container").classList.toggle("show-menu");
});