import peliculas from "./peliculas.js";

const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";

function filtrarPorGenero(generoId) {
  return peliculas.filter((pelicula) => pelicula.genre_ids.includes(generoId));
}

function obtenerUrlImagen(posterPath) {
  return posterPath.startsWith("http") ? posterPath : BASE_IMG_URL + posterPath;
}

function mostrarPeliculasPorGenero(generoId, contenedorId) {
  const contenedor = document.getElementById(contenedorId);
  const peliculasFiltradas = filtrarPorGenero(generoId);

  peliculasFiltradas.forEach((pelicula) => {
    const article = document.createElement("article");
    article.classList.add("pelicula");

    const img = document.createElement("img");
    img.src = obtenerUrlImagen(pelicula.poster_path);
    img.alt = pelicula.title;

    const titulo = document.createElement("p");
    titulo.textContent = pelicula.title;

    article.appendChild(img);
    article.appendChild(titulo);
    contenedor.appendChild(article);
  });
}

mostrarPeliculasPorGenero(28, "genero-28"); // Acción
mostrarPeliculasPorGenero(53, "genero-53"); // Thriller
mostrarPeliculasPorGenero(12, "genero-12"); // Aventura