// Seleção de elementos do DOM
const btnJogar = document.getElementById('btn-jogar');
const telaAbertura = document.getElementById('tela-abertura');
const arena = document.getElementById('arena');

// NOVOS ELEMENTOS: Captura os botões de carros
const botoesCarros = document.querySelectorAll('.tipo-carro');
let carroSelecionado = ""; // Variável para guardar o carro escolhido

// Lógica para selecionar o carro
botoesCarros.forEach(botao => {
    botao.addEventListener('click', (evento) => {
        // Remove a classe 'selecionado' de todos os botões
        botoesCarros.forEach(b => b.classList.remove('selecionado'));
        
        // Adiciona a classe 'selecionado' apenas no botão que foi clicado
        evento.target.classList.add('selecionado');
        
        // Guarda o modelo do carro (esportivo, jipe ou f1)
        carroSelecionado = evento.target.getAttribute('data-modelo');
        console.log("Carro escolhido:", carroSelecionado);
    });
});

// Evento para iniciar o jogo (Modificado)
btnJogar.addEventListener('click', () => {
    // Validação: só deixa jogar se um carro for escolhido
    if (carroSelecionado === "") {
        alert("Por favor, escolha um carro antes de correr!");
        return;
    }

    telaAbertura.classList.add('escondido');
    arena.classList.remove('escondido');
    console.log("O jogo começou com o carro:", carroSelecionado);
});