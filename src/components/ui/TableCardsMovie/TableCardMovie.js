import { useState } from "react";
import { Link } from "react-router-dom";

import { CardMovies } from "../CardMovies/CardMovies";
import styles from "./TableCardMovies.module.css";

const TableCardMovie = ({ movies = [], views }) => {
  const moviesPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(movies.length / moviesPerPage);

  // Фильтрация фильмов по текущей странице
  const getVisibleMovies = () => {
    const startIndex = (currentPage - 1) * moviesPerPage;
    return movies.slice(startIndex, startIndex + moviesPerPage);
  };

  // Функция для изменения страницы
  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Генерация кнопок пагинации
  const renderPagination = () => {
    let pages = [];

    if (totalPages <= 5) {
      pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      if (currentPage <= 3) {
        pages = [1, 2, 3, "...", totalPages];
      } else if (currentPage >= totalPages - 2) {
        pages = [1, "...", totalPages - 2, totalPages - 1, totalPages];
      } else {
        pages = [1, "...", currentPage, "...", totalPages];
      }
    }

    return pages.map((page, index) =>
      typeof page === "number" ? (
        <button
          key={index}
          onClick={() => changePage(page)}
          className={`${styles.pageButton} ${
            currentPage === page ? styles.activePage : ""
          }`}
        >
          {page}
        </button>
      ) : (
        <span key={index} className={styles.dots}>
          {page}
        </span>
      )
    );
  };

  return (
    <div className={styles.container}>
      <div>
        <p>Всего найдено: {views}</p>
      </div>
      <div className={styles.ul}>
        {getVisibleMovies().map((movie) => (
          <div key={movie.id} className={styles.li}>
            <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none" }}>
              <CardMovies
                id={movie.id}
                title={movie.title}
                overview={movie.overview}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
              />
            </Link>
          </div>
        ))}
      </div>

      {/* Пагинация */}
      <div className={styles.pagination}>
        <button
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
          className={styles.pageButton}
        >
          {"<"}
        </button>
        {renderPagination()}
        <button
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={styles.pageButton}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export { TableCardMovie };
