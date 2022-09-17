import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

import AnimationIcon from "@mui/icons-material/Animation";

const Header = () => {
  const goBackToHome = () => {
    //To-do: create a method to push homepage
    console.log("Welcome to Aniyo!!!");
  };

  return (
    <AppBar position="relative">
      <Toolbar>
        <AnimationIcon fontSize="large" sx={{ mr: 2 }} onClick={goBackToHome} />
        <Typography variant="h3" onClick={goBackToHome}>
          Aniyo
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
