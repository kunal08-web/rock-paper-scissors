const game = () =>{
    let pScore = 0;
    let cScore = 0;
    
    const startGame = () =>{
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const playScreen = document.querySelector('.match');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            });
        });
        playButton.addEventListener('click', () =>{
            introScreen.classList.add('fadeOut');
            playScreen.classList.add('fadeIn');
        });
    };

    const playMatch = () => {
        const playerOptions = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');

        const computerOptions = ['rock','paper','scissors'];

        playerOptions.forEach(option => {
            option.addEventListener('click', function(){
                const computerNumber = Math.floor(Math.random() *3);
                const computerChoice = computerOptions[computerNumber];
                
                setTimeout(() => {
                    compareHands(this.textContent,computerChoice);
                    updateScore();
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);
                

                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });

        const updateScore = () =>{
            const playerScore = document.querySelector('.player-score p');
            const computerScore = document.querySelector('.computer-score p');

            playerScore.textContent = pScore;
            computerScore.textContent = cScore;
        };
        
            const compareHands = (playerChoice,computerChoice) =>{
            const winner = document.querySelector('.winner');

            if(playerChoice === computerChoice){
                winner.textContent = 'It is a tie!';
                return;
            }

            if(playerChoice === 'rock'){
                if(computerChoice ==='scissors'){
                    winner.textContent = 'Player wins!';
                    pScore++;
                    return;
                }
                else{
                    winner.textContent = 'Computer wins!';
                    cScore++;
                    return;
                }
            }

            if(playerChoice === 'paper'){
                if(computerChoice === 'rock'){
                    winner.textContent = 'Player wins!';
                    pScore++;
                    return;
                }
                else{
                    winner.textContent = 'Computer wins!';
                    cScore++;
                    return;
                }
            }

            if(playerChoice === 'scissors'){
                if(computerChoice === 'rock'){
                    winner.textContent = 'Computer wins!';
                    cScore++;
                    return;
                }
                else{
                    winner.textContent = 'Player wins!';
                    pScore++;
                    return;
                }
            }
        };
    };
    startGame();
    playMatch();
};

game();
