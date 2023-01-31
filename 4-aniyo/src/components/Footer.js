import React from "react";

import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Grid container sx={{ bgcolor: "#1e293b", p: 6, color: "white", mt: 10 }}>
      <Grid item xs={12} lg={10}>
        <Typography variant="h6" gutterBottom>
          {" "}
          Aniyo{" "}
        </Typography>
      </Grid>
      <Grid
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
      >
        <Typography onClick={() => navigate("/connect")}>
          Connect with me
        </Typography>
        <Typography onClick={() => console.log("Open github")}>
          Github
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
