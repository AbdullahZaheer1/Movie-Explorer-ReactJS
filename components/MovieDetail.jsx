import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function MovieDetail() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({});
  async function searchmovie(id) {
    const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=66f6e9f6`);
    const data = await res.json();
    // console.log(data);
    setMovie(data || {});
  }
  useEffect(() => {
    if (!id) return;

    const timer = setTimeout(() => {
      searchmovie(id);
    }, 500); // Wait 500ms after user stops typing

    return () => clearTimeout(timer);
  }, [id]);
  return (
    <div>
      <section className="movie-detail" id="movieDetail">
        <div className="detail-container">
          <div className="detail-poster">
            <img id="poster" src={movie.Poster} alt={movie.Title} />
          </div>

          <div className="detail-info">
            <h1 id="title">{movie.Title}</h1>
            <p className="tagline" id="genre">
              {movie.Genre}
            </p>
            <p>
              <strong>Year:</strong> <span id="year">{movie.Year}</span>
            </p>
            <p>
              <strong>Runtime:</strong>{" "}
              <span id="runtime">{movie.Runtime}</span>
            </p>
            <p>
              <strong>Rated:</strong> <span id="rated">{movie.Rated}</span>
            </p>
            <p>
              <strong>Director:</strong>{" "}
              <span id="director">{movie.Director}</span>
            </p>
            <p>
              <strong>Actors:</strong> <span id="actors">{movie.Actors}</span>
            </p>

            <h3>Plot</h3>
            <p id="plot">{movie.Plot}</p>
            <div className="ratings">
              {movie.Ratings && movie.Ratings.length > 0 ? (
                <>
                  <div>
                    IMDB{" "}
                    <span id="imdb">{movie.Ratings[0]?.Value || "N/A"}</span>
                  </div>
                  <div>
                    Rotten{" "}
                    <span id="rotten">{movie.Ratings[1]?.Value || "N/A"}</span>
                  </div>
                  <div>
                    Metacritic{" "}
                    <span id="meta">{movie.Ratings[2]?.Value || "N/A"}</span>
                  </div>
                </>
              ) : (
                <div>No ratings available</div>
              )}
            </div>
            <button className="back-btn" onClick={() => navigate(-1)}>
              ⬅ Back
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MovieDetail;
