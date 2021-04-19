const burgerButton = document.querySelector('.menu-burger');

burgerButton.addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
});