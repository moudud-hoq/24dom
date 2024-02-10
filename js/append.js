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
const li2 = document.createElement('li')
li2.innerText = 'getElementById'
ul.appendChild(li2);

//what to be added
const li3 = document.createElement('li')
li3.innerText = 'getElementsByClassName'
ul.appendChild(li3);

//what to be added
const li4 = document.createElement('li')
li4.innerText = 'querySelector'
ul.appendChild(li4);


section.appendChild(ul);
sectionList.appendChild(section);

//set innerHTML directly
const sectionDress=document.createElement('section');
sectionDress.innerHTML=`
<h1>My Dress Section</h1>
<ul>
<li>I Love Jacket</li>
<li>I Love Jacket</li>
<li>I Love Jacket</li>
<li>I Love Jacket</li>
</ul>

`
