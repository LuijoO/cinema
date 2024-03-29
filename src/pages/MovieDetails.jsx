import styles from "./MovieDetails.module.css"
import { useParams } from "react-router-dom";
import {Spinner} from "../components/Spinner";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClients";

export function MovieDetails() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);


  useEffect(() => {
    setIsLoading(true);
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setIsLoading(false);
    });
  }, [movieId]);
  
  if (isLoading) {
    return <Spinner />
  }

  if (!movie) {
    return null;
  }

  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <div className={styles.detailsContainer}>
      <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.title} />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}><strong>Title:</strong> {movie.title}</p>
        <p><strong>Genero:</strong> {movie.genres.map(genre => genre.name).join(", ")}</p>
        <p><strong>Description:</strong> {movie.overview}</p>
      </div>
    </div>

  );
}