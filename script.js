function getComputerChoice(){
    let randomChoices = ["Rock","Paper","Scissor" ]
    let randomNum = Math.floor( Math.random() * 3) 
    return randomChoices[randomNum]
}