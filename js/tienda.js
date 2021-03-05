const añadirAlCarrito = document.querySelectorAll('.añadirCarrito'); 
añadirAlCarrito.forEach((añadirCarro) => {
    añadirCarro.addEventListener('click', añadirCarroClicked);
});

funtion añadirCarroClicked(event) {
    const button = event.target;
    button.closet('.card');
}