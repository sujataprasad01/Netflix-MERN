import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Netflix from "./pages/Netflix/Netflix";
import Player from "./pages/Player/Player";
import Movies from "./pages/Movies/Movies";
import TVShows from "./pages/TVShows/TVShows";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<Login></Login>}></Route>
      <Route exact path="/signup" element={<Signup></Signup>}></Route>
      <Route exact path="/player" element={<Player></Player>}></Route>
      <Route exact path="/movies" element={<Movies></Movies>}></Route>
      <Route exact path="/tv" element={<TVShows></TVShows>}></Route>
      <Route exact path="/" element={<Netflix></Netflix>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
