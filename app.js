var nameText = document.getElementById('name');
var emailText = document.getElementById('email');
var form = document.getElementById('my-form');
form.addEventListener('submit', storage);
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

