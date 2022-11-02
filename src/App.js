import HomeScreen from "./pages/HomeScreen";
import { Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen/>}></Route>
      </Routes>
    </>
  );
}

export default App;
