function playGame(playerChoice) {
    const choices = ['pedra', 'papel', 'tesoura'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let resultText = '';
    let isWin = false;

    if (playerChoice === computerChoice) {
      resultText = 'Empate!';
    } else if (
      (playerChoice === 'pedra' && computerChoice === 'tesoura') ||
      (playerChoice === 'papel' && computerChoice === 'pedra') ||
      (playerChoice === 'tesoura' && computerChoice === 'papel')
    ) {
      resultText = 'Você ganhou!';
      isWin = true;
    } else {
      resultText = 'Você perdeu!';
    }

    document.getElementById('result').textContent = `Você escolheu ${playerChoice}. O computador escolheu ${computerChoice}. ${resultText}`;

    // Mostrar imagem de vitória ou derrota
    document.getElementById('winImage').style.display = isWin ? 'block' : 'none';
    document.getElementById('loseImage').style.display = isWin ? 'none' : (resultText === 'Empate!' ? 'none' : 'block');
  }