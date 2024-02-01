import React from "react";
import { Link, useParams } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import "./movieDetails.css";
import parse from "html-react-parser";

export default function MovieDetails({ movieData }) {
  const { id } = useParams();

  const getMovieDetailsById = (id) => {
    return movieData.find((item) => item.show.id.toString() === id.toString())
      ?.show;
  };

  const details = getMovieDetailsById(id);

  return (
    <div className="moviedetails">
      <h1>{details.name}</h1>

      <div className="main-part">
        <img src={details.image.original} height="500px" className="main-img"/>
        <div className="matter">
          <div className="rat-gen">
            {details.rating.average ? (
              <div className="ratings">
                <BsStarFill size={18} color="gold" className="star" />
                <p>{details.rating.average}</p>
              </div>
            ) : (
              <div></div>
            )}
            <div className="genres">{details.genres.join(" | ")}</div>
          </div>
          <div className="summary">{parse(details.summary)}</div>
          {/* <div className="link"> */}
          <Link to={details.officialSite} className="link" target="_blank">
            <button>Offical Site</button>
          </Link>
          {/* <button>
            <a href={details.officialSite} target="_blank">
              Offical Site
            </a>
            </button> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
