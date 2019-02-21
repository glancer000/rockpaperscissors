
function play(){
    if(img == true){
        img.src = option + ".png"
    }else{
        let opponentChoice = Math.floor((Math.random() *3) + 1)

        if(opponentChoice == 1){
            option = "rock" 
        }else if(opponentChoice == 2){
            option = "paper" 
        }else{
        option = "scissors" 
        }

        const img = document.createElement("img");
        img.src = option + ".png"
        var src = document.getElementById("opponent");
        src.appendChild(img);
    }

}






