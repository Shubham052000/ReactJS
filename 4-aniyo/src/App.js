import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import AboutAnime from "./pages/AboutAnime";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <MainPage />
      {/* <AboutAnime id={"1"} /> */}
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
