import React from "react";
import { Link } from "react-router-dom";
function MovieCard({movie}) {
  return (
    <div>
      <div className="Movie-Card">
        <img src={movie.Poster} alt={movie.Title} width="200px" />
        <h4>{movie.Title}</h4>
        <h4>{movie.Year}</h4>
        <Link to={`/movie/${movie.imdbID}`}><button>Detail</button></Link>
      </div>
    </div>
  );
}

export default MovieCard;
