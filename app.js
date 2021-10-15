let segredo = 8;

let caixaDoNumero = document.getElementById("numero");

let botaoClicado = function () {
    if (segredo == caixaDoNumero.value) {
        alert("Parabéns! Você acertou o número que eu estava pensando!!");
    }
    else if (caixaDoNumero.value < 1 || caixaDoNumero.value > 10) {
        alert("Você chutou um número fora dos valores permitidos");
    }
    else {
        alert("Infelizmente você errou!");
    }
};

let botaoAdivinhar = document.getElementById("adivinhar");
botaoAdivinhar.onclick = botaoClicado;
