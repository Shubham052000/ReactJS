import {
  Card,
  CardMedia,
  CardContent,
  CssBaseline,
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
          About {anime?.data?.title}
        </Typography>
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
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
      </main>
    </>
  );
};

export default AboutAnime;
