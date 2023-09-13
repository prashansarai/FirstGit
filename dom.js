// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'GoodBye';
// headerTitle.innerHTML = '<h3>Hello</h3>';
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items.style.fontWeight = 'bold';
// items[3].style.backgroundColor = 'green';

//Examine the document object//
// console.dir(document);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[23]);
// document.all[10].textContent = 'Hello';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images)

//GetELEMENTBYID//
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.innerHTML='<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';


//GETELEMENTBYCLASSNAME//
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent='Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = '#ffff00';
// for(var i = 0; i<items.length;i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }
// var title = document.getElementsByClassName('title');
// title[0].style.fontWeight = 'bold';
// title[0].style.backgroundColor = '#00ff00';
// var input = document.querySelector('input');
// input.value = 'Hello World';
// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';
// var item = document.querySelector('.list-group-item');
// item.style.color = '#ff0000';
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = '#ff0000';
// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = '#0000ff';


//QUERYSELECTORALL//
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';
// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(var i = 0;i<odd.length ;i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
// }


// var items = document.getElementsByClassName('list-group-item');
// items[1].style.backgroundColor = '#00ff00';
// items[2].style.display= 'none';
// for(var i = 0;i<items.length;i++){
//     items[i].style.fontWeight='bold';
// }

// var thirdItem = document.querySelector('li:nth-child(3)');
// thirdItem.style.backgroundColor='#00ff00';
// var items = document.querySelectorAll('li');
// for(var i = 0;i<items.length;i++){
//     items[i].style.fontWeight='bold';
// }

//TRAVERSE THE DOM//
// var itemList = document.querySelector('#items');
//parentnode almost similar to parentelement
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';
//FirstChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Hello1';
//LastChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='Hello4';

//previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='green';

//Create a div
// var newDiv = document.createElement('div');
// newDiv.className ='hello';
// newDiv.id = 'hello1';
// newDiv.setAttribute('title', 'Hello Div');
// var newDivText = document.createTextNode('Hello World');
// newDiv.appendChild(newDivText);
// console.log(newDiv);
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header  h1')
// container.insertBefore(newDiv,h1);
// var container = document.getElementsByClassName('container');
// container[0].innerHTML = '<div class="hello" id="hello1">Hello World</div>'+ container[0].innerHTML


// var parent = document.getElementById('items');
// parent.innerHTML = '<li class="list-group-item">Hello World</li>'+ parent.innerHTML;

var form = document.getElementById('addForm');
//var subBtn = document.getElementById('sub');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
form.addEventListener('submit',addItem);
//subBtn.addEventListener('click',addItem);
//itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItems);



function addItem(e){
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    var description = document.getElementById('description').value;
    var editBtn = document.createElement('button');
    var li = document.createElement('li');
    li.className = 'list-group-item';
    editBtn.className = "btn btn-sm float-right";
    li.appendChild(document.createTextNode(newItem+' '+description));
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    editBtn.appendChild(document.createTextNode('E'));
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    itemList.appendChild(li);
    var itemName = e.target.itemName.value;
    var itemDescription = e.target.itemDescription.value;
    var userDetails = {itemName,itemDescription};
    localStorage.setItem(userDetails.itemDescription,JSON.stringify(userDetails));
    deleteBtn.onclick = () =>{
        localStorage.removeItem(userDetails.itemDescription);
        itemList.removeChild(li);
    }
}

// function removeItem(e){
//     if(e.target.classList.contains('btn-danger')){
//         if(confirm('ARE YOU SURE')){
//           var li = e.target.parentElement;
//           itemList.removeChild(li);
//       }
//    } 
// }

function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items = document.getElementsByTagName('li');
    Array.from(items).forEach((item)=>{
        var itemName = item.firstChild.textContent.toLowerCase();
        var descrip = item.children[1].textContent.toLowerCase();
        if(itemName.indexOf(text)==0 || descrip.indexOf(text)==0){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    });
}















