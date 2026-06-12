const movies = [
  { title: "Movie A", rating: 8.5 },
  { title: "Movie B", rating: 6.0 }
];

const result = movies
  .filter(movie => movie.rating > 8)
  .map(movie => movie.title);

console.log(result);