import React from 'react'
import {MainContainer} from "./MainContainer";
import {
    List,
    ListItem, ListItemIcon, ListItemText,
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
import {Image, InsertDriveFile} from "@mui/icons-material";
import {PrimaryButton} from "./PrimaryButton";
import Swal from "sweetalert2";
import ReactConfetti from "react-confetti";

export const Result = () => {

    const [success, setSuccess] = React.useState(false);
    const {data} = useData()
    const entries = Object.entries(data).filter((entry) => entry[0] !== "files")
    const {files} = data;
    console.log(typeof files)

    const onSubmit = async () => {
        const formData = new FormData();
        if (data.files) {
            data.files.forEach(file => {
                formData.append("files", file, file.name)
            })
        }
        entries.forEach(entry => {
            formData.append(entry[0], entry[1].toString())
        })

        const res = await fetch("http://localhost:5000/", {
            method: "POST",
            body: formData
        })
        if (res.status === 200){
            await Swal.fire("Great job", "You`ve passed the challenge ", "success");
            setSuccess(true);
        }
        if(success){
            return <ReactConfetti/>
        }
    }
    return (
        <MainContainer>

            <Typography component="h2" variant="h5"> Form Values</Typography>
            <TableContainer style={{margin: "30px"}}>
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
                            entries.toArray.map((entry) => (
                                <TableRow key={entry[0]}>
                                    <TableCell>
                                        {entry[0]}
                                    </TableCell>
                                    <TableCell align={"right"}>
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
                    files.map((f, index) => (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    <InsertDriveFile/>
                                </ListItemIcon>
                                <ListItemText primary={f.name} secondary={f.size}/>
                                <Image src={f.path} alt="fff"/>
                            </ListItem>
                        )
                    )

                }
            </List>
            <PrimaryButton onClick={onSubmit}>Submit</PrimaryButton>
            <Link to={'/'}>Start over</Link>
        </MainContainer>
    )
}