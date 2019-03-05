const img = document.createElement("img");
img.src = "letsplay.jpg"
img.className = "opponent-options"
var src = document.getElementById("opponent-choice");
src.appendChild(img);

let paperOption = function(){
    opponentChoice()

    if(option == "paper"){
        
        document.getElementById('results').innerHTML = "It's a tie!";
    }
    if(option == "rock"){
        document.getElementById('results').innerHTML = "You win!"
    }
    if(option == "scissors"){
        document.getElementById('results').innerHTML = "You lost!"
    }
    return results

}



var para = document.createElement("p");
var node = document.createTextNode("");
para.appendChild(node);
var element = document.getElementById("results");
element.appendChild(para);

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




//results based on if user chooses Paper
yourChoicePaper.onclick = paperOption
    
console.log(paperOption)


//results based on if user chooses Rock
yourChoiceRock.onclick = function(){
    opponentChoice()
    if(option == "paper"){
        console.log("Paper covers rock. You Lose!")
    }
    if(option == "rock"){
        console.log("It's a tie")
    }
    if(option == "scissors"){
        console.log("Rock breaks scissors. You win!")
    }
}

//results based on if user chooses Scissors
yourChoiceScissors.onclick = function(){
    opponentChoice()
    if(option == "paper"){
        console.log("Scissors cut paper. You win!")
    }
    if(option == "rock"){
        console.log("Rock breaks scissors. You lose!")
    }
    if(option == "scissors"){
        console.log("It's a tie")
    }
}
