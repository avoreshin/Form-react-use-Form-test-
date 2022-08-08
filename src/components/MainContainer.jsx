import React from "react";

import { Container, makeStyles } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
}));

export const MainContainer = ({ children, ...props }) => {
  const styles = useStyles();

  return (
    <Container
      className={styles.root}
      container="main"
      maxWidth="xs"
      {...props}
    >
      {children}
    </Container>
  );
};
