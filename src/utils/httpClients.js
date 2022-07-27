const API = "https://api.themoviedb.org/3";

export function get(path){
  return fetch(API + path, {
      headers: {
        Authorization: 
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjllYThjOTM2OTgwNmMwYzgwMDY5ZTdlNzBiY2U0ZSIsInN1YiI6IjYyM2U0NThhZWZjYTAwMDA1ZWE1YmE2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TwrHRLjtfWo6A1lUj32Yn5Cwwt8cSxpxhmhxF7aD81A",
        "Content-Type": "application/json;charset=utf-8",
      },
    }).then((result) => result.json())
}