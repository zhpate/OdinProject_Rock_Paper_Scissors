
function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }


function play_rps1() {
    let player_input_raw = prompt("Rock, Paper, or Scissors?")

    let game_options = choose(['Rock', 'Paper', 'Scissors'])
    let computer_choice = game_options[Math.floor(Math.random() * game_options.length)];

    let player_input = player_input_raw.charAt(0).toUpperCase() + player_input_raw.slice(1).toLowerCase();
    
    if (player_input == computer_choice) {
        let response = "Draw"
    } else if (player_input == "Rock" && computer_choice == "Scissors" ) {
        let response = "Rock beats Scissors, you win!"
    } else if (player_input == "Rock" && computer_choice == "Paper" ) {
        let response = "Paper beats Rock, you lose!"
    } else if (player_input == "Paper" && computer_choice == "Rock" ) {
        let response = "Paper beats Rock, you win!"
    } else if (player_input == "Paper" && computer_choice == "Scissors" ) {
        let response = "Scissors beats Paper, you lose!"
    } else if (player_input == "Scissors" && computer_choice == "Paper" ) {
        let response = "Scissors beats Paper, you win!"
    } else if (player_input == "Scissors" && computer_choice == "Rock" ) {
        let response = "Rock beats Scissors, you lose!"
    }

    document.getElementById("Results").innerHTML = response;

}

