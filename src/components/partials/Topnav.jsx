import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "/man-red.avif";

const Topnav = () => {
  const [query, setquery] = useState("");
  const [searches, setSearches] = useState([]);
  // console.log(query);
  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      // console.log(d);
      setSearches(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    GetSearches();
  }, [query]);

  return (
    <div className="w-[70%] p-1 relative flex mx-auto items-center">
      <i className="text-2xl text-zinc-400 ri-search-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[50%] text-zinc-200 mx-10 p-4 text-lg outline-none border-none bg-transparent"
        type="text"
        placeholder="search anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="text-2xl text-zinc-400 ri-close-fill"
        ></i>
      )}

      <div className="absolute w-[58%] max-h-[50vh] bg-zinc-200 top-[100%] left-10 overflow-auto rounded">
        {searches.map((s, i) => (
          <Link
            key={i}
            className="text-zinc-600 font-semibold w-[100%] p-4 flex justify-start items-center border-b-2 border-zinc-100 hover:text-black hover:bg-zinc-300 duration-300"
          >
            <img
              className="w-[10vh] h-[10vh] object-cover rounded-full overflow-hidden mr-5"
              src={
                s.backdrop_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      s.backdrop_path || s.profile_path
                    }`
                  : noimage
              }
              alt=""
            />
            <span>
              {s.name || s.title || s.original_name || s.original_title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topnav;
