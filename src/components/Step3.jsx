import { Typography } from "@mui/material";
import React from 'react'
import { useForm } from 'react-hook-form'
import { FileInput } from './FileInput'
import { Form } from './Form'
import { MainContainer } from './MainContainer'

export const Step3 = () => {

  const { control, handleSubmit } = useForm();

  return (
    <MainContainer>
      <Typography>🦄 Step3</Typography>
      <Form>
        <FileInput name="files" control={control} />
      </Form>
    </MainContainer>
  )
}


