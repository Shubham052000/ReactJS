import React from "react";
import {
  Autocomplete,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import AnimeList from "../components/AnimeList";
import { Box } from "@mui/system";

const top100Films = [{ title: "Jujutsu kaisen" }, { title: "Tokyo Ghoul" }];
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
        <Box display={"flex"} justifyContent="center" mt={5}>
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={top100Films.map((option) => option.title)}
            renderInput={(params) => (
              <>
                <TextField {...params} label="Search" />
              </>
            )}
            sx={{
              width: "30rem",
            }}
          />
        </Box>
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
