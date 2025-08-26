import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./SongsScreen.css";

import spongebob from "../assets/images/SpongeBob.jpg";
import patrick from "../assets/images/patrick.jpg";
import squidward from "../assets/images/squidward.jpg";
import mrKrabs from "../assets/images/mrKrabs.jpg";

const moodImages = {
  happy: spongebob,
  relaxed: patrick,
  sad: squidward,
  motivated: mrKrabs,
};

const SongsScreen = () => {
  const { mood } = useParams();
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get(
          `https://itunes.apple.com/search?term=${mood}&entity=song&limit=10`
        );
        const tracks = response.data.results.map((track) => ({
          title: track.trackName,
          artist: track.artistName,
          preview: track.previewUrl,
        }));
        setSongs(tracks);
      } catch (error) {
        console.error("Error fetching songs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSongs();
  }, [mood]);

  if (loading)
    return (
      <h2 style={{ color: "white", textAlign: "center" }}>
        Loading songs for {mood}...
      </h2>
    );

  return (
    <div className="songs-container">
      <Link to="/moodSelection" className="back-link">
        ← Back
      </Link>
      <div className="mood-header">
        <img src={moodImages[mood]} alt={mood} className="mood-header-image" />
        <h1 className="songs-header">Songs for {mood}</h1>
      </div>
      <ul className="songs-list">
        {songs.map((song, index) => (
          <li key={index}>
            <div className="song-title">{song.title}</div>
            <div className="song-artist">by {song.artist}</div>
            {song.preview && (
              <audio controls>
                <source src={song.preview} type="audio/mpeg" />
              </audio>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongsScreen;
