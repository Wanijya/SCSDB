import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzExMzc1NGJjZDMzM2I1OTRlZDRlNThiNjYzOTQzNyIsIm5iZiI6MTcyMzk2ODYwMC40NTc1NjcsInN1YiI6IjY2YzFhYTUwMjk3ZDZhNmM2M2EyNzA5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g3eEt2LWJZKriZgJ-LGX14i7E4_Nxk2g6p-bkrbBnaI",
  },
});

export default instance;
