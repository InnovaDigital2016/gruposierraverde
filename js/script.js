window.addEventListener(
    "scroll",() =>{
        const s=document.documentElement.scrollTop;
        const h=document.documentElement.scrollHeight-window.innerHeight;

        document.getElementById("progress").style.widows = (s/h *100)+"%"
})

window.addEventListener("scroll",()=>{
    let current="";
    document.querySelectorAll("section[id]").forEach(sec=>{
        if(window.scrollY >=sec.offserTop - 200) current = sec.id
    })
    document.querySelectorAll(".nav-links a").forEach(a=>{
        a.classList.remove("active")
        if (a.getAttribute("href")==="#"+current || (current==="home" && a.getAttribute("href")==="#")){
            a.classList.add("active")
        }
    })
})

window.addEventListener("load", ()=>{
    const cards = Array.from(document.querySelectorAll(".program-carousel .program-card"));
    if (!cards.length) return;

    let activeIndex = 2;
    const updateCarousel = (index) => {
        const total = cards.length;
        cards.forEach((card, i) => {
            card.classList.remove("active", "prev", "next", "far-left", "far-right");

            const prevIndex = (index - 1 + total) % total;
            const nextIndex = (index + 1) % total;
            const farLeftIndex = (index - 2 + total) % total;
            const farRightIndex = (index + 2) % total;

            if (i === index) {
                card.classList.add("active");
            } else if (i === prevIndex) {
                card.classList.add("prev");
            } else if (i === nextIndex) {
                card.classList.add("next");
            } else if (i === farLeftIndex) {
                card.classList.add("far-left");
            } else if (i === farRightIndex) {
                card.classList.add("far-right");
            }
        });
    };

    const rotate = () => {
        activeIndex = (activeIndex + 1) % cards.length;
        updateCarousel(activeIndex);
    };

    cards.forEach((card, index) => {
        card.addEventListener("click", () => {
            activeIndex = index;
            updateCarousel(activeIndex);
        });
    });

    updateCarousel(activeIndex);
    setInterval(rotate, 4000);
});

const whatsappContactForm = document.getElementById("whatsapp-contact-form");

if (whatsappContactForm) {
    whatsappContactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(whatsappContactForm);
        const phone = formData.get("phone");
        const message = formData.get("message");
        const whatsappText = `Número de WhatsApp: ${phone}\nMensaje: ${message}`;

        window.open(`https://wa.me/51944383514?text=${encodeURIComponent(whatsappText)}`, "_blank", "noopener,noreferrer");
    });
}

