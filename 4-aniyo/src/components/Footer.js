import React from "react";

import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{ bgcolor: "primary.main", p: 6, color: "white", mt: 10 }}
      component="footer"
    >
      <Typography variant="h6" align="left" gutterBottom>
        Aniyo
      </Typography>
      <Typography align="right">Connect with me</Typography>
    </Box>
  );
};

export default Footer;
