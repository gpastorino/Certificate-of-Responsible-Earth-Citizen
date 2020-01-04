console.log('Welcome to Match to Category...');



$('button').on('click', ()=>{
    console.log('Game Start')
});  //this codes the button

$('button').on('click', ()=>{

    console.log('Game Start')   //create a function that will call the event listner.
    createSquares(25);  //we added this after creating the function.  
    });
    

    const createSquares = numberOfSquares =>    //numberOfSquares is the parameter. 
    {
    const $squares = $('.squares');
    for (let i = 1; i < numberOfSquares; i++) {
        
    
        const $square = $('<div class="square" />')
    
        $squares.append($square);
    }
}    

// == User Stories/game logic == //

//When a picture pops up, then select the category button that it belongs in.  




// When the user clicks begin, the timer should start and the squares should populate with a random color

// When the user clicks on a color: the color should disapear and score should be added or subtracted.

// When the round is over, the scores round and timer should be updated for the user to start over with increased difficulty.
