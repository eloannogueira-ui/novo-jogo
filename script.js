// Aguarda o carregamento do DOM
document.addEventListener("DOMContentLoaded", () => {
    
    // --- LÓGICA DO ACCORDION (SEÇÕES EXPANSÍVEIS) ---
    const botoesExpandir = document.querySelectorAll(".btn-expandir");
    
    botoesExpandir.forEach(botao => {
        botao.addEventListener("click", () => {
            const painel = botao.nextElementSibling;
            painel.classList.toggle("ativo");
            
            // Altera o texto do botão para dar feedback visual
            if (painel.classList.contains("ativo")) {
                botao.textContent = "Ocultar Dados";
            } else {
                botao.textContent = "Ver Dados Avançados";
            }
        });
    });

    // --- LÓGICA DE ACESSIBILIDADE: FONTE ---
    let tamanhoAtualFonte = 100; // representado em %
    const body = document.body;

    document.getElementById("btn-aumentar").addEventListener("click", () => {
        tamanhoAtualFonte += 10;
        body.style.fontSize = `${tamanhoAtualFonte}%`;
    });

    document.getElementById("btn-diminuir").addEventListener("click", () => {
        if (tamanhoAtualFonte > 70) {
            tamanhoAtualFonte -= 10;
            body.style.fontSize = `${tamanhoAtualFonte}%`;
        }
    });

    // --- LÓGICA DE ACESSIBILIDADE: MODO CLARO/ESCURO ---
    document.getElementById("btn-tema").addEventListener("click", () => {
        body.classList.toggle("light-mode");
    });

    // --- LÓGICA DE ACESSIBILIDADE: LEITURA POR VOZ (SpeechSynthesis) ---
    const conteudoPrincipal = document.getElementById("conteudo-principal");
    const btnFalar = document.getElementById("btn-falar");
    const btnParar = document.getElementById("btn-parar");
    
    let mensagemVoz = null;

    btnFalar.addEventListener("click", () => {
        // Evita sobreposição de vozes parando leituras anteriores
        window.speechSynthesis.cancel();

        // Captura apenas o texto contido na tag <main> (ignorando botões e caixas flutuantes)
        const textoParaLer = conteudoPrincipal.innerText;

        mensagemVoz = new SpeechSynthesisUtterance(textoParaLer);
        mensagemVoz.lang = "pt-BR";
        
        window.speechSynthesis.speak(mensagemVoz);
    });

    btnParar.addEventListener("click", () => {
        window.speechSynthesis.cancel();
    });
});