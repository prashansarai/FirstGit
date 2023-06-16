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
