var inputName = document.getElementById('input-name');
var inputMessage = document.getElementById('input-message');
var inputEmail = document.getElementById('input-email');
var button = document.querySelector('.submit-button');
var regEx = /\S+@\S+\.\S+/;
var form = document.querySelector('.form');

function checkInput () {
    if (inputName.value.trim() !== ""  && regEx.test(inputEmail.value) && inputMessage.value.trim() !== "") {
        button.style.backgroundColor = "#fa923f";
        button.disabled = false;
    }else {
        button.style.backgroundColor = "#979695";
        button.disabled = true;
    }
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Submitted.');
})