const url = "https://api.thecatapi.com/v1/images/search";
const api_key = "live_fCmiiEqqIB1BVqUtqZfVwM5jaSpnBK5hXO1gJUtwj6FRG3Guz5JzHTugK6bgpgvj"

// Obtiene una referencia al botón por su ID.
const botonGenerarGato = document.getElementById("botonGenerarGato");

// Obtiene una referencia al contenedor de la imagen.
const contenedorImagen = document.getElementById("contenedorImagen");

// Función para cargar una nueva imagen de gato.
function cargarImagenDeGato() {
    // Realiza una solicitud a TheCatAPI para obtener una imagen aleatoria de gato.
    fetch(url, {
        headers: {
            "x-api-key": api_key
        }
    })
        .then(response => response.json())
        .then(data => {
            // Crea un nuevo elemento de imagen.
            const nuevaImagen = document.createElement("img");
            nuevaImagen.src = data[0].url;
            nuevaImagen.alt = "Imagen de gato aleatoria";

            // Reemplaza la imagen anterior con la nueva imagen.
            contenedorImagen.innerHTML = "";
            contenedorImagen.appendChild(nuevaImagen);
        })
        .catch(error => {
            console.error("Error al obtener la imagen de gato:", error);
        });
}
cargarImagenDeGato();

// Agrega un evento de escucha de clic al botón "Generar Gato".
botonGenerarGato.addEventListener("click", cargarImagenDeGato);