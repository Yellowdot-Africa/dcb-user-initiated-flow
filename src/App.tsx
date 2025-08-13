import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import LandingPage from "./pages_temp/LandingPage";
import NotFound from "./pages_temp/NotFound";

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
