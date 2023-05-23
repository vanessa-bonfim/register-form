import React, { useState } from "react";
import { Button, TextField, FormControlLabel, Switch } from "@mui/material";

function FormRegister({ onSubmit, validationCPF }) {
  /*
    Ao remover props e passa {onSubmit} como paramentro da função, é o mesmo que passar
    const onSubmit = props.onSubmit; dentro da função.
  */
  /* 
    const arr = useState("");
    const name = arr[0];
    const setName = arr[1];
    Ao refatorar o de cima temos este código: const [name, setName] = useState();

    */
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [cpf, setCpf] = useState("");
  const [sale, setSale] = useState(true);
  const [news, setNews] = useState(false);
  const [error, setError] = useState({cpf:{valid: true, text:""}});

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({ name, nickname, cpf, sale, news });
      }}
    >
      <TextField
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        id="name"
        label="Nome"
        variant="outlined"
        margin="dense"
        fullWidth
      />
      <TextField
        value={nickname}
        onChange={(event) => {
          setNickname(event.target.value);
        }}
        id="nickname"
        label="Sobrenome"
        variant="outlined"
        margin="dense"
        fullWidth
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={(event) => {
          const itsValid = validationCPF(cpf)
          setError({cpf: itsValid})
        }}
        error={!error.cpf.valid}
        helperText={error.cpf.text}
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <FormControlLabel
        control={
          <Switch
            checked={sale}
            onChange={(event) => {
              setSale(event.target.checked);
            }}
            name="sale"
          />
        }
        label="Promoção"
      />
      <FormControlLabel
        control={
          <Switch
            checked={news}
            onChange={(event) => {
              setNews(event.target.checked);
            }}
            name="news"
          />
        }
        label="Novidades"
      />
      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormRegister;
