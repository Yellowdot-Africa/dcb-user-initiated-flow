import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/MainLayout";

const App: React.FC = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

    </>
  );
};

export default App;
