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
import { useParams } from "react-router-dom";

const AboutAnime = () => {
  const { id } = useParams();
  const {
    data: anime,
    error,
    loading,
  } = useFetch(`https://api.jikan.moe/v4/anime/${id}`);

  return (
    <>
      <CssBaseline />
      {!error && !loading && (
        <>
          <Typography variant="h2" align="center" sx={{ mt: 20, mb: 5 }}>
            {anime?.data?.title}
          </Typography>
          <Grid container>
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "column",
                ml: "5rem",
                my: "2rem",
                width: "20rem",
              }}
            >
              <Card
                sx={{
                  borderRadius: "1rem",
                }}
              >
                <CardMedia
                  component="img"
                  image={anime?.data.images.jpg.large_image_url}
                  alt={anime?.data.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography>Aired: {anime?.data.aired.string}</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "column",
                ml: "5rem",
                mr: "5rem",
                my: "2rem",
                minWidth: "25rem",
                width: "80rem",
                height: "300",
              }}
            >
              <Card
                sx={{
                  borderRadius: "1rem",
                }}
              >
                <CardMedia
                  component="iframe"
                  title={`trailer ${anime?.data.title}`}
                  src={anime?.data.trailer.embed_url}
                  height={520}
                />
              </Card>
            </Grid>
          </Grid>
          <Grid sx={{ ml: "5rem", mr: "5rem" }}>
            <Typography sx={{ mt: "2rem", mb: "2rem" }} variant="h3">
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
        </>
      )}
    </>
  );
};

export default AboutAnime;
