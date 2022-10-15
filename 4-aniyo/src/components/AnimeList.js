import React from "react";
import {
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
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
    console.log("Loading...");
  }

  if (error) {
    console.log(error);
  }

  const viewHandler = (id) => {
    navigate(`/about/${id}`);
  };

  return (
    <Container sx={{ py: 1 }}>
      <Typography variant="h4" sx={{ mt: 5, mb: 5 }}>
        {props.type}
      </Typography>
      <Grid container spacing={5} justifyContent={"center"}>
        {loading && !error && <CircularProgress />}
        {!loading &&
          !error &&
          animeList?.data.length > 0 &&
          animeList?.data.slice(0, 11).map((anime) => (
            <Grid key={anime.mal_id} item xs={10} sm={4} md={2}>
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
                  alt={formatName(anime.title)}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5">
                    {formatName(anime.title)}
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
