import React from "react";
import { CssBaseline, Typography } from "@mui/material";

import SearchAnime from "../components/SearchAnime";
import AnimeList from "../components/AnimeList";

const MainPage = () => {
  return (
    <>
      <CssBaseline />
      <main>
        <Typography
          variant="h1"
          align="center"
          sx={{ pt: 20, mb: 2, fontSize: 64 }}
        >
          Your new Anime-ctionary
        </Typography>
        <Typography
          variant="h4"
          align="center"
          sx={{ mr: 10, ml: 10, color: "text.secondary", fontSize: 24 }}
          paragraph
        >
          Discover and share your favorite anime with Aniyo.
        </Typography>
        <SearchAnime />
        <AnimeList
          type="Airing This Season"
          url={"https://api.jikan.moe/v4/seasons/now"}
        />

        <AnimeList
          type="Top Anime"
          url={"https://api.jikan.moe/v4/top/anime"}
        />
        <AnimeList
          type="Upcoming Anime"
          url={"https://api.jikan.moe/v4/seasons/upcoming"}
        />
      </main>
    </>
  );
};

export default MainPage;
