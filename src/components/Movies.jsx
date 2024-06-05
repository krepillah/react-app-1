import React from "react"
import Movie from "./Movie"

function Movies(props){
  const {movies = []} = props;
  return (
    <div className="movies-block row">
      {movies.length ? movies.map((movie) => (
        <Movie key={movie.imdbID} {...movie}/>
      )) : <h4>Ничего не найдено</h4>}
    </div>
  );
}


export default Movies;