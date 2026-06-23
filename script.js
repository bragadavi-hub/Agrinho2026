// 1. MODO DE ALTO CONTRASTE / MODO NORMAL
const botaoContraste = document.getElementById("btn-contraste");

if (botaoContraste) {
    botaoContraste.onclick = function() {
        document.body.classList.toggle("alto-contraste");

        // Gerencia a troca visual do texto do botão
        if (document.body.classList.contains("alto-contraste")) {
            botaoContraste.textContent = "Modo Normal";
        } else {
            botaoContraste.textContent = "Alto Contraste";
        }
    };
}

// 2. NAVEGAÇÃO ENTRE PÁGINAS (ABAS)
function mostrarPagina(idPagina) {
    // Seleciona todas as seções que possuem a classe "pagina"
    const paginas = document.querySelectorAll(".pagina");

    // Remove a classe "ativa" de todas para escondê-las
    paginas.forEach(function(pagina) {
        pagina.classList.remove("ativa");
    });

    // Localiza a página clicada pelo ID e adiciona a classe "ativa" para mostrá-la
    const paginaAlvo = document.getElementById(idPagina);
    if (paginaAlvo) {
        paginaAlvo.classList.add("ativa");
    } else {
        console.error("Erro: A página com o ID '" + idPagina + "' não foi encontrada.");
    }
}