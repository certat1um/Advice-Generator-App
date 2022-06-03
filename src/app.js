import {handlerId} from './modules/handler-id';

const nextBtn = document.querySelector('.quote-nextbtn');
const outText = document.querySelector('.quote-text');
const outHeading = document.querySelector('.quote-heading');

nextBtn.addEventListener('click', getData);
nextBtn.addEventListener('keydown', handleKey);

function handleKey(e) {
    if(e.key === 'Enter') {
        getAdvice();
    }
}

async function getAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice');

    return await response.json();
}

function getData() {
    getAdvice().then(data => {
        outHeading.innerText = `Advice #${handlerId(data.slip.id)}`
        outText.innerText = `"${data.slip.advice}"`;
    })
}