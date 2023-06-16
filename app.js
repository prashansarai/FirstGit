var nameText = document.getElementById('name');
var emailText = document.getElementById('email');
var form = document.getElementById('my-form');
form.addEventListener('submit', storage);
function storage(e){
    e.preventDefault();
    localStorage.setItem('Name', nameText.value);
    console.log(localStorage.getItem('Name'));
    localStorage.setItem('Email', emailText.value);
    console.log(localStorage.getItem('Email'));
}
var my_obj={
    Name :'Evana',
    Age:'29'
};
var obj_serialised = JSON.stringify(my_obj);
localStorage.setItem('Details', obj_serialised);
console.log(localStorage.getItem('Details'));