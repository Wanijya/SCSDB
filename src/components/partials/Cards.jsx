import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
  return (
    <div className="w-full flex flex-wrap gap-5 px-[4.5vw] py-[4vw] bg-[#1F1E24]">
      {data.map((c, i) => (
        <Link
          className="relative w-[34vh] bg-zinc-800 flex flex-col justify-center items-center p-5 rounded-md shadow-[1px_2px_32px_3px_#191919]"
          key={i}
        >
          <img
            className="h-[34vh] object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              c.poster_path || c.backdrop_path || c.profile_path
            }`}
            alt=""
          />
          <h3 className="text-xl mt-3 text-zinc-300">
            {c.name || c.title || c.original_name || c.original_title}
          </h3>

          {c.vote_average && (
            <div className="text-white absolute right-[2vw] bottom-[8vw] w-[5vh] h-[5vh] font-semibold flex justify-center items-center rounded-full bg-yellow-600">
              {(c.vote_average * 10).toFixed()} <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Cards;
