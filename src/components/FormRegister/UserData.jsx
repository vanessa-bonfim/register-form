import React from "react";
import { Button, TextField } from "@mui/material";

function UserData({ onSubmit }) {
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      onSubmit();
    }}>
      <TextField
        id="email"
        label="Email"
        type="email"
        required
        variant="outlined"
        margin="dense"
        fullWidth
      />
      <TextField
        id="password"
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
