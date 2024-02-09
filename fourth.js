let random = Math.round(Math.random()*100+1);
    const submit = document.querySelector('#subt');
    const userinput = document.querySelector('#gfield');
    const guessslot = document.querySelector('.prev');
    const remaining = document.querySelector('.remaining')
    const correctornot = document.querySelector('.correct');
    const restart = document.querySelector('.result');
    console.log(guessslot);

    const p = document.createElement('p');

    let prev = [];
    let numGuess = 1;

    let playgame = true;
    //console.log("0000");

    if(playgame){
        submit.addEventListener('click',function(e){
            e.preventDefault();
            const guess = parseInt(userinput.value);
            //console.log(guess);
            validateGuess(guess);
        })
    }

    function validateGuess(guess){
        if(isNaN(guess))
        {
            alert(`Please guess a  number`);
        }
        else if(guess<1)
        {
            alert(`Please guess greator than 1`);
        }
        else if(guess>100)
        {
            alert(`Please guess less than 100`);
        }
        else{
            prev.push(guess);
            if(numGuess===11)
            {
                displayguess(guess)
                displaymessgae(`Game Over Random Number was ${random}`)
                endgame();
            }
            else{
                displayguess(guess);
                checkguess(guess);
            }
        }
    }
    function checkguess(guess){
           if(guess===random)
           {
            displaymessgae(`Congratulations !! You guessed right number`);
            endgame();
           }
           else if(guess<random)
           {
               displaymessgae(`Number is too low`)
           }
           else if(guess>random)
           {
               displaymessgae(`Number is too high`)
           }
    }

    function displayguess(guess)
    {
            userinput.value='';
            guessslot.innerHTML += `${guess}, `;
            numGuess++;
            remaining.innerHTML = `${11-numGuess}`;
            
            
    }
     
    function displaymessgae(message){
          correctornot.innerHTML= `<h2>${message}</h2>`;
    }

    function endgame()
    {
         userinput.value='';
         userinput.setAttribute("disabled",'');
         p.classList.add('button');
         p.innerHTML = `<h2 id="newGame"> Start New Game </h2>`;
         restart.appendChild(p);
         playgame=false;
         newgame();
    }

    function newgame()
    {
        const newbutton = document.querySelector('#newGame');
        newbutton.addEventListener('click',function(e){
            random = Math.round(Math.random()*100+1);
            prev= [];
            numGuess=1;
            remaining.innerHTML = `${11-numGuess}`;
            guessslot.innerHTML = '';
            userinput.removeAttribute('disabled');
            restart.removeChild(p);
            correctornot.innerHTML='';
            playgame=true;
        })

    }











   /* console.log(random)
    const corr = document.getElementsByClassName('correct')
    //console.log(random);
    const news = parseInt(document.querySelector('#gfield').value);
    form.addEventListener('submit',function(e){
        
        const news = parseInt(document.querySelector('#gfield').value);
        if(news === random)
    {
        console.log("yes")
    }
    })*/
    