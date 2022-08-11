import React from 'react'
import {MainContainer} from "./MainContainer";
import {
    ListItem, ListItemText,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import {useData} from "../DataContext";
import {Link} from "react-router-dom"

export const Result = () => {
    const {data} = useData()
    const entries = Object.entries(data).filter((entry) => entry[0] !== "files")
    const {files} = data;
    return (
        <MainContainer>
            <Typography component="h2" variant="h5"> Form Values</Typography>
            <TableContainer component={Paper} style = {{margin: "30px"}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Field
                            </TableCell>
                            <TableCell align="right">
                                Value
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            entries.map((entry) => (
                                <TableRow key={entry[0]}>
                                    <TableCell>
                                        {entry[0]}
                                    </TableCell>
                                    <TableCell>
                                        {entry[1]}
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>

            {files &&
                <Typography component="h2" variant="h5">
                    📦 Files
                </Typography>}
            <List>
                {
                    files.map((f,index) =>(
                        <ListItem key = {index}>
                            <ListItemText primary={f.name} secondary={f.size}/>

                        </ListItem>
                        )

                    )
                }
            </List>
            <Link to={'/'}>Start over</Link>
        </MainContainer>
    )
}