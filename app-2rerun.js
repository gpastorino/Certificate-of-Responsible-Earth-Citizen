

//randomize the block locations
//populate the Certificate
//when the timer stops, and the user has not succeeded, 
//then the page refreshes, but with the message "Try again".
//i can do this by adding the button onto the try again popup! 

//substitute the squares for actual picture objects. 


let time;
let score;
console.log('Welcome to Earthling Resposibility Program...');

var newDiv = document.createElement('div');
var newImg = document.createElement('img');
newImg.setAttribute('src','imgs/battery1.png');
var addHere = document.getElementsByClassName('local-recycle-item');
addHere.appendChild(newDiv);
addHere.appendChild(newImg);




var play = document.querySelector(".round2").addEventListener("click", ()=>{
    console.log('Game Start');
    time = 10;
    score = 0; 

    setTimer();

    addItem();


    document.querySelector(".compost").addEventListener("click", ()=>{
      score++
      updateScore();
      let c = document.getElementsByClassName("compost-item");
      if(c){
        c[0].remove();
        console.log('compost paired');
        addItem();
      }
    console.log(`this is the  ${score}`);
    });

    document.querySelector(".grocery").addEventListener("click", ()=>{
      score++
      updateScore();
      let d = document.getElementsByClassName("grocerystore-item");
      if(d){
        d[0].remove();
        addItem();
        console.log('grocery to be item removed!');
      }
      console.log(`this is the  ${score}`);
    });

    document.querySelector(".askcity").addEventListener("click", ()=>{
      score++
      updateScore();
      let e = document.getElementsByClassName("askcity-item");
      if(e){

        e[0].remove();
        addItem();
        console.log('to remove askcity block');
      }
      console.log(`this is the  ${score}`);
    });

    document.querySelector(".local").addEventListener("click", ()=>{
      score++
      updateScore();
      let f = document.getElementsByClassName("local-recycle-item");
      if(f){
        f[0].remove();
        addItem();
        console.log('local recycle block removed');
      }
    });

    console.log(`this is the  ${score}`);
  });



function addItem(){
  //randomize a location .. this will be harder.
    const generateItemClassName = () => {
      const itemsArray = ['compost-item','grocerystore-item', 'askcity-item' ,'local-recycle-item'];
      const index = Math.floor(Math.random() * itemsArray.length);
      return itemsArray[index];
    }
    let randomItem = document.createElement("div"); 
    randomItem.className = generateItemClassName();
    document.querySelector(".items").appendChild(randomItem);
}

const setTimer = () => {
    // function to run , time interval

    //why interval, vs timer?  vs timout
    const timer = setInterval(()=>{
      console.log(time)
      if(time == 0){
        //need a timer stop function here. 

        clearInterval(timer);
        // stopTimer();


        console.log('Time is Up!');
        //will create a condition here that if the user has scored greater than 90%, then they get a certificate. 
        if(score>=10){
          certificate();
        }else{

        gameOverLose();

        gameEnd();
        
        //blotted this out: 
        // return location.reload(true);
        }
      }
      time--;
      updateTime();
    },1000);
  }

// function stopTimer() {
//       clearInterval();
//       }
  

const updateTime = () => {
    $('#timer').text(`timer: ${time}s`);
  }

const updateScore = () => {
    $('#score').text(`${score}`);
  }

function gameEnd(timer){
//tally up the points
//"you only got x points. Press Try again!"
//"you've succeeded in scoring x points!  Congratulations!"  (Shows the Certification)
  
//blotted this out:  

// if(score<=10){
  //   console.log("Didn't make it.  Restart!");
  //   // gameOver();
    clearInterval(timer);

  //blotted this out:  

  // }else{
  //   console.log("Congratulations!  Here's your Certification!");
  //   certificate();
  // }
}
function certificate(){

  document.querySelector('body1').remove();
  document.querySelector('footer').remove();

  var certificateOnDOM = document.createElement('div');
  certificateOnDOM.id="cert";
  certificateOnDOM.innerText= "Here's Your Excellent Certificate of Excellence!";
  document.body.appendChild(certificateOnDOM);
}

function gameOverWin(){

  document.querySelector('body1').remove();
  document.querySelector('footer').remove();

}

function gameOverLose(){

  var gameOverOnDOM = document.createElement('div');
  gameOverOnDOM.id="game-over";
  // gameOverOnDOM.style.position="fixed";
  gameOverOnDOM.innerText= "Try Again!";
  document.body.appendChild(gameOverOnDOM);


  //revisit the positioning issue with the DOM for the try again page.  

  //blotted out to get the lose working.
  // var play= document.createElement('div');
  // play.id="round3";
  // document.getElementById("game-over").appendChild(play);
  // document.getElementById('game-over').appendChild(play);

}




// ==================================================================================//