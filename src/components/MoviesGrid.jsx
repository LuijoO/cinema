import { Card } from "./Card";
import styles from "./MoviesGrid.module.css";
import { get } from "../utils/httpClients"
import { useEffect, useState } from "react";
import { Spinner } from "./Spinner";
import { useQuery } from "../hooks/useQuery";


export function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const query = useQuery();
  const search = query.get('search');

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search 
    ? "/search/movie?query=" + search 
    : "/discover/movie";
    get(searchUrl).then((data) => {
      setMovies(data.results);
      setIsLoading(false);
    });
  }, [search]);
  
if (isLoading) {
  return <Spinner />
}

  return ( 
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie}/>
      ))}
    </ul>
  );
}