import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

import AnimationIcon from "@mui/icons-material/Animation";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const goBackToHome = () => {
    navigate("/");
  };

  return (
    <AppBar position="relative">
      <Toolbar sx={{ my: 2 }}>
        <AnimationIcon fontSize="large" sx={{ mr: 2 }} onClick={goBackToHome} />
        <Typography variant="h3" onClick={goBackToHome}>
          Aniyo
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
