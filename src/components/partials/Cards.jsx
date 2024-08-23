import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
  return (
    <div className="w-full flex flex-wrap gap-5 px-[4.5vw] py-[4vw] bg-[#1F1E24]">
      {data.map((c, i) => (
        <Link className="w-[28vh] bg-zinc-800 p-5 rounded-md shadow-[1px_2px_32px_3px_#191919]" key={i}>
          <img
            className="h-[30vh] object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              c.poste_path || c.backdrop_path
            }`}
            alt=""
          />
          <h3 className="text-xl mt-3 text-zinc-300">{c.name || c.title || c.original_name || c.original_title}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
