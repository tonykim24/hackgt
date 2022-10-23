import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import lamp from "/Users/juseok/sandbox/projects/auctionline/src/Images/lamp.jpg";
import sofa from "/Users/juseok/sandbox/projects/auctionline/src/Images/sofa.jpg";
import stool from "/Users/juseok/sandbox/projects/auctionline/src/Images/stool.jpg";
import "/Users/juseok/sandbox/projects/auctionline/src/Styles/HPStyles.css";

function HomePage() {
  const [goToPost, setGoToPost] = React.useState(false);
  const navigate = useNavigate();

  return (
    <div className="homeContainer">
      <div className="header">
        <button
          className="postBtn"
          onClick={() => {
            navigate("/postlisting");
            console.log("click!");
          }}
        >
          Add Listing
        </button>
      </div>
      <div className="feed">
        <div
          className="post"
          onClick={() => {
            navigate("/listing");
          }}
        >
          <img className="thumbnail" src={lamp} />
          <div className="details">
            <p>Lamp</p>
            <p>$15</p>
          </div>
        </div>
        <div
          className="post"
          onClick={() => {
            navigate("/listing");
          }}
        >
          <img className="thumbnail" src={sofa} />
          <div className="details">
            <p>Sofa</p>
            <p>$100</p>
          </div>
        </div>
        <div
          className="post"
          onClick={() => {
            navigate("/listing");
          }}
        >
          <img className="thumbnail" src={stool} />
          <div className="details">
            <p>Stool</p>
            <p>$10</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
