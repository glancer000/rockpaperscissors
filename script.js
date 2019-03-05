const img = document.createElement("img");
img.src = "letsplay.jpg"
img.className = "opponent-options"
var src = document.getElementById("opponent-choice");
src.appendChild(img);

const yourChoiceScissors = document.getElementById("scissors");
const yourChoicePaper = document.getElementById("paper");
const yourChoiceRock = document.getElementById("rock");

//This is where random math makes a number between 1 and 3 and displays rock, paper or scissors based on that number
function opponentChoice(){
    let opponentChoice = Math.floor((Math.random() *3) + 1)

    if(opponentChoice == 1){
        option = "rock" 
    }else if(opponentChoice == 2){
        option = "paper" 
    }else{
    option = "scissors" }

    img.src = option + ".png"

}

const paperOption = function(){
    opponentChoice()

    if(option == "paper"){
        
        document.getElementById('results').innerText = "It's a tie!";
    }
    if(option == "rock"){
        document.getElementById('results').innerText = "You win!"
    }
    if(option == "scissors"){
        document.getElementById('results').innerText = "You lost!"
    }
    return results

}

const rockChoice = function(){
    opponentChoice()
    if(option == "paper"){
        document.getElementById('results').innerText = "Paper covers rock. You Lose!"
    }
    if(option == "rock"){
        document.getElementById('results').innerText = "It's a tie!"
    }
    if(option == "scissors"){
        document.getElementById('results').innerText = "Rock breaks scissors. You win!"
    }
    return results
}

const scissorsChoice = function(){
    opponentChoice()
    if(option == "paper"){
        document.getElementById('results').innerText = "Scissors cut paper. You win!"
    }
    if(option == "rock"){
        document.getElementById('results').innerText = "Rock breaks scissors. You lose!"
    }
    if(option == "scissors"){
        document.getElementById('results').innerText = "It's a tie!"
    }
    return results
}


//results based on if user chooses Paper
yourChoicePaper.onclick = paperOption
    
//results based on if user chooses Rock
yourChoiceRock.onclick = rockChoice

//results based on if user chooses Scissors
yourChoiceScissors.onclick = scissorsChoice
