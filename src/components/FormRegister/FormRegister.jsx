import React, { useEffect, useState } from "react";
import PersonalData from "./PersonalData";
import UserData from "./UserData";
import DeliveryData from "./DeliveryData";
import { Step, StepLabel, Stepper, Typography } from "@mui/material";

function FormRegister({ onSubmit, validations }) {

  const [currentStage, setCurrentStage] = useState(0);
  const [collectedData, setData] = useState({});
  useEffect(()=>{
    if(currentStage === form.length){
      onSubmit(collectedData);
    }
  })
  const form = [
    <UserData onSubmit={collectData} validations={validations}/>,
    <PersonalData onSubmit={collectData} validations={validations}/>,
    <DeliveryData onSubmit={collectData} validations={validations}/>,
    <Typography variant="h5" margin="normal">Obrigada pelo cadastro!</Typography>
  ]
  function collectData(data) {
    setData({...collectedData, ...data});
    /* console.log(collectedData); */
    next();
  }
  function next() {
    setCurrentStage(currentStage + 1);
  }
  return (
    <>
      <Stepper activeStep={currentStage}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
      </Stepper>
      {form[currentStage]}
    </>
  );
}



export default FormRegister;
