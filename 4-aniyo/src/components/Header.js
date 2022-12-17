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
    <AppBar>
      <Toolbar sx={{ my: 2 }}>
        <Box>
          <img
            src={AniyoLogo}
            alt="Aniyo Logo"
            style={{ width: "110px", cursor: "pointer" }}
            onClick={goBackToHome}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
