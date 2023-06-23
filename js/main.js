


  /*----- constants -----*/
  const combos ={
    'croco' : 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWJvZ3lkZjNybGxoaWxmNWtxMnI1azkydWszejIwMHhpemdoNjlvMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/4NaIvS9NlMVPLFKSOF/giphy.gif',
    'lion' : 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2xsa2luenpiYWI3Zmh2Zng4eWF4amFqb3gwMzVleHB5MHdpcWpmciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/zM4X4tXjNjiyUYfbxk/giphy.gif',
    'gazelle': 'https://media1.giphy.com/media/YrqF3Ikyohil1oITvp/giphy.webp?cid=ecf05e47kzp953iqkyhwwcno5az0jbccppf84zgk0azsq4he&ep=v1_stickers_search&rid=giphy.webp&ct=s',
    'hippo': 'https://media0.giphy.com/media/5LfpQri4JyO8YcCyy0/200w.webp?cid=ecf05e47mph5jc9eup0iy1oyhvz0soysjiwjcgqf0b16kclf&ep=v1_stickers_search&rid=200w.webp&ct=s',
    'parrot': 'https://media4.giphy.com/media/6e99A7Atr6n3tAbKUP/giphy.webp?cid=ecf05e47ks1u7oioup32h2v68pzbp6a0nqoji07pelpmf6jq&ep=v1_stickers_search&rid=giphy.webp&ct=s',
    'diamond' : 'https://media1.giphy.com/media/pLdVWrcyYuDbA1gzRC/200w.webp?cid=ecf05e47hhpriselv5qvevd05w79ip9n9psew3p9v0yunlt5&ep=v1_stickers_search&rid=200w.webp&ct=s',
    'bell': 'https://media3.giphy.com/media/c4xEmDUFAu8neJZvQ9/200.webp?cid=ecf05e47k9j3j28ldh228zgwdeprpdp33wgl726niwj677hb&ep=v1_stickers_search&rid=200.webp&ct=s',
    'squid': 'https://media0.giphy.com/media/JqxEmLl6S3wArfwX0F/200w.webp?cid=ecf05e47wgr1byxph16ipprgjyfjbhjoev7bxh5ozfikni60&ep=v1_stickers_search&rid=200w.webp&ct=s',
    'fish': 'https://media2.giphy.com/media/93d2jBqwBCuToHiBZO/200w.webp?cid=ecf05e472ckgdujk40mncfesu0ggpgju25sygrbu0hrytr1n&ep=v1_stickers_search&rid=200w.webp&ct=s',
    'joker': 'https://media3.giphy.com/media/jpbp1yCvgnXiAfL7fI/200w.webp?cid=ecf05e47be7at6tjejsvid4ha0v18fr78x08d7prym7vmyc0&ep=v1_stickers_search&rid=200w.webp&ct=s',
    'alien': 'https://media0.giphy.com/media/EtiAbGEV4BHS2IGVJl/200w.webp?cid=ecf05e47d5zh6qc6vya8y4i1z6hnwam8byttlrsvzd9crw8s&ep=v1_stickers_search&rid=200w.webp&ct=s'
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

//   const headerBox = document.querySelector('#markers>div');
//   const headImg = document.createElement('img');
//   headImg.src = "resources/headerImg.png"
//   headerBox.style.backgroundImage= `url(${headImg.src})`;


//   headerBox.appendChild(headImg);



//   const rollDivs = document.getElementById('c0r0');
//   const rollImg = document.createElement("img");
//   rollImg.src = "resources/leafs.gif";
//   rollDivs.appendChild(rollImg);




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
    let timeOutId3;
    let timeOutId4;
    let timeOutId5;
    
function cashControl(winCash, status){
    spinBtn.style.visibility = 'hidden';
    clearTimeout(timeOutId);
    clearTimeout(timeOutId3);
    clearTimeout(timeOutId4);
    clearTimeout(timeOutId5);
    // clearTimeout(timeOutId3)

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

        },700);

        timeOutId3= setTimeout(function(){
            spinBtn.style.visibility = 'visible';
            console.log('we are inside');
        },2150);

        console.log('win');
    }else{
        //In case of victory the Spin button gets frozen for 3s 
        //To let the user acknoweldge their win
         timeOutId4 = setTimeout(function(){
            spinBtn.style.visibility = 'visible';
        },700)
        console.log('lost');
    }

    timeOutId5 = setTimeout(function(){
        cash.innerText = '$'+winCash;
    },120);
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

    //Spin animation
    const spinGif = document.createElement('img');
    // spinGif.src = 'https://media.tenor.com/1nOprhZxa4sAAAAi/ferris-wheel-joypixels.gif';
    spinGif.src = 'https://media3.giphy.com/media/TneGjT1HDhkG15wQpP/200.webp?cid=ecf05e474lwmzkj6lxikhecidfbi4zwl0b45dg5pk68x195q&ep=v1_stickers_search&rid=200.webp&ct=s'
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

    },750)

    //The actual roll image gets appended to each roll div.
    //It gets delayed 600ms to allow the spinning effect and the cleaning part to exectute
    //allowing a smooth transition
    timeOutId2= setTimeout(function(){
        roll0.appendChild(rollImg0);
        roll1.appendChild(rollImg1);
        roll2.appendChild(rollImg2);
    },800)


    // roll0.appendChild(rollImg0);
    // roll1.appendChild(rollImg1);
    // roll2.appendChild(rollImg2);
    //Setting Timer to let the User realize their win
    setTimeout(renderMessage,100);
}