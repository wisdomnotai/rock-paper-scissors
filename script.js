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