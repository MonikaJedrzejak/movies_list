const API_KEY = "53eedff4";
// const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=`;

export function getMovies(search, cb) {
    const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`;
    fetch(`${API_URL}${search}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Ups...");
    })
    .then(( results ) => {
      console.log(results);
      cb(results);
    })
    .catch((err) => console.log(err));
}
