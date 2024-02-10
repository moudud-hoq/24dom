// const liCollection = document.getElementsByTagName('li');
// console.log(liCollection);

// for (const li of liCollection) {
//     console.log(li.innerText);
// }

// const h1Collection = document.getElementsByTagName('h1');
// console.log(h1Collection);
// for (const h1 of h1Collection) {
//     console.log(h1.innerText)
// }

// const ul2Collection = document.getElementsByClassName('ul2');
// console.log(ul2Collection);
// for (const ul2 of ul2Collection) {
//     console.log(ul2.innerText);
// }
// const places = document.getElementsByClassName('important-places');
// for (const place of places) {
//     console.log(place.innerText);
// }


const someLi = document.querySelectorAll('.dom-container li');
for (const li of someLi) {
    // console.log(li.innerText);
}

// const someLi2 = document.querySelectorAll('.a')
// for (const li of someLi2) {
//     console.log(li.innerText);
// }

document.getElementById('firstid').style.backgroundColor = 'black';
document.getElementById('firstid').style.textAlign = 'center';
document.getElementById('firstid').style.padding = '55px 30px';


const sections = document.querySelectorAll('section');
for (const section of sections) {
    section.style.fontWeight = '300';
    section.style.textAlign = 'center';
    section.style.padding = '5px';
    section.style.border = '5px solid black';
    section.style.margin = '15px';
    section.style.color = 'white';
    section.style.listStyleType = 'none';
    section.style.background = 'black';
    section.style.borderRadius = '5px';
}

// const section = document.getElementsByClassName('yellow');
// for (const yellow of section) {
//     yellow.style.backgroundColor = 'yellow';
//     yellow.style.color = 'black';
//     yellow.style.textAlign = 'right';
// }
// const section = document.getElementsByClassName('yellow');
// for (const yellow of section) {
//     yellow.style.backgroundColor = 'yellow';
//     yellow.style.color = 'black';
//     yellow.style.textAlign = 'right';
// }