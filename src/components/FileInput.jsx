import {List, ListItem, ListItemIcon, ListItemText, Paper} from "@mui/material";
import {CloudUpload, InsertDriveFile} from '@mui/icons-material';
import React from "react";
import Dropzone, {useDropzone} from "react-dropzone";
import {Controller} from "react-hook-form"

export const FileInput = ({control, name}) => {
    const {acceptedFiles, fileRejections, getRootProps, getInputProps} =
        useDropzone({
            accept: {
                "image/jpeg": [],
                "image/png": [],
            },
        });

    const acceptedFileItems = acceptedFiles.map((file) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    const fileRejectionItems = fileRejections.map(({file, errors}) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
            <ul>
                {errors.map((e) => (
                    <li key={e.code}>{e.message}</li>
                ))}
            </ul>
        </li>
    ));

    return (
        <Controller
            control={control}
            name={name}
            defaultValue={[]}
            render={({ field: {onChange, onBlur, value}}) =>
                <>
                    <Dropzone onDrop={onChange}>
                        {
                            ({getRootProps, getInputProps}) => (<Paper variant="outlined" {...getRootProps()}>
                                <CloudUpload/>
                                <input {...getInputProps()} name={name}/>
                                <p>Drag 'n' drop some fles here, or click to select files</p>
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
