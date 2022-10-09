import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { Autocomplete, TextField } from "@mui/material";
import { Box } from "@mui/system";

const SearchAnime = () => {
  const navigate = useNavigate();
  const [fetchedAnimeList, setFetchedAnimeList] = useState([]);

  const searchHandler = (event) => {
    if (event.target.value.length >= 3) {
      fetch(`https://api.jikan.moe/v4/anime?q=${event.target.value}`)
        .then((response) => response.json())
        .then((data) => setFetchedAnimeList(data.data));
    }
  };
  const linkToAnime = (event) => {
    const id = fetchedAnimeList.filter(
      (anime) => anime.title === event.target.textContent
    )[0].mal_id;

    navigate(`/about/${id}`);
  };

  return (
    <Box display={"flex"} justifyContent="center" mt={5}>
      <Autocomplete
        id="anime-search-box"
        freeSolo
        onInputChange={searchHandler}
        onChange={(e) => linkToAnime(e)}
        options={
          fetchedAnimeList.length > 0
            ? fetchedAnimeList.map((option) => option.title)
            : []
        }
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
  );
};

export default SearchAnime;
