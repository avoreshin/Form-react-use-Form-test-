import {List, ListItem, ListItemIcon, ListItemText, Paper} from "@mui/material";
import {CloudUpload, InsertDriveFile} from '@mui/icons-material';
import React from "react";
import Dropzone, {useDropzone} from "react-dropzone";
import {Controller} from "react-hook-form"

export const FileInput = ({control, name}) => {
    useDropzone({
        accept: {
            "image/jpeg": [],
            "image/png": [],
        },
    });

    const Style = {
        root: {
            background: "#eee",
            textAlign: "center",
            cursor: "pointer",
            color: "#333",
            padding: "10px",
            marginTop: "20px"
        },
        icon: {
            marginTop: "16px",
            color: "#888",
            fontSize: "42px"
        }
    }

    return (
        <Controller
            control={control}
            name={name}
            defaultValue={[]}
            render={({field: {onChange, onBlur, value}}) =>
                <>
                    <Dropzone onDrop={onChange}>
                        {
                            ({getRootProps, getInputProps}) => (
                                <Paper style={Style.root} variant="outlined" {...getRootProps()}>
                                    <CloudUpload style={Style.icon}/>
                                    <input {...getInputProps()} name={name}/>
                                    <p>Drag 'n' drop some files here, or click to select files</p>
                                    <em>(Only *.jpeg and *.png images will be accepted)</em>
                                </Paper>)
                        }
                    </Dropzone>
                    <List>
                        {
                            value.map((f, index) => (
                                <ListItem key={index}>
                                    <ListItemIcon>
                                        <InsertDriveFile/>
                                        <ListItemText primary={f.name} secondary={f.size}/>
                                    </ListItemIcon>
                                </ListItem>
                            ))
                        }
                    </List>

                </>}
        />
    );
};
