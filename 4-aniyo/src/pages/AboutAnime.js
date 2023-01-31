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

  console.log("anime data =>", anime?.data);

  return (
    <>
      <CssBaseline />
      {!error && !loading && anime?.data && (
        <>
          {/* Anime Image & Trailer Contaner*/}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              mt: 20,
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
                  <Typography>Trailer: {anime?.data.title}</Typography>
                </CardContent>
              </Card>
            )}
          </Box>
          <Grid sx={{ ml: "5rem", mr: "5rem", py: "2rem" }}>
            <Typography
              sx={{ mt: "2rem", mb: "1rem", fontWeight: 400, fontSize: 40 }}
              variant="h1"
            >
              {anime?.data.title}
            </Typography>
            <Typography
              sx={{
                display: "inline-block",
                fontWeight: 500,
                fontSize: 20,
              }}
              variant="subtitle2"
            >
              {"❓ "}Genre:&nbsp;
            </Typography>
            <Typography
              sx={{
                display: "inline-block",
                fontStyle: "oblique",
                fontSize: 18,
              }}
              variant="body1"
            >
              {`${anime.data?.genres.map((genre) => genre.name).join(", ")}`}
            </Typography>
            <br />
            <Typography
              sx={{
                display: "inline-block",
                fontWeight: 500,
                fontSize: 20,
              }}
              variant="subtitle2"
            >
              {"📺 "}
              Rating:&nbsp;
            </Typography>
            <Typography
              sx={{
                display: "inline-block",
                fontSize: 18,
              }}
              variant="body1"
            >
              {anime.data?.rating}
            </Typography>
            <br />
            <Typography
              sx={{
                display: "inline-block",
                fontWeight: 500,
                fontSize: 20,
              }}
              variant="subtitle2"
            >
              {"⭐ "}Score:&nbsp;
            </Typography>
            <Typography
              sx={{
                display: "inline-block",
                fontSize: 18,
              }}
              variant="body1"
            >
              {anime.data?.score
                ? `${anime.data?.score} (${anime.data?.scored_by})`
                : "Not yet rated"}
            </Typography>
            <br />
            <Typography
              sx={{
                mt: "2rem",
                mb: "1rem",
                display: "block",
              }}
              variant="subtitle2"
              fontSize={"1.5rem"}
            >
              Synopsis{" 👀"}
            </Typography>

            <Typography
              sx={{ mb: "5rem" }}
              variant="subtitle1"
              fontSize={"1.25rem"}
            >
              {anime.data?.synopsis}
            </Typography>
          </Grid>
        </>
      )}
    </>
  );
};

export default AboutAnime;
