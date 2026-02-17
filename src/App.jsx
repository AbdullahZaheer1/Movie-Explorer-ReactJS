import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import MoviesCards from "../components/MoviesCards";
import Navbar from "../components/Navbar";
import NoPage from "../components/NoPage";

function App() {
  let [query, setQuery] = useState("Movie");
  const searchQuery = (getQuery) => {
    setQuery(getQuery);
  };
  return (
    <>
      <BrowserRouter>
        <Navbar searchQuery={searchQuery} />
        <Routes>
          <Route path="/" element={<MoviesCards query={query}/> }/>
          <Route path="/Avengers" element={<MoviesCards query="Avenger"/> }/>
          <Route path="/Spider-Man" element={<MoviesCards query="Spider-Man"/> }/>
          <Route path="*" element={<NoPage/> }/>
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
