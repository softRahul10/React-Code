import React, { useEffect, useState, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback( async() => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://swapi.dev/api/films');
      if(!response.ok) {
        throw new Error('Failed to fetch');
      }
      const data = await response.json();
      const transformedMovies = data.results.map(value => {
        return {
          id: value.id,
          title: value.title,
          openingText: value.opening_crawl,
          releaseDate: value.release_date
        }
      });
      setMovies(transformedMovies);
    } catch (err) {
        setError(err.message);
    }
      setIsLoading(false);

  },[]);

  useEffect(()=> {
    fetchMoviesHandler();
  },[fetchMoviesHandler]);

  let content = 'No Movies Available';
  if(movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }else if(error) {
    content = <p>{error}</p>
  }else if(isLoading) {
    content = <p> Loading Movies .....</p>
  }


  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler} >Fetch Movies</button>
      </section>
      <section>
        {content}
        {/* {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p> No Movies </p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p> Loading...</p>} */}
      </section>
    </React.Fragment>
  );
}

export default App;
