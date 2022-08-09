import React from 'react';
import { Typography } from "@mui/material";

export const Header = () => {

  const styles = {
    root: {
      textAlign: "center",
      fontSize: "40px",
      color: '#333',
      textShadow: "1px 1px #333"
    }
  }

  return (

    <Typography
        style={styles.root}
        component="h1" variant="h5">
      Best form
    </Typography>
  )
}