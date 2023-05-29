var headerTitle = document.getElementById('header-title');
console.log(headerTitle);
headerTitle.textContent = 'Hello';
headerTitle.innerText = 'GoodBye';
headerTitle.innerHTML = '<h3>Hello</h3>';
var items = document.getElementsByClassName('list-group-items');
console.log(items);
console.log(items[1]);
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight = 'bold';
}
items[3].style.backgroundColor = 'green';
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
for(var i=0;i<li.length;i++){
    li[i].style.fontWeight = 'italics';
}
li[3].style.backgroundColor = 'yellow';
