import React, { useEffect, useState } from "react";
import "./homePage.css";
import { BsStarFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";

export default function HomePage({movieData}) {
  const {id}=useParams();

  return (
    <div className="homepage">
      <nav>
        <h1>FilmSter</h1>
      </nav>
      <div className="movie-cards">
        {movieData.map(
          (item) =>
            item.show.image && (
              <div className="cardItem" key={item.show.id}>
                <img
                  src={item.show.image && item.show.image.medium}
                  height="300px"
                />
                <div className="card-content">
                  {item.show.rating.average ? (
                    <div className="ratings">
                      <BsStarFill size={18} color="gold" className="star" />
                      <p>{item.show.rating.average}</p>
                    </div>
                  ) : (
                    <div></div>
                  )}
                  <Link to={`/movie/${item.show.id}`} className="card-link">
                    <button type="button" className="button">
                      View More
                    </button>
                  </Link>
                </div>
              </div>
            )
        )}
      </div>
      <footer style={{backgroundColor:'black', padding:'5px'}}>
        <p style={{color:'grey'}}>2024 @ FilmSter</p>
      </footer>
    </div>
  );
}
