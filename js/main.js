


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
  let globalStatus = false;
  let prize;


  /*----- cached elements  -----*/
  const spinBtn = document.querySelector('#spin');
  const holdBtn = document.querySelector('#clear');
  const rolls = [...document.querySelectorAll('#board>div')]
  const roll0 = document.getElementById('c0r0');
  const roll1 = document.getElementById('c0r1');
  const roll2 = document.getElementById('c0r2');
  const cash = document.querySelector('#bankTeller h7');
  const cashBox = document.querySelector('#bankTeller')
  const lastbox = document.querySelector('#last');


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

 //Max allowed Top-up is only once
  function topUp(){
    winCash += 200;
    spinBtn.style.visibility = 'visible';
    cashControl(winCash);
    holdBtn.style.visibility = 'hidden';
    document.getElementById('topUp').play();
  }

  function renderMessage(){

    //Announce how much the player has won $$$
    if(winCash < 5){
        spinBtn.style.visibility = 'hidden';
        return;
    }

    if(board[0] == "alien" && board[1] == 'alien'){
        prize = 10;
        winCash += prize;
        cash.innerText = '$' + winCash;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        lastbox.innerText = `Last Win: ${prize}`;
        console.log(`${board[0]} + ${board[1]} == ${winCash}`);
    }else if(board[0] == "hippo" && board[1] == 'hippo'){
        prize = 10;
        winCash += prize;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        lastbox.innerText = `Last Win: ${prize}`;
        console.log(`${board[0]} + ${board[1]} + ${board[2]}  = Prize ${winCash}`);
    }else if(board[0] == "gazelle" && board[1] == 'gazelle'){
        prize = 10;
        winCash += prize;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        lastbox.innerText = `Last Win: ${prize}`;
        console.log(`${board[0]} + ${board[1]} + ${board[2]}  = Prize ${winCash}`);
    }else if(board[0] == "croco" && board[1] == 'croco' && board[2] == 'croco'){
        prize = 200;
        winCash += prize;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        lastbox.innerText = `Last Win: ${prize}`;
        console.log(`${board[0]} + ${board[1]} + ${board[2]}  = Prize ${winCash}`);
    }else if(board[0] == "lion" && board[1] == 'lion' && board[2] == 'lion'){
        prize = 100;
        winCash += prize;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        lastbox.innerText = `Last Win: ${prize}`;
        console.log(`${board[0]} + ${board[1]} + ${board[2]}  = Prize ${winCash}`);
    }else if(board[0] == "parrot" && board[1] == 'parrot' && board[2] == 'parrot'){
        prize = 10;
        winCash += prize;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        lastbox.innerText = `Last Win: ${prize}`;
        console.log(`${board[0]} + ${board[1]} + ${board[2]}  = Prize ${winCash}`);
    }else if(board[0] == "fish" && board[1] == 'fish' && board[2] == 'fish'){
        prize = 50;
        winCash += prize;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        lastbox.innerText = `Last Win: ${prize}`;
        console.log(`${board[0]} + ${board[1]} + ${board[2]}  = Prize ${winCash}`);
    }else if(board[0] == "diamond" && board[1] == 'diamond' && board[2] == 'diamond'){
        prize = 500;
        winCash += prize;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        lastbox.innerText = `Last Win: ${prize}`;
        console.log(`${board[0]} + ${board[1]} == ${winCash}`);
    }else if(board[0] == "squid" && board[1] == 'squid' && board[2] == 'squid'){
        prize = 300;
        winCash += prize;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        lastbox.innerText = `Last Win: ${prize}`;
        console.log(`${board[0]} + ${board[1]}+ ${board[2]}  = Prize ${winCash}`);
    }else if(board[0] == "joker" && board[1] == 'joker' && board[2] == 'joker'){
        prize = 50;
        winCash += prize;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        lastbox.innerText = `Last Win: ${prize}`;
        console.log(`${board[0]} + ${board[1]} + ${board[2]}  = Prize ${winCash}`);
    }else if(board[0] == "alien" && board[1] == 'alien' && board[2] == 'alien'){
        prize = 100;
        winCash += prize;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        lastbox.innerText = `Last Win: ${prize}`;
        console.log(`${board[0]} + ${board[1]}+ ${board[2]}  = Prize ${winCash} `);
    }else if(board[1] == "croco" && board[2] == 'croco'){
        prize = 20;
        winCash += prize;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        lastbox.innerText = `Last Win: ${prize}`;
        console.log(`${board[1]} + ${board[2]} == ${winCash}`);
    }else if(board[1] == "lion" && board[2] == 'lion'){
        prize = 30;
        winCash += prize;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        lastbox.innerText = `Last Win: ${prize}`;
        console.log(`${board[0]} + ${board[1]} == ${winCash}`);
    }else if(board[1] == 'parrot' && board[2] == 'parrot'){
        prize = 10;
        winCash += prize;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        lastbox.innerText = `Last Win: ${prize}`;
        console.log(`${board[0]} + ${board[1]} == ${winCash}`);
    }else if(board[1] == "fish" && board[2] == 'fish'){
        prize = 5;
        winCash += prize;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        lastbox.innerText = `Last Win: ${prize}`;
        console.log(`${board[0]} + ${board[1]} == ${winCash}`);
    }else if(board[1] == "diamond" && board[2] == 'diamond'){
        prize = 50;
        winCash += prize;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        lastbox.innerText = `Last Win: ${prize}`;
        console.log(`${board[0]} + ${board[1]} == ${winCash}`);
    }else if(board[1] == "squid" && board[2] == 'squid'){
        prize = 50;
        winCash += prize;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        lastbox.innerText = `Last Win: ${prize}`;
        console.log(`${board[0]} + ${board[1]} == ${winCash}`);
    }else if(board[1] == "joker" && board[2] == 'joker'){
        prize = 20;
        winCash += prize;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        lastbox.innerText = `Last Win: ${prize}`;
        console.log(`${board[0]} + ${board[1]} == ${winCash}`);
    }else if(board[1] == "alien" && board[2] == 'alien'){
        prize = 10;
        winCash += prize;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        lastbox.innerText = `Last Win: ${prize}`;
        console.log(`${board[0]} + ${board[1]} == ${winCash}`);
    }else if(board[0] == "croco" && board[1] == 'croco'){
        prize = 20;
        winCash += prize;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        lastbox.innerText = `Last Win: ${prize}`;
        console.log(`${board[0]} + ${board[1]} == ${winCash}`);

    }else if(board[0] == "lion" && board[1] == 'lion'){
        prize = 30;
        winCash += prize;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        lastbox.innerText = `Last Win: ${prize}`;
        console.log(`${board[0]} + ${board[1]} == ${winCash}`);
    }else if(board[0] == "parrot" && board[1] == 'parrot'){
        prize = 10;
        winCash += prize;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        lastbox.innerText = `Last Win: ${prize}`;
        console.log(`${board[0]} + ${board[1]} == ${winCash}`);
    }else if(board[0] == "fish " && board[1] == 'fish'){
        prize = 10;
        winCash += prize;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        lastbox.innerText = `Last Win: ${winCash}`;
        console.log(`${board[0]} + ${board[1]} == ${winCash}`);
    }else if(board[0] == "diamond" && board[1] == 'diamond'){
        prize = 50;
        winCash += prize;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        lastbox.innerText = `Last Win: ${prize}`;
        console.log(`${board[0]} + ${board[1]} ==  Prize ${winCash}`);
    }else if(board[0] == "squid" && board[1] == 'squid'){
        prize = 30;
        winCash += prize;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        lastbox.innerText = `Last Win: ${prize}`;
        console.log(`${board[0]} + ${board[1]} == ${winCash}`);
    }else if(board[0] == "joker" && board[1] == 'joker'){
        prize = 20;
        winCash += prize;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        lastbox.innerText = `Last Win: ${prize}`;
        console.log(`${board[0]} + ${board[1]} == ${winCash}`);
    }else if(board[0] == "bell" && board[1] == 'bell'){
        prize = 15;
        winCash += prize;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        lastbox.innerText = `Last Win: ${prize}`;
        console.log(`${board[0]} + ${board[1]} == ${winCash}`);
    }else if(board[1] == "hippo" && board[2] == 'hippo'){
        prize = 15;
        winCash += prize;
        globalStatus = true;
        cashControl(winCash,globalStatus);
        lastbox.innerText = `Last Win: ${prize}`;
        console.log(`${board[0]} + ${board[1]} == ${winCash}`);
    }
    else{
        globalStatus = false;
        cashControl(winCash,globalStatus);        
    }


}

  function renderControlls(){
    //If the player goes cash < 100$ remove the Spin and Hold Buttons

    if(winCash === 0){
        win = 0;
        // globalStatus = false;
        document.getElementById('gameOver').play();
        // document.querySelector('#h1').innerText = 'Game Over';

        spinBtn.style.visibility = 'hidden';
        // spinBtn.innerHTML = " ";
        holdBtn.innerText = 'Top UP';
        cashBox.style.backgroundImage = ` `;
        cash.innerText = '💸💸💸';
        cash.style.fontSize = '25px';
    }

  }

function init(){
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

    let timeOutId;
    
function cashControl(winCash, status){
    spinBtn.style.visibility = 'hidden';
    clearTimeout(timeOutId);

    if(winCash <= 0){
        // alert('GameOver');
        return;
    }

    //To allow the music effect to play at each spin, the Spin button 
    //gets frozen for a short amount of time
    if(status){
        // spinBtn.style.visibility = 'hidden';

        //The winSound is delayed 500ms to allow the spinning animation
        //to remove itself and display the winning roll set.
        timeOutId = setTimeout(function(){
            document.getElementById('winSound').play();

        },500);

        timeOutId= setTimeout(function(){
            spinBtn.style.visibility = 'visible';
            console.log('we are inside');
        },1500)
        console.log('win');
    }else{
        //In case of victory the Spin button gets frozen for 3s 
        //To let the user acknoweldge their win
         timeOutId = setTimeout(function(){
            spinBtn.style.visibility = 'visible';
        },700)
        console.log('lost');
    }
    cash.innerText = '$'+winCash;
}



function handle(evt){
    document.getElementById('spinEffect').play()

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

let timeOutId2;
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
    //Spin animation
    const spinGif = document.createElement('img');
    spinGif.src = 'https://media.tenor.com/1nOprhZxa4sAAAAi/ferris-wheel-joypixels.gif';


 

    // Creating the img element for Roll0
    const rollImg0 = document.createElement('img');
    rollImg0.src = combos[board[0]];
    rollImg0.width = 420;
    rollImg0.height = 420;
    // console.log(combos[board[0]], 'Check here');
    // Creating the img element for Roll0
    const rollImg1 = document.createElement('img');
    rollImg1.src = combos[board[1]];
    rollImg1.width = 420;
    rollImg1.height = 420;
    // Creating the img element for Roll0
    const rollImg2 = document.createElement('img');
    rollImg2.src = combos[board[2]];
    rollImg2.width = 420;
    rollImg2.height = 420;
    //Appending generated elements with the randomized rolls
    clearTimeout(timeOutId2);

    //First the animation roll gets appended 
    timeOutId2= setTimeout(function(){
        roll0.appendChild(spinGif.cloneNode(true));
        roll1.appendChild(spinGif.cloneNode(true));
        roll2.appendChild(spinGif.cloneNode(true));
    },100)

    //After running for 100ms it gets removed to leave space to the actual roll set

    timeOutId2 = setTimeout(function(){
        roll0.innerHTML = '';
        roll1.innerHTML= '';
        roll2.innerHTML= '';

    },350)

    //The actual roll image gets appended to each roll div.
    //It gets delayed 600ms to allow the spinning effect and the cleaning part to exectute
    //allowing a smooth transition
    timeOutId2= setTimeout(function(){
        roll0.appendChild(rollImg0);
        roll1.appendChild(rollImg1);
        roll2.appendChild(rollImg2);
    },600)


    // roll0.appendChild(rollImg0);
    // roll1.appendChild(rollImg1);
    // roll2.appendChild(rollImg2);
    //Setting Timer to let the User realize their win
    setTimeout(renderMessage,100);
}