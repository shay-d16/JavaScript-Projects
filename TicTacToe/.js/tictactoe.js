//This variable keeps track of whose turn it is
let activePlayer = 'X';
//This array stores an array of moves. Use this to determine win conditions
let selectedSquares = [];

//This function is for placing an x or o in a square.
function placeXOrO(squareNumber) {
    //This condition enures a square hasn't been selected already 
    //The .some() method is used to check each element of selectedSquare array
    //to see if it contains the square number clicked on
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //This variable retrieves the html element id that was clicked
        let select = document.getElementById(squareNumber);
        //This condition checks whose turn it is
        if(activePlayer === 'X') {
            //If active player is equal to 'X', the x.png is placed in HTML.
            select.style.backgroundImage = 'url("TicTacToe/images/x.png")';
            //Active player may only be 'X' or 'O' so, if not 'X' it must be 'O'
        } else {
            //If active player is equal to 'O', the o.png is placed in HTML
            select.style.backgroundImage = 'url(TicTacToe/images/o.png)';
        }
        //squareNumber and activePlayer are concatenated together and added to the array
        selectedSquares.push(squareNumber + activePlayer);
        //This calls a function to check for any win conditions
        checkWinConditions();
        //This condition is for changing the active player.
        if(activePlayer === 'X') {
            //If active player is 'X' change it to 'O'.
            activePlayer = 'O';
        //If active player is anything other than 'X'
        } else {
            //Change the activePlayer to 'X'.
            activePlayer ='X';
        }

        //This function plays placement sound.
        audio('./media/place.mp3');
        //This condition checks to see if it's the computer's turn
        if(activePlayer === 'O') {
            //This function disables clicking for comuputer choice.
            disableClick();
            //This function waits 1 second before computer places image and enables click
            setTimeout(function() { computersTurn() ; }, 1000)
        }
        return true;  
    }

    //This function results in a random square being selected.
    function computersTurn() {
        //This boolean is needed for the while loop.
        let success = false;
        ///This variable stores a random number 0-8.
        let pickASquare;
        //This condition allows the while loop to keep trying if a square is selected already.
        while(!success) {
            //A random number between 0 and 8 is selected.
            pickASquare = String(Math.floor(Math.random() * 9));
            //If the random number evaluated returns true, the square hasn't yet been selected.
            if(placeXOrO(pickASquare)) {
                //This line calls the function.
                placeXOrO(pickASquare);
                //This changes the broken boolean and ends the loop.
                success = true;
            };
        }
    }
}

//This function parses the selectedSquares array to search for win conditions.
//drawWinline function is called to draw line if condition is met.
function checkWinConditions() {
    //X 0, 1, 2 condition.
    if      (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    // X 3, 4 , 5 condition.
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }

    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }

    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }

    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }

    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }

    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }

    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }

    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }

    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }

    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }

    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }

    else if (arrayIncludes('1O', '4O', '70')) { drawWinLine(304, 50, 304, 558) }

    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }

    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }

    else if (arrayIncludes('0o', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    //This condition checks for tie. If none of the above conditions register and 9
    //squares are selected the code executes
    else if (selectedSquares.length >= 9) {
        //This function plays the tie game sound
        audio('.media/tie.mp3');
        //This function sets a .3 second timer before the resetGame is called.
        setTimeout(function () { resetGame(); }, 1000);
    }

    //This function checks if an array includes 3 strings. It is used to check for
    //each win condition.
    function arrayIncludes(squareA, squareB, squareC) {
        //These 3 variables will be used to check for 3 in a row.
        const a = selectedSquares.includes(squareA)
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)
        //If the 3 variables that are passed are all included in the array true is
        //returned and the else if condition executes the drawWinLine function.
        if (a === true && b === true && c === true) { return true }
    }
}

//This function makes the body element temporarily unclickable
function disableClick() {
    //This makes the body unclickable
    body.style.pointerEvents = 'none';
    //This makes the body clickable again after 1 second.
    setTimeout(function() {body.style. pointerEvents = 'auto';}, 1000);
}

//This function takes a string parameter of the path set earlier for 
//placement sound ('.media/place.mp3)
function audio(audioURL) {
let audio = new Audio(audioURL);
//Play method plays the audio sound.
audio.play() ;
}

//This function utilizes html cavas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //This line accesses the html canvas element.
    const canvas - document.getElementById('win-lines')
    //This line gives access to methods and properties to use on canvas.
    const c = canvas.getContext('2d');
    //This line indicate where the start of a line's x axis is.
    let x1 = coordX1,
        //This line indicates where the start of a lines y axis is.
        y1 = coordY1,
        //This line indicates where the end of a lines x axis is.
        x2 = coordX2,
        //This line indicates where the end of a lines x axis is.
        y2 = coordY2,
        //This variable stores the temporary x axis data that is updated in the animation loop.
        x = x1,
        //This variable stores the temporary y axis data that is updated in he animation loop.
        y = y1;
}