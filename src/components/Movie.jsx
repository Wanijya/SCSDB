import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import Dropdown from "./partials/Dropdown";
import Topnav from "./partials/Topnav";
import Loading from "./Loading";
import Cards from "./partials/Cards";

const Movie = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("now_playing");
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  document.title = "SCSDB | Movies";

  const getMovie = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);

      if (data.results.length > 0) {
        setMovie((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
      //   setTrending(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  //   console.log(trending);

  const refershHandler = async () => {
    if (movie.length === 0) {
      getMovie();
    } else {
      setPage(1);
      setMovie([]);
      getMovie();
    }
  };

  useEffect(() => {
    refershHandler();
  }, [category]);

  return movie.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="w-full flex items-center justify-between px-[2vw] py-[1vw]">
        <h1 className="text-2xl text-zinc-400 font-semibold w-[20%]">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line hover:text-[#6556CD]"
          ></i>{" "}
          Movie <small className="text-sm text-zinc-600">({category})</small>
        </h1>
        <div className="flex items-center gap-3">
          <Topnav />
          <Dropdown
            title="Category"
            options={["popular", "top_rated", "upcoming", "nowplaying"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>
      <InfiniteScroll
        dataLength={movie.length}
        next={getMovie}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={movie} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Movie;
