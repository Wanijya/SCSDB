import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const HorizontalCards = ({ data }) => {
  return (
    <div className="w-full h-[60vh] flex gap-3 overflow-x-auto px-[2vw] py-[3vw] whitespace-nowrap">
      {data.map((d, i) => (
        <Link
          key={i}
          className="relative min-w-[15vw] bg-zinc-800 flex flex-col justify-center items-center p-5 rounded-md shadow-[1px_2px_32px_3px_#191919]"
        >
          <img
            className="h-[34vh] object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              d.backdrop_path || d.poster_path
            }`}
            alt=""
          />
          <h1 className="text-white font-semibold text-2xl mt-2 mb-2 whitespace-normal">
            {d.name || d.title || d.original_name || d.original_title}
          </h1>
        </Link>
      ))}
    </div>
  );
};

export default HorizontalCards;

{
  // <div key={i} className="min-w-[17%] h-full bg-zinc-800 rounded-md p-4">
  //         <p className="text-white whitespace-normal leading-tight tracking-tight">
  //           {d.overview.slice(0, 50)}...
  //           <Link className="text-blue-400"> more</Link>
  //         </p>
  //       </div>
  /* <div key={i} className="min-w-[22%] h-full mr-5 bg-red-900 rounded-md">
            <img className="w-full h-[55%] object-cover items-center"
              src={`https://image.tmdb.org/t/p/original/${
                d.backdrop_path || d.poster_path
              }`}
              alt=""
            />
            <h1 className="text-xl font-semibold text-white">
              {d.name || d.title || d.original_name || d.original_title}
            </h1>
            <p className="text-white mt-3 mb-3">
              {d.overview.slice(0, 200)}...
              <Link className="text-blue-400"> more</Link>
            </p>
          </div> */
}
