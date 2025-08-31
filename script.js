const userName = document.querySelector("input[type='text']");
const email = document.querySelector("input[type='email']");
const password = document.querySelector("input[type='password']");
const form = document.querySelector("form");

form.addEventListener('submit', (e) =>{
    e.preventdefault()

    validateName();
    validateEmail();
    validatePassword();
});

userName.addEventListener('keyup', () => {
    validateName();
});
email.addEventListener('keyup', () => {
    validateEmail();
});
password.addEventListener('keyup', () => {
    validatePassword();
});

function validateName(){
    if(userName.value == ""){
        userName.nextElementSibling.className ="fa-solid error fa-xmark";
        userName.className = 'error';
        userName.nextElementSibling.nextElementSibling.innerText ='Name is required!'
    }else{
        userName.className = "success";
        userName.nextElementSibling.className = "fa-solid success fa-check";
        userName.nextElementSibling.nextElementSibling.innerText = "";
    }
}
function validateEmail(){
    if(email.value == ""){
        email.nextElementSibling.className ="fa-solid error fa-xmark";
        email.className = 'error';
        email.nextElementSibling.nextElementSibling.innerText ='Name is required!'
    }else{
        email.className = "success";
        email.nextElementSibling.className = "fa-solid success fa-check";
        email.nextElementSibling.nextElementSibling.innerText = "";
    }
}
function validatePassword(){
    if(password.value == ""){
        password.nextElementSibling.className ="fa-solid error fa-xmark";
        password.className = 'error';
        password.nextElementSibling.nextElementSibling.innerText ='Name is required!'
    }else{
        password.className = "success";
        password.nextElementSibling.className = "fa-solid success fa-check";
        password.nextElementSibling.nextElementSibling.innerText = "";
    }
}