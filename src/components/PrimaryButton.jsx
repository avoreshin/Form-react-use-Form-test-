import React from "react";
import {Button} from "@mui/material";


export const PrimaryButton = ({children, props}) => {
    const styles = {
        root: {

            // margin: 4
        }
    }

    return (
        <Button
            style={styles.root}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            {...props}
        >
            {children}
        </Button>
    );
};
