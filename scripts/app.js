
//make more than 4 images populate

//fix flexbox

//create designs


//where do i put this?  
//$('#items').empty();

//when i hit the replay, it starts to score twice.  

let time;
let score;
console.log('Welcome to Earthling Resposibility Program...');

document.querySelector(".round2").addEventListener("click", playForCertificate);


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
      if(d[0]){
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
      if(c[0]){
        console.log(c);
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
      if(e[0]){

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


      if(f[0]){
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


    if(randomItem === 'grocerystore-item'){
    // if(randomItem == itemsArray[1]){
      // 
      function randomizePix(groceryPix) {
        var randomNum = Math.floor(Math.random() * arr.length);
        document.getElementsByClassName("grocerystore-item").src = arr[randomNum];
      }

      let groceryPix = ['../imgs/plasticbag1a.png','../imgs/plasticbag2 copy-add1.png'];
      randomItem.style.backgroundImage = randomizePix(groceryPix);

    }else if( randomItem =='compost-item'){
    // }else if( randomItem ==itemsArray[0]){
      // 
      function randomizePix(compostPix) {
        var randomNum = Math.floor(Math.random() * compostPix.length);
        document.getElementsByClassName("compost-item").src = compostPix[randomNum];
      }
      let compostPix = ['../imgs/pizzaboxright.png', '../imgs/CompostA-add1.png', '../imgs/compostB-add 2.png'];
      randomItem.style.backgroundImage = randomizePix(compostPix);

      // randomizePix(compostPix);


    }else if(randomItem === 'askcity-item'){
    // }else if(randomItem == itemsArray[2]){
      // 
      function randomizePix(askCityPix) {
        var randomNum = Math.floor(Math.random() * askCityPix.length);
        document.getElementsByClassName("askcity-item").src = askCityPix[randomNum];
      }
      let askCityPix = ['../imgs/shreddedperfect.png', '../imgs/shredded-add2.png','../imgs/shredded-add3.png'];
      randomItem.style.backgroundImage = randomizePix(askCityPix);

    }else{

      function randomizePix(localRecyclePix) {
        var randomNum = Math.floor(Math.random() * localRecyclePix.length);
        document.getElementsByClassName("local-recycle-item").src = localRecyclePix[randomNum];
      }
      let localRecyclePix =['../imgs/battery-add1.png','../imgs/battery-add2.png', '../imgs/battery-add3.png'];
      randomItem.style.backgroundImage = randomizePix(localRecyclePix);

    }
  
    function check(){

      const leftMarginPercent =['20%', '25%', '30%','35%', '40%', '45%', '50%','55%', '60%','65%', '70%'];
      const index = Math.floor(Math.random() * leftMarginPercent.length);
      return leftMarginPercent[index];
    }

    //remember to only reference the dom when something is in the dom.  Not before.  This isn't in the dom yet, and can just work as a free variable assigned a new attribite. 
    randomItem.style.margin = `90 0 0 ${check()}`;

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

          scoreReportWin();

          $('#items').empty();
        }else{
          gameOverLose();

          scoreReportLose();

          gameEnd(timer);


  //this should occur when time runs out and the prompt to retry shows up.  

  $('#items').empty();

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

  gameOverWin();

  // document.querySelector('body1').remove();
  // document.querySelector('footer').remove();

  // var certificateOnDOM = document.createElement('div');
  // certificateOnDOM.id="cert";
  // certificateOnDOM.innerText= "Here's Your Excellent Certificate of Excellence!";
  // document.body.appendChild(certificateOnDOM);


}

function gameOverWin(){

  // document.querySelector('body1').remove();
  // document.querySelector('footer').remove();

    console.log('game over - but,  SUCCESS')
    var certificateOnDOM = document.createElement('div');
    certificateOnDOM.id="certificate";
    // gameOverOnDOM.style.position="fixed";
    certificateOnDOM.innerText= "CONGRATULATIONS!  Print this window for for your certification.";
    certificateOnDOM.innerHTML+= "<div id=try-again2></div>"
    document.body.appendChild(certificateOnDOM);
  
    console.log(document.getElementById('try-again2'));
  
    document.getElementById('try-again2');
  
    document.getElementById('try-again2').addEventListener("click", reRun);
  
  }



function reRun(){

  document.getElementById('certificate').remove();
  resetScore();
  playForCertificate();

}

function reRun2(){

  document.getElementById('game-over').remove();
  resetScore();
  playForCertificate();

}



function gameOverLose(){

  console.log('game over lose trigger')
  var gameOverOnDOM = document.createElement('div');

  gameOverOnDOM.id="game-over";

  gameOverOnDOM.innerText= "Try Again!";
  gameOverOnDOM.innerHTML+= "<div id='try-again'></div>"
  document.body.appendChild(gameOverOnDOM);

  console.log(document.getElementById('try-again'));

  document.getElementById('try-again');

  document.getElementById('try-again').addEventListener("click", reRun2);

}


function scoreReportLose(){

  var scoreReporting = document.createElement('div');

  scoreReporting.id="score-end";

  scoreReporting.innerHTML+= `<div id='score-end'>Your FINAL SCORE is:  ${score} </div>`;
  document.getElementById('game-over');
  document.getElementById('game-over').appendChild(scoreReporting);


}


function scoreReportWin(){
  var scoreReporting = document.createElement('div');

  scoreReporting.id="score-end";

  scoreReporting.innerHTML+= `<div id='score-end'>Your FINAL SCORE is:  ${score} </div>`;

  document.getElementById('try-again2');

  document.getElementById('certificate').appendChild(scoreReporting);

}

function resetScore(){
let score=0;

}