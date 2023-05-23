import React, { Component} from 'react';
import FormRegister from './components/FormRegister/FormRegister';
import { Container, Typography } from '@mui/material';

/* import '@fontsource/roboto'; */
import './App.css';
class App extends Component {
  render(){
    return (
      <Container component="article" maxWidth="sm" >
        <Typography variant="h3" align='center' >Formulário de Cadastro</Typography> 
        <FormRegister onSubmit={onSubmitForm} validationCPF={validateCPF}/>   
      </Container >
    );
  }
}
 function onSubmitForm(datas) {
  console.log(datas);
 }

 function validateCPF(cpf) {
  if(cpf.length !== 11){
    return {valid: false, text:"O campo CPF deve ter 11 dígitos!"}
  }else {
    return {valid: true, text:""}
  }
}
export default App;
