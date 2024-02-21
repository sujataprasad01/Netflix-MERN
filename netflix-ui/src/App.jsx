import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Netflix from "./pages/Netflix";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<Login></Login>}></Route>
      <Route exact path="/signup" element={<Signup></Signup>}></Route>
      <Route exact path="/netflix" element={<Netflix></Netflix>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
