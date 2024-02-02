By Jonathan Lee

INSTRUCTIONS: 
Practice with Functions (25 points)

    Write a function called halfNumber() that accepts one argument (a number), divide it by 2, and return the result. It should log a string like "Half of 5 is 2.5.".
    Write a function called squareNumber() that accepts one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
    Write a function called percentOf() that accepts two numbers, figure out what percent the first number represents of the second number, and return the result. It should log a string like "2 is 50% of 4."
    Write a function called findModulus() that accepts two numbers. Within the function write a statement that returns the modulus of the first and second parameters. It should log a string like "2 is the modulus of 4 and 10."

The Rock, Paper, Scissors Game (25 points)

Rock, paper, scissors is a classic 2 player game. Each player chooses rock, paper or scissors. The possible outcomes include:

    Rock destroys scissors.
    Scissors cut paper.
    Paper covers rock.

Our code will break the game into 3 phases:

    User makes a choice. How will we collect the user’s choice?
    Computer makes a choice. How will we collect the computer’s choice?
    A conditional that determines who wins.

You will be responsible for figuring out some of the logic. These next steps will attempt to guide you down the right path:

    Begin by prompting the user for their choice.
    Create the computer’s choice. This will be generated similarly to the coin flip that you did in the last assignment. Remember though, rather than 2 options, there will be 3 here.
    Depending on what the numeric value of the computer’s choice is, reset it to a string value of rock, paper, or scissors instead.
    Create a conditional statement that checks the user’s choice in relation to the computer’s choice. Once a winner is defined, display a message within an alert box indicating who the winner is.
    What if the result ends in a tie? Figure out how to handle that as well.
    What if the user enters something other than rock, paper, or scissors into the prompt? Figure out how to handle that as well.
