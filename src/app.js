import {handlerId} from './modules/handler-id';

const nextBtn = document.querySelector('.quote-nextbtn');
const playBtn = document.querySelector('.quote-playbtn');
const outText = document.querySelector('.quote-text');
const outHeading = document.querySelector('.quote-heading');
let intervId;

nextBtn.addEventListener('click', getData);
nextBtn.addEventListener('keydown', handleKey);
playBtn.addEventListener('click', playAdvice);

function handleKey(e) {
    if(e.key === 'Enter') {
        getAdvice();
    }
}

function playAdvice() {
    // check if already an interval has been set up
    if(!intervId) {
        intervId = setInterval(getData, 5000);
    }
    if(playBtn.classList.contains('nonstop')) {
        playBtn.classList.remove('nonstop');
        clearInterval(intervId);
        // release the intervalID from the variable
        intervId = null;
    } else {
        playBtn.classList.add('nonstop');
    }
}

async function getAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice');
    
    return await response.json();
}

async function getData() {
    await getAdvice().then(data => {
        outHeading.innerText = `Advice #${handlerId(data.slip.id)}`
        outText.innerText = `"${data.slip.advice}"`;
    })
}