export default function ehUmCPF(campo){ //exporta a função para ser usada em outro arquivo
    const cpf = campo.value.replace(/\.|-/g, "");
    console.log(cpf)

    if(verificaNumerosRepetidos(cpf) || verificaPrimeiroDigito(cpf) || verificaSegundoDigito(cpf)){
        campo.setCustomValidity('CPF inexistente');
    }else{

        campo.setCustomValidity("")
    }

}

function verificaNumerosRepetidos(cpf){
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    return numerosRepetidos.includes(cpf);//retorna true se o cpf foi igual àlguns dos númerosRepetidos
}

// Abaixo a forma de validar o número de CPF através do cálculo dos dígitos de verificação
function verificaPrimeiroDigito(cpf){
    let soma = 0;
    let multiplicador = 10;

    for(let tamanho = 0; tamanho < 9; tamanho++){
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }
    soma = (soma * 10) % 11;
    if(soma == 10 || soma == 11){
        soma = 0
    }
    return soma != cpf[9];//retorna true se o valor de soma for diferente do primeiro dígito do CPF
}

function verificaSegundoDigito(cpf){
    let soma = 0;
    let multiplicador = 11;

    for(let tamanho = 0; tamanho < 10; tamanho++){
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }
    soma = (soma * 10) % 11;

    if(soma == 10 || soma == 11){
        soma = 0
    }
    return soma != cpf[10];
}