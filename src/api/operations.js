const API_KEY = "53eedff4";
// const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=`;

export function getMovies(search, cb) {
    const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`;
    fetch(`${API_URL}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Ups...");
    })
    .then(( {Search, totalResults}) => {
      console.log(totalResults);
      cb(Search);
    })
    .catch((err) => console.log(err));
}
