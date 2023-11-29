const fetch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/";

const movieUrl = (urlName) => {
  return baseUrl + `movie/${urlName}?language=ko-kr`;
};

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjIxMjIwZGRkMDIyYmIxNDg2NDY5ZWQzMzExMzgyMCIsInN1YiI6IjY1NGIzYTBkNDFhNTYxMzM2OTNjNTA2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hziyPAPo1Cid7a5fV6Ri9Fc6zSg_AlpxE8lUJp5eOoU",
  },
};

export const popular = () =>
  fetch(movieUrl("popular"), options).then((res) => res.json());