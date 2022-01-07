function computerPlay(){
    //0 -> rock
    //1 -> paper
    //2 -> scissors
    let r_p_s = Math.floor(Math.random()*3);
    return r_p_s;
}

function input_to_number(input){
    let lower_input = input.toLowerCase().trim();
    switch (lower_input){
        case ("rock"):
            return 0;
        case ("paper"):
            return 1;
        case ("scissors"):
            return 2;
        default:
            console.log("ERROR INVALID INPUT");
    }
}

function compare(playerSelection, computerSelection){
    playerSelection = input_to_number(playerSelection);
    let lose="You Lose!";
    let win="You Win!"
    if (playerSelection == computerSelection){
        return "tie";
    }
    switch (playerSelection){
        case 0:
            switch (computerSelection){
                case 1:
                    return lose;
                    break;
                case 2:
                    return win;
            }
            break;
        case 1:
            switch (computerSelection){
                case 2:
                    return lose;
                    break;
                case 0:
                    return win;
            }
            break;
        case 2:
            switch (computerSelection){
                case 0:
                    return lose;
                    break;
                case 1:
                    return win;
            }
            break;
        default:
            return("ERROR, INVALID PLAYER SELECTION")
    }
}

//initialize scores to 0 for everybody
let player_score = 0;
let cpu_score = 0;

const buttons = document.querySelectorAll('button');
const p_score = document.querySelector('#p_score');
const c_score = document.querySelector('#cpu_score');

let game_over = false;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (game_over){
            return;
        }
        
        let outcome = compare(button.id, computerPlay());
        alert(outcome);
        if (outcome == "You Win!"){
            player_score ++;
            p_score.textContent = "Your current score: " + String(player_score);
        }
        else if(outcome == "You Lose!"){
            cpu_score ++;
            c_score.textContent = "Computer score: " + String(cpu_score);
        }

        if (player_score >= 5){
            alert("Congrats! You've beat the computer!");
            game_over = true;
        }
        else if (cpu_score >= 5){
            alert("Better luck next time");
            game_over = true;
        }
    });
});