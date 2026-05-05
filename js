// Função executada ao clicar no botão
function validarNumero() {

    // Captura o valor digitado
    let numero = document.getElementById("numero").value;

    // Seleciona o elemento onde a mensagem será exibida
    let mensagem = document.getElementById("mensagem");

    // Verifica se o campo está vazio
    if (numero === "") {

        mensagem.textContent = "Por favor, insira um número.";
        mensagem.style.color = "red";

    } else {

        // Converte o valor para número inteiro
        numero = parseInt(numero);

        // Estrutura condicional
        if (numero > 10) {

            mensagem.textContent = "O número é maior que 10.";
            mensagem.style.color = "green";

        } else if (numero > 5) {

            mensagem.textContent = "O número é maior que 5, mas menor ou igual a 10.";
            mensagem.style.color = "orange";

        } else {

            mensagem.textContent = "O número é 5 ou menor.";
            mensagem.style.color = "blue";
        }
    }
}
