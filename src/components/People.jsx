import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import Dropdown from "./partials/Dropdown";
import Topnav from "./partials/Topnav";
import Loading from "./Loading";
import Cards from "./partials/Cards";

const People = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("popular");
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  document.title = "SCSDB | People";

  const getPeople = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);

      if (data.results.length > 0) {
        setPeople((prevState) => [...prevState, ...data.results]);
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
    if (people.length === 0) {
      getPeople();
    } else {
      setPage(1);
      setPeople([]);
      getPeople();
    }
  };

  useEffect(() => {
    refershHandler();
  }, [category]);

  return people.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="w-full flex items-center justify-between px-[2vw] py-[1vw]">
        <h1 className="text-2xl text-zinc-400 font-semibold w-[20%]">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line hover:text-[#6556CD]"
          ></i>{" "}
          People
        </h1>
        <div className="flex items-center gap-3">
          <Topnav />
        </div>
      </div>
      <InfiniteScroll
        dataLength={people.length}
        next={getPeople}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={people} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default People;
