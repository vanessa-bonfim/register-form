import React, { Component } from "react";
import FormRegister from "./components/FormRegister/FormRegister";
import { Container, Typography } from "@mui/material";
import { validateCPF, validatePass, validateName } from "./models/register";

import "@fontsource/roboto"; // Importação de uma fonte externa

import "./App.css";
import RegisterValidation from "./contexts/RegisterValidation";
// Importação do arquivo de estilos CSS

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        {/* Container principal do aplicativo com largura máxima definida */}
        <Typography variant="h3" align="center" margin="normal">
          {/* Título do formulário */}
          Formulário de Cadastro
        </Typography>
        <RegisterValidation.Provider
          value={{ cpf: validateCPF, pass: validatePass, name: validateName }}
        >
          <FormRegister onSubmit={onSubmitForm} validations />
          {/* Componente do formulário de registro com funções de envio e validação */}
        </RegisterValidation.Provider>
      </Container>
    );
  }
}

function onSubmitForm(datas) {
  console.log(datas);
  // Função de callback para lidar com os dados enviados pelo formulário
}

export default App;
// Exportação do componente App como componente padrão do arquivo
