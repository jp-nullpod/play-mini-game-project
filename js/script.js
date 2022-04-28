function generateRandomNumber()
{
    return  Math.floor(Math.random()*10);
}


function playTheGame() {
    let result = confirm('Would you like to play the game?');

    if (!result) {
        alert('No problem, Goodbye');
        return;
    }

    //write your code here
    let answer = prompt('Enter a number between 0 and 10');
    
    if (isNaN(answer)) {
        alert ('Sorry Not a number, Goodbye');
        return;
    }

    //If the user didn’t enter a number between 0 and 10 alert “Sorry it’s not a good number, Goodbye”.

    let userNumber = parseInt(answer); //convert the string to an integer

    if (userNumber <= 0 || userNumber >= 10) {
        alert('Sorry, it\'s not a good number, Goodbye');
        return;
    }

    let computerNumber = generateRandomNumber();

    console.log(`continue to play the game user number: ${userNumber} computer number: ${computerNumber}`);
}