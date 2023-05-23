import React, { Component } from 'react';
import FormRegister from './components/FormRegister/FormRegister';
import { Container, Typography } from '@mui/material';

import '@fontsource/roboto'; // Importação de uma fonte externa 

import './App.css';
// Importação do arquivo de estilos CSS

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        {/* Container principal do aplicativo com largura máxima definida */}
        <Typography variant="h3" align='center'>
          {/* Título do formulário */}
          Formulário de Cadastro
        </Typography>
        <FormRegister onSubmit={onSubmitForm} validationCPF={validateCPF} />
        {/* Componente do formulário de registro com funções de envio e validação */}
      </Container>
    );
  }
}

function onSubmitForm(datas) {
  console.log(datas);
  // Função de callback para lidar com os dados enviados pelo formulário
}

function validateCPF(cpf) {
  if (cpf.length !== 11) {
    return { valid: false, text: "O campo CPF deve ter 11 dígitos!" };
    // Validação do campo CPF para verificar se possui 11 dígitos
  } else {
    return { valid: true, text: "" };
  }
}

export default App;
// Exportação do componente App como componente padrão do arquivo
