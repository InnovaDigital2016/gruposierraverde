const slides = document.querySelectorAll(".slide");

const dots = document.querySelectorAll(".dot");

const next = document.querySelector(".next");

const prev = document.querySelector(".prev");

let index = 0;



function mostrarSlide(i){

    slides.forEach(slide=>slide.classList.remove("active"));

    dots.forEach(dot=>dot.classList.remove("active"));

    slides[i].classList.add("active");

    dots[i].classList.add("active");

}



function siguiente(){

    index++;

    if(index>=slides.length){

        index=0;

    }

    mostrarSlide(index);

}



function anterior(){

    index--;

    if(index<0){

        index=slides.length-1;

    }

    mostrarSlide(index);

}



if (slides.length > 0) {
    mostrarSlide(0);
}

if (next) next.addEventListener("click",siguiente);

if (prev) prev.addEventListener("click",anterior);



dots.forEach((dot,i)=>{

    dot.addEventListener("click",()=>{

        index=i;

        mostrarSlide(index);

    });

});



setInterval(()=>{

    siguiente();

},4000);