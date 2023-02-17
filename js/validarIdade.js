export default function ehDeMaior(campo){
    const dataNascimento = new Date(campo.value);
    if(!validaIdade(dataNascimento)){
        campo.setCustomValidity("Você precisa ter mais de 18 anos de idade")
        //cria uma mensagem caso o formulário seja invalidado
    }
}

function validaIdade(dataNascimento){
    const dataAtual = new Date();
    //salva a data atual do sistema
 
    const dataBase = new Date(dataNascimento.getUTCFullYear() + 18, 
        dataNascimento.getUTCMonth(), dataNascimento.getUTCDate());
    //cria uma data base a partir da data de nascimento + 18 anos para comparar se usuário é maior de 18

    return dataAtual >= dataBase; //retorna true se data atual for maior que a data de Nasc. + 18 anos
}