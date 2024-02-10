// //Where to add
// const domsList = document.getElementById('doms-list');
// //WHat to be added
// const li = document.createElement('li');
// li.innerText = 'This is dom6';

// //Add the child
// domsList.appendChild(li);


// --------------------------------------------------------------------------
//WHere to add
const sectionList = document.getElementById('main-container');
console.log(sectionList);
sectionList.style.color = 'red';
//what to be added
const section = document.createElement('section');
//what to be added
const h1 = document.createElement('h1');
h1.innerText = ('My Learning llist');
//Add the child
section.appendChild(h1);

//what to be added
const ul = document.createElement('ul');
const li1 = document.createElement('li')
li1.innerText = 'getElementByTagName'
ul.appendChild(li1);
//what to be added
const li4 = document.createElement('li')
li4.innerText = 'querySelector'
ul.appendChild(li4);

section.appendChild(ul);
sectionList.appendChild(section);


const foodBill = document.createElement('section');
foodBill.innerHTML = `
<h1>Tania Will Treate me today</h1>
<p>The treat is for his outstanding result</p>
<ul>
<li>01. Platter</li>
<li>02. Burger</li>
<li>03. Cake</li>
<li>04. Chicken Fry</li>
</ul>
`
foodBill.id = 'foodlist';
sectionList.appendChild(foodBill);

const foodBillOfTania = document.getElementById('foodBill');
console.log(foodBillOfTania)
foodBillOfTania.style.backgroundColor='blue';


