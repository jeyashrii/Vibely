import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import background from "./assets/images/background.png";
import loaderscreen from "./assets/images/krusty-krab.jpg";
import "./App.css";
import "./App.css";
import Loader from "./Components/Loader";
import MoodSelection from "./Components/MoodSelection";
import SongsScreen from "./Components/SongsScreen";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Loader></Loader>}></Route>
          <Route
            path="/moodSelection"
            element={<MoodSelection></MoodSelection>}
          ></Route>
          <Route path="/songs/:mood" element={<SongsScreen />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
