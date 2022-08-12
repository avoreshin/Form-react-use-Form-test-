import {Typography} from "@mui/material";
import React from 'react'
import {useForm} from 'react-hook-form'
import {FileInput} from './FileInput'
import {Form} from './Form'
import {MainContainer} from './MainContainer'
import {PrimaryButton} from "./PrimaryButton";
import {useNavigate} from "react-router-dom";
import {useData} from "../DataContext";

export const Step3 = () => {
    const {data, setValues} = useData();
    const navigate = useNavigate();
    const {control, handleSubmit} = useForm({
            defaultValues: {
                files: data.files
            }
        }
    );
    const onSubmit = (data) => {
        setValues(data);
        console.log(data)
        navigate("/result");
    }
    return (
        <MainContainer>
            <Typography>🦄 Step3</Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FileInput name="files" control={control}/>
                <PrimaryButton>Next</PrimaryButton>
            </Form>
        </MainContainer>
    )
}


