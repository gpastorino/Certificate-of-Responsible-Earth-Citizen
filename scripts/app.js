
//revisit the positioning issue with the DOM for the try again page.  

//randomize the block locations

//populate the Certificate

let time;
let score;
console.log('Welcome to Earthling Resposibility Program...');

document.querySelector(".round2").addEventListener("click", playForCertificate);


// function randomLocation(){
// const valueArray = ['a', 'b', 'c', 'd'];
//repeat the math.floor(Math.random) 4 times. ONe for each of the values, then check if they produce random locations for one of the attributes.  
//constraints for these to work in.  
// width: 800px;
// height: 100px;



function randomizeItemLocation(){

   const itemsArray = ['compost-item','grocerystore-item', 'askcity-item' ,'local-recycle-item'];
      const index = Math.floor(Math.random() * itemsArray.length);
      return itemsArray[index];
}


function playForCertificate(){
    console.log('Game Start');
    time = 10;
    score = 0; 

    setTimer();
    addItem();

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
    
    document.querySelector(".compost").addEventListener("click", ()=>{
      score++
      updateScore();

      // document.getElementsByClassName("compost-item").style.margin = "`${a}px ${b}px ${c}px ${d}px`";

      let c = document.getElementsByClassName("compost-item");
      if(c){
        c[0].remove();
        console.log('compost paired');
        addItem();
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
  }


function addItem(){
  //randomize a location .. this will be harder.
    const generateItemClassName = () => {
      const itemsArray = ['compost-item','grocerystore-item', 'askcity-item' ,'local-recycle-item'];
      const index = Math.floor(Math.random() * itemsArray.length);
      return itemsArray[index];
    }
    let randomItem = document.createElement("div"); 
    randomItem.className = generateItemClassName();



    function check(){

      const leftMarginPercent =['20%', '25%', '30%','35%', '40%', '45%', '50%','55%', '60%','65%', '70%'];
      const index = Math.floor(Math.random() * leftMarginPercent.length);
      return leftMarginPercent[index];
    }


    //remember to only reference the dom when something is in the dom.  Not before.  This isn't in the dom yet, and can just work as a free variable assigned a new attribite. 

    randomItem.style.margin = `90 0 0 ${check()}`;

    // randomItem
    //location for random location function:
// ================================================================================//

// const color = $(event.target).css('background-color');
// document.getElementById("myDiv").style.marginLeft = "50px";
//then, can I do this?
// document.getElementById("myDiv").style.marginLeft = rightMarginPercent[index];

//=================================================================================//

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
        if(score>=10){
          certificate();

        }else{
          gameOverLose();
          gameEnd(timer);

        }
      }
      time--;
      updateTime();
    },1000);
  }



const updateTime = () => {
  if(time>=0){  
  $('#timer').text(`timer: ${time}s`);
  }
}

const updateScore = () => {
    $('#score').text(`${score}`);
  }

function gameEnd(timer){

    clearInterval(timer);

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


//need the button to the replay connected to this game over div
//need this div to appear in front of everything at the main page.  

function reRun(){

  document.getElementById('game-over').remove();


  playForCertificate();

}


function gameOverLose(){
  console.log('game over lose trigger')
  var gameOverOnDOM = document.createElement('div');
  gameOverOnDOM.id="game-over";
  // gameOverOnDOM.style.position="fixed";
  gameOverOnDOM.innerText= "Try Again!";
  gameOverOnDOM.innerHTML+= "<div id=try-again></div>"
  document.body.appendChild(gameOverOnDOM);

  console.log(document.getElementById('try-again'));

  document.getElementById('try-again');

  document.getElementById('try-again').addEventListener("click", reRun);
  // document.getElementById("myBtn").addEventListener("click", displayDate);
  // blotted out to get the lose working.
  // var play= document.createElement('div');
  // play.id="round3";
  // document.getElementById("game-over").appendChild(play);
  // document.getElementById('game-over').appendChild(play);

}




// ==================================================================================//

// var localRecycle = document.createElement('div');
// localRecycle.classList.add('recycle');
// // var localRecycleImage = document.createElement('img');
// // localRecycleImage.setAttribute('src','imgs/battery1.png');
// var aRealItem = document.getElementsByClassName('local-recycle-item');
// aRealItem.appendChild(localRecycle);
// aRealItem.appendChild(localRecycleImage);

      // var localRecycle = document.createElement('div');
      // var localRecycleImage = document.createElement('img');
      // localRecycleImage.setAttribute('src','imgs/battery1.png');
      // var aRealItem = document.getElementsByClassName('local-recycle-item');
      // aRealItem.appendChild(localRecycle);
      // aRealItem.appendChild(localRecycleImage);
      
