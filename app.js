// const mobileMenu = document.getElementById("menu-bar");
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
const footer = document.getElementById("footer");
const homeImage = document.querySelector(".image");
const scrollBtn = document.getElementById("onscroll-btn");



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

function startImageTransition(){
    const images = document.getElementsByClassName("pic");

    // Set opacity of all images to 1
    for(let i = 0; i < images.length; ++i){
        images[i].style.opacity = 1;
    }

    let top = 1;    // get the z-index of the topmost image

    let current = images.length - 1;   

    setInterval(changeImage, 3000);
    
    async function changeImage(){
        let nextImage = (1 + current) % images.length;
        images[current].style.zIndex = top + 1;
        images[nextImage].style.zIndex = top;

        await transition();

        images[current].style.zIndex = top;
        images[nextImage].style.zIndex = top + 1;
        top = top + 1;
        images[current].style.opacity = 1;

        current = nextImage;
    }

    function transition(){
        return new Promise((resolve, reject) => {
            let del = 0.01;

            let id = setInterval(changeOpacity, 10);


            function changeOpacity(){
                images[current].style.opacity -= del;
                if(images[current].style.opacity <= 0){
                    clearInterval(id);
                    resolve();
                }
            }
        });
    }
    
}

function loadDOM(){
    loadFooter();
    startImageTransition();
    
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

    menu.addEventListener("click", () => {
        menu.classList.toggle("active");
        nav.classList.toggle("on");
    });
}

eventListeners();


