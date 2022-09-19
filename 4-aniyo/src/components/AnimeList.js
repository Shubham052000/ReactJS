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

const AnimeList = (props) => {
  const animeList = props.animeList;
  console.log("image of 0th element", animeList[0].images.jpg.image_url);
  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={4} marginTop="1rem">
        {animeList.length > 0 &&
          animeList.map((anime) => (
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
                  <Button size="small" color="primary">
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
