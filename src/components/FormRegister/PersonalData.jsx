import React, { useState } from "react";
import { Button, TextField, FormControlLabel, Switch } from "@mui/material";

function PersonalData({ onSubmit, validationCPF }) {
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

  // Definindo os estados iniciais
  const [name, setName] = useState(""); // Estado para o nome
  const [nickname, setNickname] = useState(""); // Estado para o sobrenome
  const [cpf, setCpf] = useState(""); // Estado para o CPF
  const [sale, setSale] = useState(true); // Estado para a opção de promoção
  const [news, setNews] = useState(false); // Estado para a opção de novidades
  const [error, setError] = useState({ cpf: { valid: true, text: "" } }); // Estado para o erro de validação do CPF

  return (
    <form
      // Manipulador de evento executado quando o formulário é enviado
      onSubmit={(event) => {
        event.preventDefault(); // Impede o comportamento padrão do envio do formulário
        onSubmit({ name, nickname, cpf, sale, news }); // Chama a função onSubmit com os valores do formulário como argumento
      }}
    >
      <TextField
        value={name} // Valor do campo de texto obtido do estado
        onChange={(event) => {
          setName(event.target.value); // Atualiza o estado 'name' com o valor digitado no campo de texto
        }}
        id="name" // ID do campo de texto
        required
        label="Nome" // Rótulo exibido acima do campo de texto
        variant="outlined" // Estilo de borda do campo de texto
        margin="dense" // Margem do campo de texto
        fullWidth // Ocupa a largura total do contêiner
      />
      {/* Campo de texto para o sobrenome */}
      <TextField
        value={nickname} // Valor do campo de texto
        onChange={(event) => {
          // Manipulador de evento para atualizar o estado "nickname"
          setNickname(event.target.value);
        }}
        id="nickname" // ID do campo de texto
        required
        label="Sobrenome" // Rótulo exibido acima do campo de texto
        variant="outlined" // Estilo de variante com borda delimitadora
        margin="dense" // Margem densa
        fullWidth // Ocupa toda a largura disponível
      />
      {/* Campo de texto para o CPF */}
      <TextField
        value={cpf} // Valor do campo de texto
        onChange={(event) => {
          // Manipulador de evento para atualizar o estado "cpf"
          setCpf(event.target.value);
        }}
        onBlur={(event) => {
          // Manipulador de evento para executar a validação do CPF ao perder o foco
          const itsValid = validationCPF(cpf); // Validação do CPF
          setError({ cpf: itsValid }); // Atualiza o estado de erro "cpf"
        }}
        error={!error.cpf.valid} // Define se o campo de texto deve ser destacado como inválido
        helperText={error.cpf.text} // Texto auxiliar exibido abaixo do campo de texto
        id="cpf" // ID do campo de texto
        required
        label="CPF" // Rótulo exibido acima do campo de texto
        variant="outlined" // Estilo de variante com borda delimitadora
        margin="normal" // Margem normal
        fullWidth // Ocupa toda a largura disponível
      />
      {/* Opção de promoção */}
      <FormControlLabel
        control={
          <Switch
            checked={sale} // Valor do switch obtido do estado
            onChange={(event) => {
              setSale(event.target.checked); // Atualiza o estado 'sale' com o valor do switch
            }}
            name="sale" // Nome do switch
          />
        }
        label="Promoção" // Texto exibido ao lado do switch
      />
      {/* Opção de novidades */}
      <FormControlLabel
        control={
          // Componente de controle: Switch
          <Switch
            checked={news} // Estado do switch (marcado ou não)
            onChange={(event) => {
              // Manipulador de evento para atualizar o estado "news"
              setNews(event.target.checked);
            }}
            name="news" // Nome do switch
          />
        }
        label="Novidades" // Rótulo exibido ao lado do switch
      />

      {/* Botão de cadastro */}
      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default PersonalData;
