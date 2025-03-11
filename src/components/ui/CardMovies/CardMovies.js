import styles from "./CardMovies.module.css";

const CardMovies = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img
          src={`https://image.tmdb.org/t/p/w200${props.poster_path}`}
          alt={props.title}
          loading="lazy"
        />
      </div>
      <div className={styles.informations}>
        <h3>{props.title}</h3>
        <h4>{props.overview}</h4>
        <p>Рейтинг: {props.vote_average}</p>
      </div>
    </div>
  );
};

export { CardMovies };
