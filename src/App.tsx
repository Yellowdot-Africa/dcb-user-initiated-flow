import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import NotFound from "./Pages/NotFound";

const App: React.FC = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
         <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
