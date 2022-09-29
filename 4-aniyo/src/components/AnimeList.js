import React from "react";

import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

import { Container } from "@mui/system";

import useFetch from "../hooks/useFetch";
import AboutAnime from "../pages/AboutAnime";

const AnimeList = (props) => {
  const { data: animeList, loading, error } = useFetch(props?.url);

  if (loading) {
    console.log("Loading...");
  }

  if (error) {
    console.log(error);
  }

  const viewHandler = (id) => {
    // To-do: add routing to id
    console.log(id);
  };

  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={4} marginTop="1rem">
        {animeList?.data.length > 0 &&
          animeList?.data.splice(0, 11).map((anime) => (
            <Grid key={anime.mal_id} item xs={12} sm={4} md={2}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  image={anime.images.jpg.image_url}
                  alt={anime.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5">
                    {anime.title}
                  </Typography>
                  <Typography>{anime.aired.string}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => {
                      viewHandler(anime.mal_id);
                    }}
                  >
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default AnimeList;
