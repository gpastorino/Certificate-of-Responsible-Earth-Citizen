



//Most recent todos, and notes:  
//make more than 4 images populate
//second round the sounds are off.  and started registering wrong.  

const containerClick = document.getElementById('containerclick');
const victory = document.getElementById('victory');
const goAgain = document.getElementById('goagain');
const getCertificate = document.getElementById('getcertificate');
const wrong = document.getElementById('wrong');


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
    getCertificate.play();
    setTimer();
    addItem();

    document.querySelector(".grocery").addEventListener("click", ()=>{

      containerClick.play();

      let d = document.getElementsByClassName("grocerystore-item");
         // items to match as wrong:
      let c =document.getElementsByClassName("compost-item");
      let e = document.getElementsByClassName("askcity-item");
      let f =document.getElementsByClassName("local-recycle-item");

      if(d[0]){

        score++
        updateScore();

        d[0].remove();
        addItem();
        console.log('grocery to be item removed!');
      }else {
        wrong.play();
      }
      console.log(`this is the  ${score}`);
    });
    
    document.querySelector(".compost").addEventListener("click", ()=>{
    
      containerClick.play();

      let c = document.getElementsByClassName("compost-item");
        // items to match as wrong:
      let e = document.getElementsByClassName("askcity-item");
      let f =document.getElementsByClassName("local-recycle-item");
      let d = document.getElementsByClassName("grocerystore-item");

      if(c[0]){
        score++
        updateScore();

        console.log(c);
        c[0].remove();
        console.log('compost pared');
        addItem();
      // }else if(!d[0] || !e[0]|| !f[0]){
      //   wrong.play();
      // }
    } else {
      wrong.play();
    }
    console.log(`this is the  ${score}`);
    });

    document.querySelector(".askcity").addEventListener("click", ()=>{

      containerClick.play();

      let e = document.getElementsByClassName("askcity-item");
    //items to match as wrong:  
      let c =document.getElementsByClassName("compost-item");
      let d = document.getElementsByClassName("grocerystore-item");
      let f =document.getElementsByClassName("local-recycle-item");

      if(e[0]){

        score++
        updateScore();

        e[0].remove();

        addItem();

        console.log('to remove askcity block');

      // }else if(!c[0]|| !d[0]|| !f[0]){
      //   wrong.play();
      // }
    } else {
      wrong.play();
    }
      console.log(`this is the  ${score}`);
    });

    document.querySelector(".local").addEventListener("click", ()=>{
 
      containerClick.play();

      let f = document.getElementsByClassName("local-recycle-item");
    //items to match as wrong:  
      let c =document.getElementsByClassName("compost-item");
      let e = document.getElementsByClassName("askcity-item");
      let d = document.getElementsByClassName("grocerystore-item");

      // console.log(f)

      if(f[0]){
        score++
        updateScore();

        f[0].remove();
        addItem();
        console.log('local recycle block removed');
      // }else if(!c[0]|| !d[0]|| !e[0]){
      //   wrong.play();
      // }
    // } else if(!d[0] || !e[0]|| !f[0]){
    //   wrong.play();
    // }
    } else {
      wrong.play();
    }
    
    });

    console.log(`this is the  ${score}`);
}




//couldn't get this randomize images to work.  needed the right dom element and class name referenced.  

function addItem(){


  const itemsArray = ['compost-item','grocerystore-item', 'askcity-item' ,'local-recycle-item'];
    
  const generateItemClassName = () => {

      //note for future:  move from strings to objects. 
   

      const index = Math.floor(Math.random()*itemsArray.length);
      return itemsArray[index];

    }

    let randomItem = document.createElement("div"); 
    randomItem.className = `${generateItemClassName()}`;


    // if(randomItem === 'grocerystore-item'){

      if(randomItem == document.getElementsByClassName('grocerystore-item')){
    
        function randomizePix(arr) {
          var randomNum = Math.floor(Math.random() * arr.length);
          document.getElementsByClassName("grocerystore-item").src = arr[randomNum];
        }
  
        let groceryPix = ['https://i.imgur.com/Ir8b5E2.png','https://i.imgur.com/eQTx4oP.png'];
        randomItem.style.backgroundImage = `url(${randomizePix(groceryPix)})`;
  
      // }else if( randomItem =='compost-item'){
      }else if(randomItem == document.getElementsByClassName('compost-item')){
        // 
        function randomizePix(compostPix) {
          var randomNum = Math.floor(Math.random() * compostPix.length);
          document.getElementsByClassName("compost-item").src = compostPix[randomNum];
        }
        let compostPix = ['https://i.imgur.com/ODXTV6A.png', 'https://i.imgur.com/24sxkr3.png', 'https://i.imgur.com/lhygZQ6.png'];
        randomItem.style.backgroundImage = `url(${randomizePix(compostPix)})`;
  
        // randomizePix(compostPix);
  

      // }else if(randomItem === 'askcity-item'){
      }else if(randomItem == document.getElementsByClassName('askcity-item')){
        // 
        function randomizePix(askCityPix) {
          var randomNum = Math.floor(Math.random() * askCityPix.length);
          document.getElementsByClassName("askcity-item").src = askCityPix[randomNum];
        }
        let askCityPix = ['https://i.imgur.com/oEue3Fd.png', 'https://i.imgur.com/0VuOwrm.png','https://i.imgur.com/mqOPc5W.png'];
        randomItem.style.backgroundImage = `url(${randomizePix(askCityPix)})`;
  
      // }else if(randomItem === 'local') {
      }else if(randomItem == document.getElementsByClassName('local-recycle-item')){
        function randomizePix(localRecyclePix) {
          var randomNum = Math.floor(Math.random() * localRecyclePix.length);
          document.getElementsByClassName("local-recycle-item").src = localRecyclePix[randomNum];
        }
        let localRecyclePix =['https://i.imgur.com/zCuzBDH.png','https://i.imgur.com/jWjvw4C.png', 'https://i.imgur.com/khA1RWF.png', 'https://i.imgur.com/3MAM0AE.png'];
        randomItem.style.backgroundImage = `url(${randomizePix(localRecyclePix)})`;
      }
    

    function check(){

      const leftMarginPercent =['20%', '25%', '30%','35%', '40%', '45%', '50%','55%', '60%','65%', '70%'];
      const index = Math.floor(Math.random() * leftMarginPercent.length);
      return leftMarginPercent[index];
    }

    //note:  remember to only reference the dom when something is in the dom.  
    //Not before.  This isn't in the dom yet, and can just work as a free variable assigned a new attribite. 

    randomItem.style.margin = `90px 0 0 ${check()}`;

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

          victory.play();
          certificate();

          scoreReportWin();

          $('#items').empty();
        }else{
      
          goAgain.play();
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

}

function gameOverWin(){


    console.log('game over - but,  SUCCESS')
    var certificateOnDOM = document.createElement('div');
    certificateOnDOM.id="certificate";

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









