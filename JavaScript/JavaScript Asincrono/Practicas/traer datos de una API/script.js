
const getMovieHtml=movie=>{
    return `<div class="movie" onclick="getMovieDetailed(${movie_id})">
        <h3>${movie.title}</h3>
        <img src="https://image.tmdb.org/t/p/w185${movie.poster_path}" alt="imagen de la pelicula">
        </div>`
   }

const getMovieDetailedHtml=movie=>{
    return `<div class="movie" onclick="getMovieDetailed(${movie_id})">
        <h3>${movie.title}</h3>
        <img src="https://image.tmdb.org/t/p${movie.poster_path}" alt="imagen de la pelicula">
        <span>${movie.popularity}</span>
        <p>${movie.overview}</p>
        </div>`
   }   

const renderMovies=movies=>{
    document.querySelector(".movies").innerHTML=""
    for (const movie of movies) {
        document.querySelector(".movies")
        .innerHTML += getMovieHtml(movie)        
    }

}

const getPopularMovies =()=>{
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=36be1ed3a2ef8babdef0b7ebc00ca44e&language=es-ES")
    .then(res=>res.json())  //  transforma la informacion que le llega a algo legible
    .then(res=>{
        const movies = res.results;  //  results es el nombre del array donde esta la informacion
        renderMovies(movies);
    })    //  le decimos que queremos que haga con esa informacion
    .catch(error=>console.error(error))
}

const getLatestMovies = async() =>{
    try {
        const res = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=36be1ed3a2ef8babdef0b7ebc00ca44e&language=es-ES")
        const resu = res.json;
        const movies = resu.results;
            renderMovies(movies);
    } catch (error) {
        console.error(error);
    }
   }

   const getMovieDetailed = movie_id =>{
    axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=36be1ed3a2ef8babdef0b7ebc00ca44e&language=es-ES`)
    .then(res=>{
        const movie = res.data;
        document.querySelector(".movies").innerHTML= getMovieHtml(movie)
    })
    .catch(error=>console.error(error))
   }