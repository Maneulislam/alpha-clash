
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



function continueGame(){
    const alphabet = getAlphabet();
    console.log(alphabet);


    const screenAlphabet = document.getElementById('alphabet-screen');
    screenAlphabet.innerHTML = alphabet;


    setBackgroundColor(alphabet);
   
}




function play(){
    hiddenId('first-page');
    showId('second-page');
    continueGame();
}