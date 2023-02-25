import React, { lazy, Suspense } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Route, Routes } from "react-router-dom";
const AboutAnime = lazy(() => import("./pages/AboutAnime"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route
          path="/about/:id"
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <AboutAnime />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<p>Error page</p>}>
              <ErrorPage />
            </Suspense>
          }
        />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
