let btnmenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.list-container');
let containerMenu = document.querySelector('.menu');
let activador = true;

// menu navegacion animacion 

btnmenu.addEventListener('click', () => {

    document.querySelector('.btn-menu i').classList.toggle('fa-times');

    if(activador){
        menu.style.left = "0";
        menu.style.transition = "0.5s";
        activador = false;

    }else{
        activador = false;
        menu.style.left = "-100%";
        menu.style.transition = "0.5s";
        activador = true;
    }
});

// intercalar clase active del menu

let enlaces = document.querySelectorAll('.lists li a');

enlaces.forEach( (element) =>{

    element.addEventListener('click', (event) =>{

        enlaces.forEach((link) =>{
            link.classList.remove('active');
        });
        
        event.target.classList.add('active');
        
    });
});

//efectos scroll ocultar y mostrar barra de menu

let scrollPos = window.pageYOffset;
let goTop = document.querySelector('.go-top');

window.onscroll = () =>{

    let currentScrollPos = window.pageYOffset;
    //mostrar y ocultar menu
    if (scrollPos > currentScrollPos){
        containerMenu.style.top = "0";
        containerMenu.style.transition = "0.5s";
    }else{
        containerMenu.style.top = "-60px";
        containerMenu.style.transition = "0.5s";
    }

    scrollPos = currentScrollPos;

    // estilos de mostrar y ocultar scroll

    let arriba = window.pageYOffset;

    if(arriba <= 600){
        containerMenu.style.borderBottom= "none";

        goTop.style.right = "-100%";
    }else{
        containerMenu.style.borderBottom = "4px solid #ff2e63";

        goTop.style.right = "0";
        goTop.style.transition = "0.5s";
    }
}

goTop.addEventListener('click', () =>{

    document.documentElement.scrollTop = 0;

});

// ir arriba boton

let verAbajo = document.querySelector('#abajo');

verAbajo.addEventListener('click' , () =>{
    document.body.scrollTop = 600;
    document.documentElement.scrollTop = 600;
});


