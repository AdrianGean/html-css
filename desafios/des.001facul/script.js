function exibirMensagem(mensagem, tipo) {
    const feedback = document.getElementById("feedback");
    feedback.textContent = mensagem;
    feedback.className = tipo; 
}

function validarFormulario() {
    const nome = document.getElementById("nome").value.trim();
    const idade = parseInt(document.getElementById("idade").value.trim());
    const telefone = document.getElementById("telefone").value.trim();
    const cep = document.getElementById("cep").value.trim();

    if (nome === "") {
        exibirMensagem("Por favor, insira seu nome.", "erro");
        return false;
    }

    if (isNaN(idade) || idade <= 0) {
        exibirMensagem("Por favor, insira uma idade válida.", "erro");
        return false;
    }

    if (telefone.length < 8) {
        exibirMensagem("Por favor, insira um número de telefone válido.", "erro");
        return false;
    }

    if (cep.length < 8) {
        exibirMensagem("Por favor, insira um código postal válido.", "erro");
        return false;
    }

    exibirMensagem("Formulário enviado com sucesso!", "sucesso");
    return false; 

}


function alternarTema() {
    const corpo = document.body;
    const botao = document.getElementById("botaoTema");

    corpo.classList.toggle("modo-escuro");

    const modoEscuroAtivo = corpo.classList.contains("modo-escuro");

    botao.textContent = modoEscuroAtivo ? "☀️ Modo Claro" : "🌙 Modo Escuro";

    localStorage.setItem("tema", modoEscuroAtivo ? "escuro" : "claro");
}

document.addEventListener("DOMContentLoaded", function () {
    const temaSalvo = localStorage.getItem("tema");
    const corpo = document.body;
    const botao = document.getElementById("botaoTema");

    if (temaSalvo === "escuro") {
        corpo.classList.add("modo-escuro");
        if (botao) botao.textContent = "☀️ Modo Claro";
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const botaoMenu = document.getElementById("botaoMenu");
    const menuItens = document.getElementById("menuItens");

    if (botaoMenu && menuItens) {
        botaoMenu.addEventListener("click", function (e) {
            e.preventDefault();
            menuItens.classList.toggle("ativo");
        });

        document.addEventListener("click", function (e) {
            if (!botaoMenu.contains(e.target) && !menuItens.contains(e.target)) {
                menuItens.classList.remove("ativo");
            }
        });
    }
});