import React from "react";
import { AppBar, Toolbar } from "@mui/material";

import { useNavigate } from "react-router-dom";
import AniyoLogo from "./logo.png";

const Header = () => {
  const navigate = useNavigate();
  const goBackToHome = () => {
    navigate("/");
  };

  return (
    <AppBar position="absolute">
      <Toolbar sx={{ my: 2 }}>
        <img
          src={AniyoLogo}
          alt="Aniyo Logo"
          style={{ width: "110px" }}
          onClick={goBackToHome}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
