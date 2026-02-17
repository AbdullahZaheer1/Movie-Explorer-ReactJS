import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
function MoviesCards({ query }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  async function search(query) {
    setLoading(true);
    const res = await fetch(
      `https://www.omdbapi.com/?s=${query}&apikey=66f6e9f6`,
    );
    const data = await res.json();
    // console.log(data.Search);
    setMovies(data.Search || []);
    setLoading(false);
  }
  useEffect(() => {
    if (!query) return;

    const timer = setTimeout(() => {
      search(query);
    }, 500); // Wait 500ms after user stops typing

    return () => clearTimeout(timer);
  }, [query]);
  if (loading == true) {
    return (
      <div>
        <section className="Movies-Cards">
          <h1 className="NoMovie">Loading...</h1>
        </section>
      </div>
    );
  }
  return (
    <div>
      <section className="Movies-Cards">
        {movies.length != 0 ? (
          movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
        ) : (
          <h1 className="NoMovie">No Movies Found</h1>
        )}
      </section>
    </div>
  );
}

export default MoviesCards;
