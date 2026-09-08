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
