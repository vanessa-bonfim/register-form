import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

function UserData({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      onSubmit({email, pass});
    }}>
      <TextField
      value={email} // Valor do campo de texto
      onChange={(event) => {
        // Manipulador de evento para atualizar o estado "email"
        setEmail(event.target.value);
      }}
        id="email"
        label="Email"
        type="email"
        required
        variant="outlined"
        margin="dense"
        fullWidth
      />
      <TextField
      value={pass} // Valor do campo de texto
      onChange={(event) => {
        // Manipulador de evento para atualizar o estado "pass"
        setPass(event.target.value);
      }}
        id="pass"
        label="Senha"
        type="password"
        required
        variant="outlined"
        margin="dense"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default UserData;
