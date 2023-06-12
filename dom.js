// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'GoodBye';
// headerTitle.innerHTML = '<h3>Hello</h3>';
// var items = document.getElementsByClassName('list-group-items');
// console.log(items);
// console.log(items[1]);
// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight = 'bold';
// }
// items[3].style.backgroundColor = 'green';
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// for(var i=0;i<li.length;i++){
//     li[i].style.fontWeight = 'italics';
// }
// li[3].style.backgroundColor = 'yellow';
// var item = document.queryselector('.list-group-items:nthchild(2)');
// secondItem.style.color = 'green';
var itemList = document.querySelector('#items');
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = 'green';
console.log(itemList.parentNode.parentNode);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';
console.log(itemList.firstElementChild)
itemList.firstElementChild.textContent = 'Hello 1'
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';
var newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'hello1';
newDiv.setAttribute('title','Hello Div');
var newDivText = document.createTextNode('Hello World');
newDiv.appendChild(newDivText);
var container = document.querySelector('header  .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);
container.insertBefore(newDiv,  h1);
newDiv.style.fontSize = '30px';
var listGroup = document.querySelector('ul .list-group');
var li= document.querySelector('ul  li');
listGroup.insertBefore(newDiv, li);


