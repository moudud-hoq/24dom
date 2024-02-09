const liCollection = document.getElementsByTagName('li');
console.log(liCollection);

for (const li of liCollection) {
    console.log(li.innerText);
}

const h1Collection = document.getElementsByTagName('h1');
console.log(h1Collection);
for (const h1 of h1Collection){
    console.log(h1.innerText)
}