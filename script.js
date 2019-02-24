const img = document.createElement("img");
img.src = "letsplay.jpg"
var src = document.getElementById("opponent");
src.appendChild(img);

const yourChoiceScissors = document.getElementById("scissors");
const yourChoicePaper = document.getElementById("paper");
const yourChoiceRock = document.getElementById("rock");


function opponentChoice(){
    let opponentChoice = Math.floor((Math.random() *3) + 1)

    if(opponentChoice == 1){
        option = "rock" 
    }else if(opponentChoice == 2){
        option = "paper" 
    }else{
    option = "scissors" }

    img.src = option + ".png"
    return option

}

console.log(opponentChoice())

yourChoicePaper.onclick = function(){
    opponentChoice()

    if(option == "paper"){
        console.log("it's a tie")
    }
    if(option == "rock"){
        console.log("Paper covers rock. You win!")
    }
    if(option == "scissors"){
        console.log("Scissors cut paper. You lose!")
    }
}

yourChoiceRock.onclick = function(){
    opponentChoice()
    if(opponentChoice == yourChoiceRock){
        console.log("it's a tie")
    }
}

yourChoiceScissors.onclick = function(){
    opponentChoice()
    if(opponentChoice == yourChoiceScissors){
        console.log("it's a tie")
    }
}




// function play(){

//     opponentChoice()

//     if(img.src == "scissors.png"){
//         alert("Tie")
//     }else if (img.src == "rock.png"){
//         alert("Rock crushes scissors. You lose")
//     }else(img.src == "paper.png")
//         alert("You win! Scissors cuts paper")
    

// }


