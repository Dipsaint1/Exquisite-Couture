// const mobileMenu = document.getElementById("menu-bar");
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
const footer = document.getElementById("footer");
const homeImage = document.querySelector(".image");
const scrollBtn = document.getElementById("onscroll-btn");
const images = [
    "./images/Suit 1.jpg",
    "./images/Suit 2.jpg",
    "./images/Suit 3.jpg",
    "./images/Suit 4.jpg",
    "./images/Suit 5.jpg",
    "./images/Suit 3.jpg",
];

document.getElementById("menu").addEventListener("click", () => {
    menu.classList.toggle("active");
    nav.classList.toggle("on");

    // setTimeout(() => {
    //     nav.classList.toggle("on");
    // }, 500);
});

function loadFooter(){
    footer.innerHTML = `
        <div class="footer-container">
            <p>Exquisite Couture
            <i class="fa fa-copyright"></i> - 2021 
            <i class="fa fa-trademark"></i> - All Rights Reserved
            </p>
        </div>
    `;
}

function loadImages(){
    
    // for(let i = 0; i < images.length; i++){
    //     setTimeout(() => {
    //         homeImage.innerHTML = `
    //             <img src="${images[i]}">
    //         `;
    //     }, 1000);
    // }

    // setInterval(() => {
    //     images.forEach(image => {
    //         homeImage.innerHTML = `
    //             <img src="${image}">
    //         `;
    //     });
    // }, 3000);


    // for(const image of images){
    //     setTimeout(() => {
    //         homeImage.innerHTML = `
    //             <img src = "${image}">
    //         `;
    //     }, 1000);
    // }

    images.forEach(image => {
        
        setTimeout(() => {
            // 
        }, 1000);
        homeImage.innerHTML = `
            <img src='${image}'>
        `;
    });
}

function loadDOM(){
    loadFooter();
    loadImages();
}

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        scrollBtn.style.display = "block";
    }
    else{
        scrollBtn.style.display = "none";
    }
}

function eventListeners(){
    window.addEventListener('DOMContentLoaded', loadDOM());

    scrollBtn.addEventListener("click", () => {
        document.body.scrollTop = 0;  // Safari
        document.documentElement.scrollTop = 0;   // Chrome, IE, Edge, Firefox e.t.c
    });

    window.addEventListener("scroll", () => {
        scrollFunction();
    });
}

eventListeners();


