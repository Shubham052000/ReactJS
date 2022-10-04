import React from "react";
import { CssBaseline, Typography } from "@mui/material";
import AnimeList from "../components/AnimeList";

const MainPage = () => {
  return (
    <>
      <CssBaseline />
      <main>
        <Typography variant="h4" align="center" sx={{ mt: 20, mb: 2 }}>
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
