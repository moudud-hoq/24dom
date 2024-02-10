//set innerHTML directly 01
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress Section</h1>
<ul>
<li>I Love Jacket</li>
<li>I Love Jacket</li>
<li>I Love Jacket</li>
<li>I Love Jacket</li>
</ul>
`
sectionDress.id = 'name'
sectionList.appendChild(sectionDress);

const sectionDress2 = document.getElementById('name');
console.log(sectionDress2)
sectionDress2.style.backgroundColor = 'red'




