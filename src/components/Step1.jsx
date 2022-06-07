import React from "react";
import Typography from "@material-ui/core/Typography";
import { MainContainer } from "./MainContainer";
import { Form } from "./Form";
import { Input } from "./Input";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "./PrimaryButton";
// import yup from "yup";

// const schema = yup.object().shape({
//   firstName: yup
//     .string()
//     .matches(/^[^0-9]*)$/, "First name should not contain number")
//     .required("First name is a required field")
// });

export const Step1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(data);
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
          />
          <Input
            {...register("lastName")}
            id="lastName"
            type="text"
            label="Last Name"
          />

          <PrimaryButton>Next</PrimaryButton>
        </Form>

        <p>{onSubmit}</p>
      </MainContainer>
    </>
  );
};
