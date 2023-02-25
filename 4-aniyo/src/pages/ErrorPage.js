import { Box, Typography } from "@mui/material";
import React from "react";

const ErrorPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Typography variant="h1">404 - Not Found!!!</Typography>
    </Box>
  );
};

export default ErrorPage;
