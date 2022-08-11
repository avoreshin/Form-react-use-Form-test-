import React from 'react'
import { useForm } from "react-hook-form";
import { Typography, Checkbox, FormControlLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import parsePhoneNumber from 'libphonenumber-js'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';


import { MainContainer } from './MainContainer'
import { Form } from "./Form";
import { Input } from "./Input";
import { PrimaryButton } from "./PrimaryButton";
import { useData } from "../DataContext"


const schema = yup.object().shape({
    email: yup
        .string()
        .email("Email should have correct format")
        .required("Email is a required field"),
})

export const Step2 = () => {
    const { data, setValues } = useData();

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({
        defaultValues: {
            email: data.email,
            hasPhone: data.hasPhone,
            phoneNumber: data.phoneNumber,
        },
        mode: "onBlur",
        resolver: yupResolver(schema)

    });

    const normalizePhoneNumber = (value) => {
        const phoneNumber = parsePhoneNumber(value)
        if (!phoneNumber) {
            return value
        }

        return (
            phoneNumber.formatInternational()
        );
    };

    const hasPhone = watch("hasPhone");

    const onSubmit = (data) => {
        setValues(data);
        console.log(data)
        navigate("/step3");
    };

    return (
        <MainContainer>
            <Typography>
                🦄 Step2
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    {...register("email")}
                    id="email"
                    type="email"
                    label="Email"
                    name="email"
                    required
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            defaultValue={data.hasPhone}
                            defaultChecked={data.hasPhone}
                            color="primary"
                            {...register("hasPhone")}
                            name="hasPhone" />
                    }
                    label="Do you have a phone"
                />
                {
                    hasPhone &&
                    <Input
                        {...register("phoneNumber")}
                        id="phoneNumber"
                        type="tel"
                        label="Phone number"
                        name="phoneNumber"
                        error={!!errors.phoneNumber}
                        helperText={errors?.phoneNumber?.message}
                        onChange={(event) => {
                            event.target.value = normalizePhoneNumber(event.target.value);
                        }}
                    />
                }
                <PrimaryButton>NEXT</PrimaryButton>
            </Form>
        </MainContainer>
    )
}
