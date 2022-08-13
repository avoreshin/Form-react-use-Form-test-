import React from "react";
import {Container} from "@mui/material";

export const MainContainer = ({children, ...props}) => {
    const styles = {
        root: {
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
    }

    return (
        <Container
            style={styles.root}
            container="main"
            maxWidth="xs"
            {...props}
        >
            {children}
        </Container>
    );
};
