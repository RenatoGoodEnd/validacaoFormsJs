export default function ehDeMaior(campo){
    const dataNascimento = new Date(campo.value);
    validaData(dataNascimento)
    console.log(validaData(dataNascimento));
}

function validaData(data){
    const dataAtual = new Date();
    console.log(dataAtual)
    const dataBase = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());
    console.log(dataBase)
    return dataAtual >= dataBase;
}