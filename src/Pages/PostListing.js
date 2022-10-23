import React from "react";
import { useNavigate } from "react-router-dom";

function PostListing() {
  const navigate = useNavigate();

  return (
    <div>
      PostListing
      <input type="text" name="name" />
      <button
        className="uploadPic"
        onClick={() => {
          navigate("/");
        }}
      >
        Upload Picture
      </button>
      <input type="text" name="price" />
    </div>
  );
}

export default PostListing;
