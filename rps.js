

        let score = JSON.parse(localStorage.getItem('score'))||{
                Win: 0,
                Lose: 0,
                Tie: 0 
            };
        /*
        if (score === null){
            score = {
                Win: 0,
                Lose: 0,
                Tie: 0 
            };
            
        }*/

        updatedScore();

            function playGame(playerMove){
                
                const computerMove = pickComputerMove();

            let result = '';

        if(playerMove === 'scissors'){
                        if(computerMove === 'rock'){
                            result = 'You Lose.';
                        } else if(computerMove === 'paper'){
                            result = 'You Win!';
                        } else if(computerMove === 'scissors'){
                            result = 'Tie.';
                        }       
                
        }else if (playerMove === 'paper'){
                          if(computerMove === 'rock'){
                            result = 'You Win!';
                        } else if(computerMove === 'paper'){
                            result = 'Tie.';
                        } else if(computerMove === 'scissors'){
                            result = 'You Lose.';
                        }

        }else if (playerMove === 'rock'){
                        if(computerMove === 'rock'){
                                        result = 'Tie.';
                        } else if(computerMove === 'paper'){
                                        result = 'You Lose.';
                        } else if(computerMove === 'scissors'){
                         result = 'You Win!';
                 }

            }

            if(result === 'You Win!'){
                score.Win +=1;
            }else if (result === 'You Lose.'){
                score.Lose +=1;
            }else if (result === 'Tie.'){
                score.Tie +=1;
            }

            updatedScore();
        
            localStorage.setItem('score', JSON.stringify(score));

            

            
            document.querySelector('.result')
            .innerHTML =` You
        <img src="images/${playerMove}-emoji.png" class="move-icon">
        <img src="images/${computerMove}-emoji.png" class="move-icon">
        Computer`;

            document.querySelector('.moves')
            .innerHTML = `${result}`;


           
                            
                        }

            function pickComputerMove() {
                const randomnumber = Math.random();
                if (randomnumber >= 0 && randomnumber < 1/3) {
                    return 'rock';
                } else if (randomnumber >= 1/3 && randomnumber < 2/3){
                    return 'paper';
                } else if (randomnumber >= 2/3 && randomnumber < 1 ){
                    return 'scissors';
                }
            }
            function updatedScore(){
                document.querySelector('.js-tally')
                .innerHTML =`Win: ${score.Win}, Lose ${score.Lose}, Tie ${score.Tie}` ;
            }

