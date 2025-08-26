import React from "react";
import "./Loader.css";
import { useNavigate } from "react-router-dom";
import loaderscreen from "../assets/images/krusty-krab.jpg";
const Loader = () => {
  const navigate = useNavigate();
  return (
    <div className="loader-container">
      <button className="loader-btn" onClick={() => navigate("/moodSelection")}>
        Start
      </button>
    </div>
  );
};

export default Loader;
