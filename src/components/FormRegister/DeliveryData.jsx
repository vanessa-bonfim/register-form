import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

function DeliveryData({ onSubmit }) {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      onSubmit({cep, address, number, state, city});
    }}>
      <TextField
        value={cep}
        onChange={(event) => {
          setCep(event.target.value);
        }}
        id="cep"
        label="CEP"
        type="number"
        variant="outlined"
        margin="dense"
        fullWidth
      />
      <TextField
        value={address}
        onChange={(event) => {
          setAddress(event.target.value);
        }}
        id="address"
        label="Endereço"
        type="text"
        variant="outlined"
        margin="dense"
        fullWidth
      />
      <TextField
        value={number}
        onChange={(event) => {
          setNumber(event.target.value);
        }}
        id="number"
        label="Número"
        type="number"
        variant="outlined"
        margin="dense"
      />
      <TextField
        value={state}
        onChange={(event) => {
          setState(event.target.value);
        }}
        id="state"
        label="Estado"
        type="text"
        variant="outlined"
        margin="dense"
      />
      <TextField
        value={city}
        onChange={(event) => {
          setCity(event.target.value);
        }}
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
