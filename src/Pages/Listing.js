import React, { useState } from "react";
import lamp from "/Users/juseok/sandbox/projects/auctionline/src/Images/lamp.jpg";
import "/Users/juseok/sandbox/projects/auctionline/src/Styles/ListStyles.css";
import { useNavigate } from "react-router-dom";

function Listing() {
  const navigate = useNavigate();
  const [offer, setOffer] = useState();
  const [newOffer, setNewOffer] = useState("");

  return (
    <div className="listingContainer">
      <div className="listImgContainer">
        <img className="listImg" src={lamp} />
      </div>
      <div className="leaderBoard">
        <li>
          <ul>1. $25</ul>
          <ul>2. $20</ul>
        </li>
        <form className="priceOffer">
          <input type="text" name="offer" value={offer} />
          <button className="offerBtn" onClick={() => {
              navigate("/listing2")}
              }>
            Offer
          </button>
        </form>
      </div>
    </div>
  );
}

export default Listing;
