import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeLandingPage } from "../Home/HomeLandingPage/HomeLandingPage/LandingPage";
import { AboutUs } from "../AboutUs/AboutUs";

export function Routings() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLandingPage />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}
