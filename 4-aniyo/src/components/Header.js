import React from "react";
import { AppBar, Toolbar } from "@mui/material";

import { useNavigate } from "react-router-dom";
import AniyoLogo from "./logo.png";
import { Box } from "@mui/system";

const Header = () => {
  const navigate = useNavigate();
  const goBackToHome = () => {
    navigate("/");
  };

  return (
    <AppBar position="absolute">
      <Toolbar sx={{ my: 2 }}>
        <Box sx={{ flexGrow: 1 }}>
          <img
            src={AniyoLogo}
            alt="Aniyo Logo"
            style={{ width: "110px" }}
            onClick={goBackToHome}
          />
        </Box>
        {/* <Box sx={{ width: "12rem" }}>
          <TextField variant="standard" label="Search" />
        </Box> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
