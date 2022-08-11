import React from "react";
import {Typography} from "@mui/material";
import {MainContainer} from "./MainContainer";
import {Form} from "./Form";
import {Input} from "./Input";
import {useForm} from "react-hook-form";
import {PrimaryButton} from "./PrimaryButton";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import {useNavigate} from "react-router-dom";
import { useData } from "../DataContext"

const schema = yup.object().shape({
    firstName: yup
        .string()
        .matches(/^([^0-9]*)$/, "First name should not contain number")
        .required("First name is a required field")
});

export const Step1 = () => {

    const { data, setValues } = useData({});

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        defaultValues: {firstName: data.firstName, lastName: data.lastName},
        mode: "onBlur",
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        setValues(data)
        console.log(data)
        navigate("/step3");
    };
    return (
        <>
            <MainContainer>
                <Typography>🦄 Step1</Typography>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        {...register("firstName")}
                        id="firstName"
                        type="text"
                        label="First Name"
                        error={!!errors.firstName}
                        helperText={errors?.firstName?.message}
                    />
                    <Input
                        {...register("lastName")}
                        id="lastName"
                        type="text"
                        label="Last Name"
                        error={!!errors.lastName}
                        helperText={errors?.lastName?.message}
                    />

                    <PrimaryButton>Next</PrimaryButton>
                </Form>

                <p>{onSubmit}</p>
            </MainContainer>
        </>
    );
};
