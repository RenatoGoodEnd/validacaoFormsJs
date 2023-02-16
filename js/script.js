import ehUmCPF from "./validacaoCPF.js";

const campos = document.querySelectorAll("[required]");

campos.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
})

function verificaCampo(campo){
    if(campo.name == "cpf" && campo.value.length >= 11){
        ehUmCPF(campo);
    }
}