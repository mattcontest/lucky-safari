console.log('hello, it works!');


  /*----- constants -----*/
  const combos ={
    'croco' : 'insert crocodile',
    'lion' : 'insert lion',
    'gazelle': 'insert gazelle',
    'hippo': 'https://openclipart.org/image/800px/22337',
    'parrot': 'insert parrot'
  };

  const rolled = {
    'play1' : 'crocodile',
    'play2' : 'lion',
    'play3' : 'gazelle',
    'play4' : 'hippo',
    'play5' : 'parrot'
  }

  const rollers = ['play1','play2','play3','play4','play5'];





  /*----- state variables -----*/
  let board;
  let spin;
  let winCash; 


  /*----- cached elements  -----*/
  const spinBtn = document.querySelector('#spin');
  const holdBtn = document.querySelector('#hold');
  const rolls = [...document.querySelectorAll('#board>div')]
  const roll0 = document.getElementById('c0r0');
  const roll1 = document.getElementById('c0r1');
  const roll2 = document.getElementById('c0r2');





  



  /*----- event listeners -----*/
  spinBtn.addEventListener('click', handle)

  holdBtn.addEventListener('click',cleanUp)




  /*----- functions -----*/
  init();
  
  function cleanUp(){
    roll0.innerHTML = " ";
    roll1.innerHTML = " ";
    roll2.innerHTML = " ";
  }

  function renderBoard(){
    //associate each rollImage to the board

  }

  function renderMessage(){
    //Announce how much the player has won $$$

  }

  function renderControlls(){
    //If the player goes cash < 100$ remove the Spin and Hold Buttons

  }

function init(){
    board = [0,0,0];
    console.log('Good luck');
    // render();

    roll0.addEventListener('click', function(){
        console.log('ROLL0');
    })

    roll1.addEventListener('click',function(){
        console.log('ROLL1');
    })

    roll2.addEventListener('click',function(){
        console.log('ROLL2')
    })
    const col0 = board[0];
    const col1 = board[1];
    const col2 = board[2];
    
}

function randomizer(){
    //Randomize the content for each roll spin
    const combosArray = Object.keys(combos)

    //Random Choice
    const randomIdx = Math.floor(Math.random() * combosArray.length);
    //Random Key
    const randomKey = combosArray[randomIdx];
    //Now we get Random value by using random Key
    const playValue = combos[randomKey];
    // console.log(playValue);
    return randomKey;

}



function handle(evt){

    const rollsArray = [];
    rollsArray.push(randomizer());
    rollsArray.push(randomizer());
    rollsArray.push(randomizer());
    console.log(rollsArray[0], "<----")
    console.log(rollsArray, 'Handle');
    generate(rollsArray);
                
 //Checkers 
    roll0.addEventListener('click', function(){
     console.log(board[0]);
    })
                
    roll1.addEventListener('click', function(){
       console.log(board[1]);
     })
                
    roll2.addEventListener('click', function(){
        console.log(board[2]);
    })
                           
}



function generate(rollsArray){
    //First we clean off the previous Roll
    // roll0.innerHTML = "";
    // roll1.innerHTML = "";
    // roll2.innerHTML = "";
    value0 = rollsArray[0];
    value1 = rollsArray[1];
    value2 = rollsArray[2];
    console.log(value0,value1,value2);
    console.log(rollsArray, 'Generate');
    console.log(combos[value0] ," <----");
    
    //Generate first roll element
    // Default roll when the game starts
    const rollImg = document.createElement('img');
    rollImg.src = combos[value0];
    rollImg.width = 220;
    rollImg.height = 220;
    console.log(combos[value0], 'Check here');



    roll0.appendChild(rollImg.cloneNode(true));
    roll1.appendChild(rollImg.cloneNode(true));
    roll2.appendChild(rollImg.cloneNode(true));



}