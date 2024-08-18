import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  //   console.log(data);

  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5), rgba(0,0,0,.7)), url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
      className="w-full h-[60vh] flex flex-col justify-end items-start p-[3vw]"
    >
      <h1 className="text-5xl font-extrabold text-white">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <p className="text-white mt-3 mb-3">
        {data.overview.slice(0, 200)}...
        <Link className="text-blue-400"> more</Link>
      </p>
      <p className="text-white flex gap-x-4">
        <i className="ri-megaphone-fill flex gap-x-2"> {data.release_date || "No Information"}</i>
        <i className="ri-album-fill flex gap-x-2"> {data.media_type}</i>
      </p>
      <Link className="px-3 py-2 rounded text-white mt-3 bg-[#6556CD]">
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;
