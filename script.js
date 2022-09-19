const adviceID = document.querySelector('span');
const adviceText = document.querySelector('p');
const btn = document.querySelector('.dice');

btn.addEventListener('click', addAdvice);


function addAdvice() {

fetch('	https://api.adviceslip.com/advice').then(Response => {

    return Response.json();
}).then(adviceData => {
    const adviceNum = adviceData.slip.id;
    const advice= adviceData.slip.advice;

    adviceID.innerText= adviceNum;
    adviceText.innerText = advice

}).catch(Error => {
    console.log(Error);
})


    
}