import ehUmCPF from "./validacaoCPF.js"; //importa funções de outro arquivo
import ehDeMaior from "./validarIdade.js";

const campos = document.querySelectorAll("[required]");

campos.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    //evento blur: quando tiramos o foco do campo, ex: clique fora
    
    campo.addEventListener("invalid", evento => evento.preventDefault());
    //desliga a função do navegador que emite um alerta caso o formulário tenha algum erro

})

function verificaCampo(campo){
    console.log(campo.validity);
    //o .validity tem informações do campo do formulário como se foi validado
    // ou se teve algum erro. além disso entrega qual foi o tipo de erro
    //usado para personalizar as mensagens de erro

    let mensagem = "";
    campo.setCustomValidity("")//apaga as mensagens de erro anteriores
    if(campo.name == "cpf" && campo.value.length >= 11){
        ehUmCPF(campo);
    }
    
    if(campo.name == "aniversario" && campo.value != ""){
        ehDeMaior(campo);
    }
    tiposDeErro.forEach(erro => {//compara se o valor de erro corresponde a algum da lista de erros
        // se verdaderio executa função que irá buscar em 'mensagens' com o nome do campo e o nome do erro
        if(campo.validity[erro]){
            mensagem = mensagens[campo.name][erro];
        }
    })
    const mensagemErro = campo.parentNode.querySelector(".mensagem-erro");
    const validadorDeInput = campo.checkValidity();//checa se o campo foi validado e salva true ou false

    if(!validadorDeInput){//se não validado imprime na tela da tag span do index a msg de erro
        mensagemErro.textContent = mensagem;

    }else{
        mensagemErro.texContent = "";//se validado mensagem em branco
    }
}

//array de erros:
const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

//lista de msgs de erro:
const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}