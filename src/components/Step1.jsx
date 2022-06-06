import React from "react";
import Typography from "@material-ui/core/Typography";
import { MainContainer } from "./MainContainer";
import { Form } from "./Form";
import { Input } from "./Input";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "./PrimaryButton";

export const Step1 = () => {
  const { register, handleSubmit, formState:{errors} } = useForm({
    mode: 'onBlur',
  });
  return (
    <>
      <MainContainer>
        <Typography>🦄 Step1</Typography>
        <Form>
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
        </Form>
        <PrimaryButton>Next</PrimaryButton>
      </MainContainer>
    </>
  );
};
