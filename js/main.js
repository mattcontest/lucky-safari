


  /*----- constants -----*/
  const combos ={
    'croco' : 'https://openclipart.org/image/800px/215745',
    'lion' : 'https://openclipart.org/image/800px/246150',
    'gazelle': 'https://cdn-icons-png.flaticon.com/512/2865/2865197.png',
    'hippo': 'https://cdn-icons-png.flaticon.com/512/2938/2938238.png',
    'parrot': 'https://openclipart.org/image/800px/309450',
    'diamond' : 'https://cdn-icons-png.flaticon.com/512/247/247837.png',
    'bell': 'https://cdn-icons-png.flaticon.com/512/5336/5336109.png',
    'squid': 'https://cdn-icons-png.flaticon.com/512/651/651476.png',
    'fish': 'https://cdn-icons-png.flaticon.com/512/2990/2990515.png',
    'joker': 'https://cdn-icons-png.flaticon.com/512/1624/1624750.png',
    'alien': 'https://cdn-icons-png.flaticon.com/512/3407/3407905.png'
  };


 


  /*----- state variables -----*/
  let board;
  let spin;
  let winCash = 100;
  let globalStatus = true;


  /*----- cached elements  -----*/
  const spinBtn = document.querySelector('#spin');
  const holdBtn = document.querySelector('#clear');
  const rolls = [...document.querySelectorAll('#board>div')]
  const roll0 = document.getElementById('c0r0');
  const roll1 = document.getElementById('c0r1');
  const roll2 = document.getElementById('c0r2');
  const cash = document.querySelector('#bankTeller h7');
  const cashBox = document.querySelector('#bankTeller')


  /*----- event listeners -----*/
  spinBtn.addEventListener('click', handle)
  holdBtn.addEventListener('click', topUp)

  /*----- functions -----*/
  init();

  function cleanUp(){
    roll0.innerHTML = " ";
    roll1.innerHTML = " ";
    roll2.innerHTML = " ";
    board = [0,0,0];
  }

  function renderBoard(){
    //associate each rollImage to the board
    let board = [];
  }

  function topUp(){
    winCash += 200;
    spinBtn.style.visibility = 'visible';
    cashControl(winCash);
  }

  function renderMessage(){
    // if(!globalStatus){
    //     cash.innerHTML = "💸";
    //     console.log('No prize added');
    // }

    //Announce how much the player has won $$$
    if(winCash < 5){
        spinBtn.style.visibility = 'hidden';
        return;
    }

    if(board[0] == "alien" && board[1] == 'alien'){
        alert('You won!');
        winCash += 10;
        cash.innerText = '$' + winCash;
        globalStatus = true;
        cashControl(winCash,globalStatus);
    
        console.log(`${board[0]} + ${board[1]} == ${winCash}`);
    }else if(board[0] == "hippo" && board[1] == 'hippo'){
        alert('You won!');
        winCash += 10;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        console.log(`${board[0]} + ${board[1]} + ${board[2]}  = Prize ${winCash}`);
    }else if(board[0] == "gazelle" && board[1] == 'gazelle'){
        alert('You won!');
        winCash += 10;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        console.log(`${board[0]} + ${board[1]} + ${board[2]}  = Prize ${winCash}`);
    }else if(board[0] == "croco" && board[1] == 'croco' && board[2] == 'croco'){
        alert('You won!');
        winCash += 200;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        console.log(`${board[0]} + ${board[1]} + ${board[2]}  = Prize ${winCash}`);
    }else if(board[0] == "lion" && board[1] == 'lion' && board[2] == 'lion'){
        alert('You won!');
        winCash += 100;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        console.log(`${board[0]} + ${board[1]} + ${board[2]}  = Prize ${winCash}`);
    }else if(board[0] == "parrot" && board[1] == 'parrot' && board[2] == 'parrot'){
        alert('You won!');
        winCash += 50;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        console.log(`${board[0]} + ${board[1]} + ${board[2]}  = Prize ${winCash}`);
    }else if(board[0] == "fish" && board[1] == 'fish' && board[2] == 'fish'){
        alert('You won!');
        winCash += 15;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        console.log(`${board[0]} + ${board[1]} + ${board[2]}  = Prize ${winCash}`);
    }else if(board[0] == "diamond" && board[1] == 'diamond' && board[2] == 'diamond'){
        alert('You won!');
        winCash += 500;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        console.log(`${board[0]} + ${board[1]} == ${winCash}`);
    }else if(board[0] == "squid" && board[1] == 'squid' && board[2] == 'squid'){
        alert('You won!');
        winCash += 300;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        console.log(`${board[0]} + ${board[1]}+ ${board[2]}  = Prize ${winCash}`);
    }else if(board[0] == "joker" && board[1] == 'joker' && board[2] == 'joker'){
        alert('You won!');
        winCash += 50;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        console.log(`${board[0]} + ${board[1]} + ${board[2]}  = Prize ${winCash}`);
    }else if(board[0] == "alien" && board[1] == 'alien' && board[2] == 'alien'){
        alert('You won!');
        winCash += 5;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        console.log(`${board[0]} + ${board[1]}+ ${board[2]}  = Prize ${5 -winCash} `);
    }else if(board[1] == "croco" && board[2] == 'croco'){
        alert('You won!');
        winCash += 10;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        console.log(`${board[1]} + ${board[2]} == ${winCash}`);
    }else if(board[1] == "lion" && board[2] == 'lion'){
        alert('You won!');
        winCash += 10;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        console.log(`${board[0]} + ${board[1]} == ${winCash}`);
    }else if(board[1] == 'parrot' && board[2] == 'parrot'){
        alert('You won!');
        winCash += 10;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        console.log(`${board[0]} + ${board[1]} == ${winCash}`);
    }else if(board[1] == "fish" && board[2] == 'fish'){
        alert('You won!');
        winCash += 10;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        console.log(`${board[0]} + ${board[1]} == ${winCash}`);
    }else if(board[1] == "diamond" && board[2] == 'diamond'){
        alert('You won!');
        winCash += 10;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        console.log(`${board[0]} + ${board[1]} == ${winCash}`);
    }else if(board[1] == "squid" && board[2] == 'squid'){
        alert('You won!');
        winCash += 10;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        console.log(`${board[0]} + ${board[1]} == ${winCash}`);
    }else if(board[1] == "joker" && board[2] == 'joker'){
        alert('You won!');
        winCash += 10;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        console.log(`${board[0]} + ${board[1]} == ${winCash}`);
    }else if(board[1] == "alien" && board[2] == 'alien'){
        alert('You won!');
        winCash += 10;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        console.log(`${board[0]} + ${board[1]} == ${winCash}`);
    }else if(board[0] == "croco" && board[1] == 'croco'){
        alert('You won!');
        winCash += 10;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        console.log(`${board[0]} + ${board[1]} == ${winCash}`);

    }else if(board[0] == "lion" && board[1] == 'lion'){
        alert('You won!');
        winCash += 10;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        console.log(`${board[0]} + ${board[1]} == ${winCash}`);
    }else if(board[0] == "parrot" && board[1] == 'parrot'){
        alert('You won!');
        winCash += 10;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        console.log(`${board[0]} + ${board[1]} == ${winCash}`);
    }else if(board[0] == "fish " && board[1] == 'fish'){
        alert('You won!');
        winCash += 10;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        console.log(`${board[0]} + ${board[1]} == ${winCash}`);
    }else if(board[0] == "diamond" && board[1] == 'diamond'){
        alert('You won!');
        winCash += 10;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        console.log(`${board[0]} + ${board[1]} ==  Prize ${winCash}`);
    }else if(board[0] == "squid" && board[1] == 'squid'){
        alert('You won!');
        winCash += 10;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        console.log(`${board[0]} + ${board[1]} == ${winCash}`);
    }else if(board[0] == "joker" && board[1] == 'joker'){
        alert('You won!');
        winCash += 10;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        console.log(`${board[0]} + ${board[1]} == ${winCash}`);
    }else if(board[0] == "bell" && board[1] == 'bell'){
        alert('You won!');
        winCash += 10;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        console.log(`${board[0]} + ${board[1]} == ${winCash}`);
    }
    
    

}

  function renderControlls(){
    //If the player goes cash < 100$ remove the Spin and Hold Buttons

    if(winCash === 0){
        win = 0;
        globalStatus = false;
        spinBtn.style.visibility = 'hidden';
        // spinBtn.innerHTML = " ";
        holdBtn.innerText = 'Top UP';
        cashBox.style.backgroundImage = ` `;
        cash.innerText = '💸💸💸';
        cash.style.fontSize = '25px';
        // return globalStatus;
    }

  }

function init(){
    // spinBtn.style.visibility = 'visible';
    board = [0,0,0];

    console.log('Good luck');
    roll0.addEventListener('click', function(){
        console.log('ROLL0');
    })

    roll1.addEventListener('click',function(){
        console.log('ROLL1');
    })

    roll2.addEventListener('click',function(){
        console.log('ROLL2')
    })
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

function cashControl(winCash, globalStatus){

    if(winCash <= 0){
        alert('GameOver');
        spinBtn.style.visibility = 'hidden';
    }
    
    
    //In case of victory the Spin button gets frozen for 3s 
    //To let the user acknoweldge their win
    if(globalStatus){
        spinBtn.style.visibility = "hidden";
        setTimeout(function(){
        spinBtn.style.visibility = 'visible';
        }, 900);

    }


    cash.innerText = '$'+winCash;

}



function handle(evt){
    renderControlls();
    winCash -= 5;
    cashControl(winCash);


    let rollsArray = [];
    if(rollsArray.length >1){
        cleanUp();
        rollsArray = [];
    }

    rollsArray.push(randomizer());
    rollsArray.push(randomizer());
    rollsArray.push(randomizer());

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


//Lucky Safari's render function
function generate(rollsArray){    
    // renderMessage();
    renderControlls()

    //CleanUP after every Spin
    cleanUp();
    
    board[0] = rollsArray[0];
    board[1] = rollsArray[1];
    board[2] = rollsArray[2];
    // renderMessage();
    // console.log(rollsArray, 'Here <----')
    // console.log(board[0],board[1],board[2], 'Indexes??');
    // console.log(rollsArray, 'Generate');
    // console.log(combos[board[0]] ," <----");
    //Generate first roll element
    // Creating the img element for Roll0
    const rollImg0 = document.createElement('img');
    rollImg0.src = combos[board[0]];
    rollImg0.width = 220;
    rollImg0.height = 220;
    // console.log(combos[board[0]], 'Check here');
    // Creating the img element for Roll0
    const rollImg1 = document.createElement('img');
    rollImg1.src = combos[board[1]];
    rollImg1.width = 220;
    rollImg1.height = 220;
    // Creating the img element for Roll0
    const rollImg2 = document.createElement('img');
    rollImg2.src = combos[board[2]];
    rollImg2.width = 220;
    rollImg2.height = 220;
    //Appending generated elements with the randomized rolls
    roll0.appendChild(rollImg0);
    roll1.appendChild(rollImg1);
    roll2.appendChild(rollImg2);
    
    //Setting Timer to let the User realize their win
    setTimeout(renderMessage,100);

    
}