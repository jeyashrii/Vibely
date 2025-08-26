import React from "react";
import { useNavigate } from "react-router-dom";
import "./MoodSelection.css";
import spongebob from "../assets/images/spongebob.jpg";
import patrick from "../assets/images/patrick.jpg";
import squidward from "../assets/images/squidward.jpg";
import mrKrabs from "../assets/images/mrKrabs.jpg";

const MoodSelection = () => {
  const navigate = useNavigate();

  const moods = [
    { name: "happy", img: spongebob },
    { name: "relaxed", img: patrick },
    { name: "sad", img: squidward },
    { name: "motivated", img: mrKrabs },
  ];

  const handleMoodClick = (mood) => {
    navigate(`/songs/${mood}`);
  };

  return (
    <div className="container">
      <h1 className="mood-text">Tune into your mood</h1>
      <div className="mood-selector-div">
        {moods.map((mood, index) => (
          <img
            key={index}
            src={mood.img}
            alt={mood.name}
            onClick={() => handleMoodClick(mood.name)}
            className="mood-card"
          />
        ))}
      </div>
    </div>
  );
};

export default MoodSelection;
