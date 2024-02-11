console.log('This is separet JS file');

//option 1 Add onclick function-- Directly set 
{/* <button onclick="document.body.style.backgroundColor='red'">Red batti</button> */ }

//option 2 Add onclick function
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

//Option 3                Button ta id diye khuje ana
const makeCrimsonBtn = document.getElementById('make-crimson');
makeCrimsonBtn.onclick = makeCrimsonBtn2;

function makeCrimsonBtn2() {
    document.body.style.backgroundColor = 'crimson';
}

//option 3  another        Button Make Purple
const makePurple = document.getElementById('make-purple')
makePurple.onclick = function makePurpleButton() {
    document.body.style.backgroundColor = 'purple';
}


//option 4------------------------
const yellowButton = document.getElementById('make-yellow');
// addEventListener(type: "click", listener: (this: HTMLElement, ev: MouseEvent) => any, options?: boolean | AddEventListenerOptions | undefined): void
yellowButton.addEventListener('click', makeTheButtonYellow/*makeTheButtonYellow নামক ফাংশনকে কল করা হয়েছে*/);

function makeTheButtonYellow() {
    document.body.style.backgroundColor = 'yellow';
}

//option 4------------------------Another
const greenButton = document.getElementById('make-green');
greenButton.addEventListener('click', function makeTheButtonGreen() {
    document.body.style.backgroundColor = 'green';
})


//option 4------------------------Final
// const orangeButton = document.getElementById('make-orange');
document.getElementById('make-orange').addEventListener('click', function () {
    document.body.style.backgroundColor = 'orange';
})
