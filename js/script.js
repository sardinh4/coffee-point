let navbar = document.querySelector('.navbar');
let cartItem = document.querySelector('.card-items-container');
let searchForm = document.querySelector('.search-form');

document.querySelector('#menu-btn').onclick = () =>{
    cartItem.classList.remove('active')
    searchForm.classList.remove('active')
    navbar.classList.toggle('active')
}

document.querySelector('#search-btn').onclick = () =>{
    cartItem.classList.remove('active')
    navbar.classList.remove('active')
    searchForm.classList.toggle('active')
}

document.querySelector('#cart-btn').onclick = () =>{
    navbar.classList.remove('active')
    searchForm.classList.remove('active')
    cartItem.classList.toggle('active') 
}

window.onscroll = () =>{
    navbar.classList.remove('active')
    searchForm.classList.remove('active')
    cartItem.classList.remove('active')
}

