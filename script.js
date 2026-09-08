//rock paper scissors game
//creating a get computer choice function

const getComputerChoice = () => {
    const choiceNumber = Math.random();
    if (choiceNumber >= 0 && choiceNumber <= 0.333){
        return "rock";
    }
    else if (choiceNumber > 0.333 && choiceNumber <= 0.666){
        return "paper";
    }
    else{
        return "scissors";
    }
}

//creating the getting user choice function
const getHumanChoice = () => {
    const userChoice = prompt("Please enter your choice: rock, paper, or scissors: ");
    return userChoice.toLowerCase().trim();
}

//initializing the computer score
let computerScore = 0;

//initializing the human score
let humanscore = 0;

//creating the play round function

const playround = (humanChoice, computerChoice) => {
    if (humanChoice === "rock" && computerChoice === "scissors"){
        humanscore++
        return "You win! Rock beats Scissors";
    }
    else if (humanChoice === "rock" && computerChoice === "paper"){
        computerScore++
        return "You lose! Paper beats Rock";
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        humanscore++
        return "You win! Paper beats Rock";
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        computerScore++;
        return "You lose! Scissors beats Paper";
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanscore++;
        return "You win! Scissors beats Paper";
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        computerScore++;
        return "You lose! Rock beats Scissors";
    }
    else{
        return "It's a tie!";
    }
}


//creating the game play function
const playGame = () => {
    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice(); 
        console.log(playround(humanSelection, computerSelection));
    } 
}