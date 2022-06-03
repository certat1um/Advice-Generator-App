const nextBtn = document.querySelector(".quote-nextbtn");
const outText = document.querySelector(".quote-text");
const outHeading = document.querySelector(".quote-heading");
nextBtn.addEventListener("click", getData);
nextBtn.addEventListener("keydown", handleKey);
function handleKey(e) {
    if (e.key === "Enter") getAdvice();
}
async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    return await response.json();
}
function getData() {
    getAdvice().then((data)=>{
        outText.innerText = data.slip.advice;
        outHeading.innerText = `Advice #${data.slip.id}`;
    });
}

//# sourceMappingURL=index.816e7b21.js.map
