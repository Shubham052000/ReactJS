import {
  Card,
  CardMedia,
  CardContent,
  CssBaseline,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import useFetch from "../hooks/useFetch";

const AboutAnime = (props) => {
  const {
    data: anime,
    error,
    loading,
  } = useFetch(`https://api.jikan.moe/v4/anime/${props.id}`);
  if (!loading && !error && anime) {
    console.log(anime.data);
  }
  return (
    <>
      <CssBaseline />
      <main>
        <Typography variant="h2" align="center" sx={{ my: 5 }}>
          {anime?.data?.title}
        </Typography>
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            ml: "5rem",
            width: "20rem",
            borderRadius: "0.5rem",
          }}
        >
          <CardMedia
            component="img"
            image={anime?.data.images.jpg.large_image_url}
            alt={anime?.data.title}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5">
              {anime?.title}
            </Typography>
            <Typography>{anime?.data.aired?.string}</Typography>
          </CardContent>
        </Card>
        <Grid sx={{ ml: "5rem", mr: "5rem" }}>
          <Typography sx={{ mt: "5rem", mb: "2rem" }} variant="h3">
            Synopsis
          </Typography>
          <Typography
            sx={{ mt: "2rem", mb: "5rem" }}
            variant="subtitle1"
            fontSize={"1.25rem"}
          >
            {anime?.data.synopsis}
          </Typography>
        </Grid>
      </main>
    </>
  );
};

export default AboutAnime;
