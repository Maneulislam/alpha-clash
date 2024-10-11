
function hiddenId(elementId){

    const element = document.getElementById(elementId);
    element.classList.add('hidden');
    
}




function showId(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}





function getAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');


    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}





function setBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}




function removeBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getElement(elementId){
    const element = document.getElementById(elementId);
        const elementText = element.innerText;
        const score = parseInt(elementText);
        return score;
}


function setElement(elementId , score){
    const element = document.getElementById(elementId);
    element.innerText = score;
    
}



function getElementText(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}





document.addEventListener('keyup', handleKeyboard);


function handleKeyboard(event){
    const playerPressed = event.key;
    console.log(playerPressed);


    const currentKey = document.getElementById('alphabet-screen');
    const alphabet = currentKey.innerText;
    const expectedAlphabet = alphabet.toLowerCase();



    if(expectedAlphabet === playerPressed){
        console.log('you win')

        


        const currentScore = getElement('score');
        const updatedScore = currentScore + 1;
        setElement('score', updatedScore);

        
        
        removeBackgroundColor(playerPressed);
        continueGame();
    }
    else{
        console.log('you loss')

        const currentLife = getElement('life');
        const updatedLife = currentLife - 1;
        setElement('life', updatedLife);


       if(updatedLife === 0){
        gameOver();
       }


    }
}






function continueGame(){
    const alphabet = getAlphabet();
    console.log(alphabet);


    const screenAlphabet = document.getElementById('alphabet-screen');
    screenAlphabet.innerHTML = alphabet;


    setBackgroundColor(alphabet);
   
}






function play(){
    hiddenId('first-page');
    hiddenId('third-page');
    showId('second-page');


    setElement('life',5);
    setElement('score',0);


    continueGame();
}



function gameOver(){
    hiddenId('second-page');
    showId('third-page');


    const lastScore = getElement('score');
    setElement('last-score', lastScore);


    const cAlphabet = getElementText('alphabet-screen');
    removeBackgroundColor(cAlphabet);
}