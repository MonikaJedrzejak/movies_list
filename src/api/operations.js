const API_KEY = "53eedff4";
// const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=`;

export function getMovies(search, cb, cb2) {
    const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`;
    fetch(`${API_URL}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Ups...");
    })
    .then(( {Search, totalResults}) => {
      if(!Search) {
        cb([]);
        cb2(0);
      } else {
        cb(Search);
        cb2(totalResults);
      }
    })
    .catch((err) => console.log(err));
}

export function getMoviesFromPage(search, page, cb) {
  const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&page=${page}`;
  fetch(`${API_URL}`)
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error("Ups...");
  })
  .then(( {Search}) => {
    if(!Search) {
        cb([]);
      } else {
        cb(Search);
      }
  })
  .catch((err) => console.log(err));
}
