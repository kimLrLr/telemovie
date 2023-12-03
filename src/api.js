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

export const nowPlaying = () =>
  fetch(movieUrl("now_playing"), options).then((res) => res.json());

export const popular = () =>
  fetch(movieUrl("popular"), options).then((res) => res.json());

export const movieDetail = (id) =>
  fetch(movieUrl(`${id}`), options).then((res) => res.json());

export const movieSearch = (keyword) => {
  const searchUrl = baseUrl + `search/movie?query=${keyword}&language=ko-kr`;
  return fetch(searchUrl, options).then((res) => res.json());
};

export const rated = () =>
  fetch(movieUrl("top_rated"), options).then((res) => res.json());

export const upComing = () =>
  fetch(movieUrl("upcoming"), options).then((res) => res.json());
