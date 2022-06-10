import Typography from "@material-ui/core/Typography";
import React from 'react'
import { MainContainer } from './MainContainer'
import { Form } from "./Form";
import { Input } from "./Input";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PrimaryButton } from "./PrimaryButton";
import * as yup from 'yup';
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox";
import parsePhoneNumberFromString from "libphonenumber-js";
// import { useData } from "./DataContext";


const schema = yup.object().shape({
    email: yup
        .string()
        .email("Email should have correct format")
        .required("Email is a required field"),
})

export const Step2 = () => {
    // const { setValues, data } = useState();

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({
        // defaultValues: {
        //     email: data.email,
        //     hasPhone: data.hasPhone,
        //     phoneNumber: data.phoneNumber,
        // },
        mode: "onBlur",
        resolver: yupResolver(schema)

    });

    const normalizePhoneNumber = (value) => {
        const phoneNumber = parsePhoneNumberFromString(value)
        if (!phoneNumber) {
            return value
        }

        return (
            phoneNumber.formatInternational()
        );
    };

    const hasPhone = watch("hasPhone");

    const onSubmit = (data) => {
        navigate("/step3");
        // setValues(data);
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
                            defaultValue={hasPhone}
                            defaultChecked={hasPhone}
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
                        // error={!!errors.phoneNumber}
                        // helperText={errors?.phoneNumber?.message}
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
