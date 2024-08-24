import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import Dropdown from "./partials/Dropdown";
import Topnav from "./partials/Topnav";
import Loading from "./Loading";
import Cards from "./partials/Cards";

const Tvshows = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("airing_today");
  const [tvshow, setTvshow] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  document.title = "SCSDB | TV Shows";

  const getTvshow = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);

      if (data.results.length > 0) {
        setTvshow((prevState) => [...prevState, ...data.results]);
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
    if (tvshow.length === 0) {
      getTvshow();
    } else {
      setPage(1);
      setTvshow([]);
      getTvshow();
    }
  };

  useEffect(() => {
    refershHandler();
  }, [category]);

  return tvshow.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="w-full flex items-center justify-between px-[2vw] py-[1vw]">
        <h1 className="text-2xl text-zinc-400 font-semibold w-[20%]">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line hover:text-[#6556CD]"
          ></i>{" "}
          TV Shows <small className="text-sm text-zinc-600">({category})</small>
        </h1>
        <Topnav />
        <Dropdown
          title="Category"
          options={["popular", "top_rated", "on_the_air", "airing_today"]}
          func={(e) => setCategory(e.target.value)}
        />
      </div>
      <InfiniteScroll
        dataLength={tvshow.length}
        next={getTvshow}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={tvshow} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Tvshows;
