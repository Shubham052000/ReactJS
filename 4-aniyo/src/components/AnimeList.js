import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { formatName } from "../utils/anime-utils";

const AnimeList = (props) => {
  const { data: animeList, loading, error } = useFetch(props?.url);
  const navigate = useNavigate();

  if (loading) {
  }

  if (error) {
    console.log(error);
  }

  const viewHandler = (id) => {
    navigate(`/about/${id}`);
  };

  return (
    <Container maxWidth={"xl"}>
      <Typography variant="h4" sx={{ my: 5 }}>
        {props.type}
      </Typography>
      <Grid container spacing={3} justifyContent={"center"}>
        {loading && !error && <CircularProgress />}
        {!loading &&
          !error &&
          animeList?.data?.length > 0 &&
          animeList?.data?.slice(0, 11).map((anime) => (
            <Grid key={anime.mal_id} item xs={8} sm={4} md={2}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                }}
                onClick={() => {
                  viewHandler(anime.mal_id);
                }}
              >
                <CardMedia
                  component="img"
                  image={anime.images.jpg.image_url}
                  alt={formatName(anime.title)}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5">
                    {formatName(anime.title)}
                  </Typography>
                  <Typography>{anime.aired.string}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default AnimeList;
