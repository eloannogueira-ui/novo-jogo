// Seleção de elementos do DOM
const btnJogar = document.getElementById('btn-jogar');
const telaAbertura = document.getElementById('tela-abertura');
const arena = document.getElementById('arena');

// Evento para iniciar o jogo
btnJogar.addEventListener('click', () => {
    telaAbertura.classList.add('escondido');
    arena.classList.remove('escondido');
    console.log("O jogo começou!");
});