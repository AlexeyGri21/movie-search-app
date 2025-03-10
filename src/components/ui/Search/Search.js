import styles from "./Search.module.css";

const Search = (props) => {
  return (
    <div className={styles.container}>
      <h1>Поиск фильмов</h1>
      <div className={styles.group}>
        <input
          type="text"
          value={props.search}
          onChange={props.onChange}
          placeholder="Введите название фильма"
        />
        <button
          type="submit"
          disabled={props.isLoading || props.disabled} 
          onClick={props.onClick}
          className={styles.searchButton}
        >
          {props.isLoading ? (
            <span
              className={styles.spinner}
              role="status"
              aria-hidden="true"
            ></span>
          ) : (
            <>Найти</>
          )}
        </button>
      </div>
      <div className={styles.informations}>
      {!props.moviesFound && <p>Фильма по вашему запросу не найдено...</p>}
      </div>
    </div>
  );
};

export { Search };
