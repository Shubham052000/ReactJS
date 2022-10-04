import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import AboutAnime from "./pages/AboutAnime";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about/:id" element={<AboutAnime />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
