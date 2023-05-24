import React from "react";
import { Button, TextField } from "@mui/material";

function DeliveryData() {
  return (
    <form>
      <TextField
        id="cep"
        label="CEP"
        type="number"
        variant="outlined"
        margin="dense"
        fullWidth
      />
      <TextField
        id="address"
        label="Endereço"
        type="text"
        variant="outlined"
        margin="dense"
        fullWidth
      />
      <TextField
        id="number"
        label="Número"
        type="number"
        variant="outlined"
        margin="dense"
      />
      <TextField
        id="state"
        label="Estado"
        type="text"
        variant="outlined"
        margin="dense"
      />
      <TextField
        id="city"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="dense"
      />
      <Button type="submit" variant="contained" color="primary" margin="dense" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DeliveryData;
