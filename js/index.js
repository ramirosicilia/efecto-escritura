let palabras=["hola mundo","soy un programador", "persevera y triunfaras"]

let index = 0;
let parrafoPalabra = document.createElement('h3');
parrafoPalabra.classList.add('palabron')
let contenedor = document.getElementById('contenedor');

contenedor.append(parrafoPalabra);

function efectoEscritura() {
    let i = 0;
    let parrafoIndexado = palabras[index];
    parrafoPalabra.textContent = '';

    let interval = setInterval(() => {
        parrafoPalabra.textContent += parrafoIndexado[i];
        i++;

        if (i === parrafoIndexado.length) { 
        
            clearInterval(interval);
            setTimeout(efectoRetroceso, 1000);
        }
    }, 500);
}

function efectoRetroceso() {
    let palabrasIndexadas = palabras[index];
    let j = palabrasIndexadas.length;

    let intervale = setInterval(() => {
   
        parrafoPalabra.textContent = palabrasIndexadas.slice(0, j);j--

        if (j < 0) {
            clearInterval(intervale);
            index = (index + 1) % palabras.length;
            setTimeout(efectoEscritura, 1000);
        }
    }, 500);
}

efectoEscritura();
