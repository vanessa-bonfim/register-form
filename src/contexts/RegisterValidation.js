import React from "react";

const RegisterValidation = React.createContext(
    { 
        cpf: noValidation, 
        pass: noValidation, 
        name: noValidation,
    }
);

function noValidation(data) {
   console.log(data);
   return {
    valid: true,
    text: "",
} 
}
export default RegisterValidation;