



let time;
console.log('Welcome to Earthling Resposibility Program...');

document.querySelector(".round2").addEventListener("click", ()=>{
    console.log('Game Start');
    time = 100;
    setTimer();
    addItem();

    document.querySelector(".compost").addEventListener("click", ()=>{

      let c = document.getElementsByClassName("compost-item");

      if(c){
        c[0].remove();

        console.log('compost pared');

        addItem();
      }
    
      // addItem();
    });

    document.querySelector(".grocery").addEventListener("click", ()=>{

      // console.log('grocery button');
      // addItem();

      let d = document.getElementsByClassName("grocerystore-item");
      if(d){
        // removeItem(d);
        d[0].remove();
        addItem();
        console.log('grocery to be item removed!');

      }

    });

    document.querySelector(".askcity").addEventListener("click", ()=>{

      let e = document.getElementsByClassName("askcity-item");
      // console.log('ask city button');
      // addItem();
      if(e){

        e[0].remove();
        addItem();
        // removeItem(e[0]);

        console.log('to remove askcity block');

      }

    });

    document.querySelector(".local").addEventListener("click", ()=>{

      // console.log('local recycle button');
      // addItem();

      let f = document.getElementsByClassName("local-recycle-item");
      if(f){

        f[0].remove();
        addItem();
        // removeItem(f);

        console.log('local recycle block removed');

      }

    });

  });

function addItem(){
  //randomize a location .. this will be harder.

    const generateItemClassName = () => {
      const itemsArray = ['compost-item','grocerystore-item', 'askcity-item' ,'local-recycle-item'];
      const index = Math.floor(Math.random() * itemsArray.length)
      return itemsArray[index];
    }

    let randomItem = document.createElement("div"); 
    randomItem.className = generateItemClassName();
    document.querySelector(".items").appendChild(randomItem);
}






//next is to link an event to create a new addItem, and to remove the old addItem.  

const setTimer = () => {
    // function to run , time interval
    const timer = setInterval(()=>{
      console.log(time)
      if(time === 0){
        console.log('Time is Up!');
        //will create a condition here that if the user has scored greater than 90%, then they get a certificate. 
        //if(score>=90%)

        //if the user gets below 90% or gets 3 strikes, then the game refreshes to return location.reload(true);

        //what do I need to do here to reset the game?  To refresh the page.  
        // return reload();

        return location.reload(true);
        }
        time--;
        updateTime();
      
    },1000);
  }

  const updateTime = () => {
    $('#timer').text(`timer: ${time}s`);
  }


// $('button').on('click', ()=>{   this is for any button.  

//     console.log('Game Start')   //create a function that will call the event listner.
//     createSquares(25);  //we added this after creating the function.  
//     alert('Game Start!'); 
//     });
    

//     const createSquares1 = numberOfSquares =>    //numberOfSquares is the parameter. 
//     {
//     const $squares = $('.squares');
//     for (let i = 1; i < numberOfSquares; i++) {
//         const $square = $('<div class="square" />')
//         $squares.append($square);
//     }
// }    

// this one is from the description on the poke-a-square lab.  
// const createSquares2 = (numberOfSquares) => {
//     for (let i = 0; i < NumberOfSquares; i++){
//         const square = $('<div/>')
//         $('.squares').append(square)
//     }
//   }


  // const createSquares3 = numberOfSquares => {
  //   const $squares = $('.squares');
  //   for (let i = 1; i <= numberOfSquares; i++) {
  //     const $square = $('<div class="square"/>')
  //     $square.css('background-color',applyRandomColor());
  //    $squares.append($square);
  //   }
  // }




// == User Stories/game logic == //

//When a picture pops up, then select the category button that it belongs in.  




// When the user clicks begin, the timer should start and the squares should populate with a random color

// When the user clicks on a color: the color should disapear and score should be added or subtracted.

// When the round is over, the scores round and timer should be updated for the user to start over with increased difficulty.


// const setTimer = () => {
//     // function to run , time interval
//     const timer = setInterval(()=>{
//       console.log(time)
//       if(time === 0){
//         // used to stop setInterval
//         clearInterval(timer);
//         round++;
//         setUpRound();
//         if(time > 0) setTimer();
//       }
//       updateTime();
//       time--;
//     },1000);
//   }


//   $('h1').text(`GAME OVER score: ${score}`);


// addEventListener
// $('.round2').on('click',()=>{
//     console.log('Game Start');
//     time = 5;
//     setTimer();
//     addItem();
//   });


// $('.round2').on('click', ()=>{
//     // console.log('Game Start')
//     alert('Game Start!');
//     // setTimer()
// });  //this codes the button


//this is the process to do the item creation on the page:  
// let compostItem= document.createElement("div"); // create the html element just takes the div here. 
//modify the element with classes or id.  
//add any text or html to the element. (whatever to appear inside the div).
//attach the element to an existing element in the DOM.  
// compostItem.className = "compost-item";
// document.querySelector(".items").appendChild(compostItem);



// This stuff is old code for the item randomization: 
  //randomize an item
    // let groceryItem = document.createElement("div"); 
    // compostItem.className = "grocerystore-item";
    // document.querySelector(".items").appendChild(groceryItem);

    // let askCityItem = document.createElement("div");  
    // compostItem.className = "askcity-item";
    // document.querySelector(".items").appendChild(askCityItem);

    // let localItem = document.createElement("div"); 
    // compostItem.className = "local-recycle-item";
    // document.querySelector(".items").appendChild(localItem);

    // applyRandomItem();

//     (".items").append( ("<div class="compost-item"></div>"));



//this was the code I used for the random color object.  
// const createSquares = numberOfSquares => {
//   const $squares = $('.squares');
//   for (let i = 1; i <= numberOfSquares; i++) {
//     const $square = $('<div class="square"/>')
//     $square.css('margin',applyRandomItem());
//    $squares.append($square);
//   }
// }



//this part will be complicated. 
// const applyRandomLocation = () => {
//   const
// }
