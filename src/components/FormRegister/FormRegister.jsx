import React, { useState } from "react";
import PersonalData from "./PersonalData";
import UserData from "./UserData";
import DeliveryData from "./DeliveryData";

function FormRegister({ onSubmit, validationCPF }) {

  const [currentStage, setCurrentStage] = useState(0);

  const form = [
    <UserData onSubmit={next}/>,
    <PersonalData onSubmit={next} validationCPF={validationCPF}/>,
    <DeliveryData onSubmit={onSubmit}/>,

  ]

  function next() {
    setCurrentStage(currentStage+1);
  }

/*  
  Criamos um array chamado form lá acima para substituir este código abaixo: 

  function currentForm(stage) {
    switch (stage) {
      case 0:
        return <UserData onSubmit={next}/>;
      case 1:
        return <PersonalData onSubmit={next} validationCPF={validationCPF}/>;
      case 2:
        return <DeliveryData onSubmit={onSubmit}/>;

      default:
        return <Typography>Erro ao selecionar formulário</Typography>;
    }
  } 
  
  Depois colocamos no return {form[currentStage]}
  */

  return (
    <>
      {form[currentStage]}
    </>
  );
}



export default FormRegister;
