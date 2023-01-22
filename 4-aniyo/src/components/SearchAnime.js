import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { Autocomplete, TextField } from "@mui/material";
import { Box } from "@mui/system";

const SearchAnime = () => {
  const navigate = useNavigate();
  const [searchedAnime, setSearchedAnime] = useState("");
  const [fetchedAnimeList, setFetchedAnimeList] = useState([]);

  useEffect(() => {
    let timer = setTimeout(() => {
      searchHandler(searchedAnime);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchedAnime]);

  const searchHandler = (searchedString) => {
    if (searchedString.length >= 3) {
      fetch(`https://api.jikan.moe/v4/anime?q=${searchedString}`)
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
    <Box
      display={"flex"}
      justifyContent="center"
      mt={5}
      ml={"1rem"}
      mr={"1rem"}
    >
      <Autocomplete
        id="anime-search-box"
        freeSolo
        onInputChange={(e) => setSearchedAnime(e.target.value)}
        onChange={(e) => linkToAnime(e)}
        options={
          fetchedAnimeList.length > 0
            ? fetchedAnimeList.map((option) => option.title)
            : []
        }
        renderInput={(params) => (
          <>
            <TextField
              {...params}
              label="Search new or yours favorites here..."
            />
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
