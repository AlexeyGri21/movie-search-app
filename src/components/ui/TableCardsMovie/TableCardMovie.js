import { Link } from "react-router-dom";

import { CardMovies } from "../CardMovies/CardMovies";
import styles from "./TableCardMovies.module.css";

const TableCardMovie = (props) => {
  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        {props.movies?.map((movie) => (
          <li key={movie.id} className={styles.li}>
            <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none" }}>
              <CardMovies
                id={movie.id}
                title={movie.title}
                overview={movie.overview}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { TableCardMovie };
