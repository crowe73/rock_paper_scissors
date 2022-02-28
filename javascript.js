// Global variables.
let playerScore = 0;
let computerScore = 0;

//for (let i = 0; i < 5; i++)
{
    //game();
}

result();

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

// Function to play five rounds and determine the winner.
function game()
{
    const playerSelection = prompt('Choose rock, paper, or scissors');
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
}

function result()
{
    console.log(`Computer score: ${computerScore} Player score: ${playerScore}`);
    if (computerScore > playerScore)
    {
        console.log('The computer wins!');
    }
    else if (computerScore < playerScore)
    {
        console.log('The player wins!');
    }
    else
    {
        console.log('It is a tie game.');
    }
}