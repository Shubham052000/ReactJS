import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { CssBaseline, Typography } from "@mui/material";
import AnimeList from "../components/AnimeList";

const MainPage = () => {
  const [topAnime, setTopAnime] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetch("https://api.jikan.moe/v4/top/anime");
      const data = await fetchedData.json();
      data && setTopAnime(data.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <CssBaseline />
      <header>
        <Header />
      </header>
      <main>
        <Typography
          variant="h4"
          align="center"
          sx={{ mr: 10, ml: 10, mt: 5, mb: 2 }}
        >
          The new anime platform
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{ mr: 10, ml: 10, color: "text.secondary" }}
          paragraph
        >
          Discover and share your favorite anime with Aniyo.
        </Typography>
        <Typography variant="h4" sx={{ ml: 6, mt: 5 }}>
          Top Anime
        </Typography>
        {topAnime.length > 0 && <AnimeList animeList={topAnime} />}
        <Typography variant="h4" sx={{ ml: 6, mt: 5 }}>
          Upcoming Anime
        </Typography>
        {/* <AnimeList /> */}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainPage;
