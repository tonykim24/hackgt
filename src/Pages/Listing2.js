import React, { useState } from "react";
import lamp from "/Users/juseok/sandbox/projects/auctionline/src/Images/lamp.jpg";
import "/Users/juseok/sandbox/projects/auctionline/src/Styles/ListStyles.css";

function Listing2() {
  const [offer, setOffer] = useState();
  const [newOffer, setNewOffer] = useState("");

  const handleChange = (event) => {
    setOffer(event.target.value);
  };

  const handleClick = (event) => {
    setNewOffer(15);
    console.log("handle click");
  };

  return (
    <div className="listingContainer">
      <div className="listImgContainer">
        <img className="listImg" src={lamp} />
      </div>
      <div className="leaderBoard">
        <li>
          <ul>1.    $25</ul>
          <u1>2.    $22</u1>
          <ul>3.    $20</ul>
        </li>
        <form className="priceOffer">
          <input
            type="text"
            name="offer"
            onChange={handleChange}
            value={offer}
          />
          <button className="offerBtn" onClick={handleClick}>
            Offer
          </button>
        </form>
      </div>
    </div>
  );
}

export default Listing2;
