function validateCPF(cpf) {
  if (cpf.length !== 11) {
    return { valid: false, text: "O campo CPF deve ter 11 dígitos!" };
    // Validação do campo CPF para verificar se possui 11 dígitos
  } else {
    return { valid: true, text: "" };
  }
}

function validatePass(pass) {
  if (pass.length < 4 || pass.length > 72) {
    return {
      valid: false,
      text: "O campo password deve ter entre 4 e 72 dígitos!",
    };
    // Validação do campo CPF para verificar se possui 11 dígitos
  } else {
    return { valid: true, text: "" };
  }
}
function validateName(name) {
    if (name.length < 4 || name.length > 72) {
      return {
        valid: false,
        text: "O campo nome deve ter entre 3 e 72 dígitos!",
      };
      // Validação do campo CPF para verificar se possui 11 dígitos
    } else {
      return { valid: true, text: "" };
    }
  }
export {validateCPF, validatePass, validateName};