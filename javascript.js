const buttons = document.querySelectorAll("button");
let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) =>
{
    button.addEventListener("click", function() 
    {
        // Process user click.
        const playerSelection = this.id;
        const computerSelection = computerPlay();
        updateChoice(playerSelection, computerSelection);
        playRound(playerSelection, computerSelection);
        updateScore();
        if (result())
        {
            computerScore = playerScore = 0;
            updateScore();
            document.getElementById("player-choice").textContent = "?";
            document.getElementById("computer-choice").textContent = "?";
        }
    });
});

function updateChoice(playerSelection, computerSelection)
{
    document.getElementById("player-choice").textContent = playerSelection;
    document.getElementById("computer-choice").textContent = computerSelection;
}

function updateScore()
{
    document.getElementById("computer-score").textContent = computerScore;
    document.getElementById("player-score").textContent = playerScore;
}

// Computer's choice that it chooses randomly.
function computerPlay()
{
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

// Single round choice.
function playRound(playerSelection, computerSelection)
{
    // Check for a tie.
    if (playerSelection === computerSelection)
    {
        return 'It is a tie.';
    }
    // Check for rock.
    if (playerSelection === 'rock')
    {
        if (computerSelection === 'scissors')
        {
            playerScore++;
            return 'You win! Rock beats scissors.';
        }
        else
        {
            computerScore++;
            return 'You lose! Paper beats rock.';
        }
    }
    // Check for paper.
    if (playerSelection === 'paper')
    {
        if (computerSelection === 'scissors')
        {
            computerScore++;
            return 'You lose! Scissors beats paper';
        }
        else
        {
            playerScore++;
            return 'You win! Rock beats scissors.';
        }
    }
    // Check for scissors.
    if (playerSelection === 'scissors')
    {
        if (computerSelection === 'rock')
        {
            computerScore++;
            return 'You lose! Rock beats scissors.';
        }
        else
        {
            playerScore++;
            return 'You win! scissors beats paper.';
        }
    }
}

// Display the results.
function result()
{
    if (computerScore === 5 || playerScore === 5)
    {
        const winner = 
            computerScore === 5
                ? "The computer wins!"
                : "The player wins!";
        alert(winner);
        return true;
    }
    return false;
}