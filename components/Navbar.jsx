import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ searchQuery }) {
  let [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleForm(e) {
    e.preventDefault();
    searchQuery(query);
    navigate("/");
    setQuery("");
  }
  return (
    <div>
      <header>
        <h2 className="logo">Movies Explorer</h2>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Avengers">Avengers</Link>
          <Link to="/Spider-Man">Spider-Man</Link>
        </nav>
      </header>
      <section className="Search-Section">
        <form className="Search-form" onSubmit={handleForm}>
          <input
            type="search"
            placeholder="Enter movie name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </section>
    </div>
  );
}

export default Navbar;
