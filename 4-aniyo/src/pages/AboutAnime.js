import {
  Box,
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

  console.log("link here =>", anime?.data.trailer.embed_url);

  return (
    <>
      <CssBaseline />
      {!error && !loading && (
        <>
          <Typography variant="h2" align="center" sx={{ mt: 20, mb: 5 }}>
            {anime?.data?.title}
          </Typography>

          {/* Anime Image & Trailer Contaner*/}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              mx: "5rem",
              gap: "5rem",
            }}
          >
            {/* Anime Image */}
            <Card
              sx={{
                borderRadius: "1rem",
                minWidth: "10rem",
                width: "20%",
              }}
            >
              <CardMedia
                component="img"
                image={anime?.data.images.jpg.large_image_url}
                alt={anime?.data.title}
              />
              <CardContent>
                <Typography>Aired: {anime?.data.aired.string}</Typography>
              </CardContent>
            </Card>
            {/* Trailer Video */}
            {anime?.data.trailer.embed_url && (
              <Card
                sx={{
                  borderRadius: "1rem",
                  width: "70%",
                }}
              >
                <CardMedia
                  component="iframe"
                  title={`trailer ${anime?.data.title}`}
                  src={anime?.data.trailer.embed_url}
                  height={520}
                />
                <CardContent>
                  <Typography>Trailer: {anime?.data?.title}</Typography>
                </CardContent>
              </Card>
            )}
          </Box>
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
