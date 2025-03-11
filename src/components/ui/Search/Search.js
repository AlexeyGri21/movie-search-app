import styles from "./Search.module.css";

const Search = (props) => {
  const {
    query,
    onReset,
    isLoading,
    disabled,
    onClick,
    moviesFound,
    search,
    onChange,
  } = props;

  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        <h1>Поиск фильмов</h1>
      </div>

      <div className={styles.group}>
        <input
          type="text"
          value={search}
          onChange={onChange}
          placeholder="Введите название фильма"
        />
        <div className={styles.btnGroup}>
          <button
            type="submit"
            disabled={isLoading || disabled}
            onClick={onClick}
            className={styles.searchButton}
          >
            {isLoading ? (
              <span
                className={styles.spinner}
                role="status"
                aria-hidden="true"
              ></span>
            ) : (
              <>Найти</>
            )}
          </button>
          <button
            type="button"
            onClick={onReset}
            className={styles.clearButton}
          >
            &times;
          </button>
        </div>
      </div>
      <div className={styles.informations}>
        {query && !moviesFound && !isLoading && (
          <p>Фильма по вашему запросу не найдено...</p>
        )}
      </div>
    </div>
  );
};

export { Search };
