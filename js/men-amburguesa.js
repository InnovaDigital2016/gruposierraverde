const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
const navActions = document.querySelector(".nav-actions");


// Guardamos el lugar original
const navParent = navActions.parentElement;



/*================================
      MENU HAMBURGUESA
================================*/


menu.addEventListener("click",()=>{


    nav.classList.toggle("active");



    if(nav.classList.contains("active")){


        menu.innerHTML =
        '<i class="fa-solid fa-xmark"></i>';



        // mover redes al final del menú

        nav.appendChild(navActions);



    }else{


        menu.innerHTML =
        '<i class="fa-solid fa-bars"></i>';



        // devolver redes a nav

        navParent.appendChild(navActions);


    }


});





/*================================
          DROPDOWN MOVIL
================================*/


const dropdowns = document.querySelectorAll(".dropdown");


dropdowns.forEach(dropdown=>{


    const button = dropdown.querySelector(".dropbtn");


    button.addEventListener("click",(e)=>{


        if(window.innerWidth <= 992){


            e.preventDefault();



            dropdowns.forEach(item=>{


                if(item !== dropdown){

                    item.classList.remove("active");

                }


            });



            dropdown.classList.toggle("active");


        }


    });


});





/*================================
      CERRAR AL CAMBIAR TAMAÑO
================================*/


window.addEventListener("resize",()=>{


    if(window.innerWidth > 992){


        nav.classList.remove("active");


        navParent.appendChild(navActions);



        dropdowns.forEach(dropdown=>{

            dropdown.classList.remove("active");

        });


        menu.innerHTML =
        '<i class="fa-solid fa-bars"></i>';

    }


});