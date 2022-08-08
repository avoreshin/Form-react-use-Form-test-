import React from 'react'
import { Typography, makeStyles } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
    textAlign: "center",
    fontSize: "40px",
    color: "deeppink",
    textShadow: "1px 1px darkmagenta"
  }
}))

export const Header = () => {

  const styles = useStyles()

  return (

    <Typography className={styles.root} component="h1" variant="h5">
      Best form
    </Typography>
  )
}