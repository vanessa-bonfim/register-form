import React, { useContext, useState } from "react";
import { Button, TextField } from "@mui/material";
import RegisterValidation from "../../contexts/RegisterValidation";

function UserData({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState({
    email: { valid: true, text: "" },
    pass: { valid: true, text: "" },
  });

  const validations = useContext(RegisterValidation);

  function validateFields(event) {
    const { name, value } = event.target;
    const newState = { ...error };
    newState[name] = validations[name](value);
    setError(newState);
  }

  function canSend() {
    for(let field in error){
      if (!error[field].valid) {
        return false
      }
      return true;
    }
  }
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if(canSend()){
          onSubmit({ email, pass });
        }
      }}
    >
      <TextField
        value={email} // Valor do campo de texto
        onChange={(event) => {
          // Manipulador de evento para atualizar o estado "email"
          setEmail(event.target.value);
        }}
        id="email"
        label="Email"
        name="email"
        type="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={pass} // Valor do campo de texto
        onChange={(event) => {
          // Manipulador de evento para atualizar o estado "pass"
          setPass(event.target.value);
        }}
        onBlur={validateFields}
        error={!error.pass.valid}
        helperText={error.pass.text}
        id="pass"
        name="pass"
        label="Senha"
        type="password"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
      Próximo
      </Button>
    </form>
  );
}

export default UserData;
