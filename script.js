function getComputerChoice(){
    let randomChoices = ["Rock","Paper","Scissor" ]
    let randomNum = Math.floor( Math.random() * 3) 
    return randomChoices[randomNum]
}

function playRound(playerSelection, computerSelection){
if(playerSelection == computerSelection){
    return "it is a tie"
}else if(playerSelection == "Rock" && computerSelection == "Scissor" || playerSelection == "Scissor" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Rock"){
    return `You Win! ${playerSelection} beats ${computerSelection}`
}else if(playerSelection == "Rock" && computerSelection == "Paper" || playerSelection == "Scissor" && computerSelection == "Rock" || playerSelection == "Paper" && computerSelection == "Scissor"){
    return `You Lose! ${computerSelection} beats ${playerSelection}`
}
}