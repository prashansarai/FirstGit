var nameText = document.getElementById('name');
var emailText = document.getElementById('email');
var form = document.getElementById('my-form');
var itemList = document.getElementById('users');
itemList.addEventListener('click',remove);
form.addEventListener('submit', storage);
form.addEventListener('submit', addItem);
function storage(e){
    e.preventDefault();
    var my_obj={
        'Name': nameText.value,
        'Email': emailText.value
    };
    var obj_serialised = JSON.stringify(my_obj);
    localStorage.setItem(nameText.value, obj_serialised);
    console.log(localStorage.getItem(nameText.value));
    // localStorage.setItem('Name', nameText.value);
    // console.log(localStorage.getItem('Name'));
    // localStorage.setItem('Email', emailText.value);
    // console.log(localStorage.getItem('Email'));   
}
function addItem(e){
    e.preventDefault();
    var li = document.createElement('li');
    li.className = 'item';
    li.appendChild(document.createTextNode(nameText.value + " "+emailText.value));
    var deleteBtn = document.createElement('button');
    deleteBtn.className = "btn";
    deleteBtn.appendChild(document.createTextNode('Delete'));
    li.appendChild(deleteBtn);
    itemList.appendChild(li);
}


function remove(e){
    if(e.target.classList.contains('btn')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
            localStorage.removeItem(nameText.value);
        }
    } 

}

