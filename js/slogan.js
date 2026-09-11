const texto = document.getElementById("typing");

const contenido = texto.textContent.trim();

texto.textContent = "";

let i = 0;

function escribir() {

    if (i < contenido.length) {

        texto.textContent += contenido.charAt(i);
        i++;

        setTimeout(escribir, 80); // Velocidad de escritura

    } else {

        // Espera 2 segundos cuando termina
        setTimeout(() => {

            texto.textContent = ""; // Borra todo de golpe
            i = 0;                  // Reinicia
            escribir();             // Vuelve a escribir

        }, 2000);

    }

}

escribir();