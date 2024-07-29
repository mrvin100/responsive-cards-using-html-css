/* Custom js file made by JeanDoe */
//Declartion of variables

let button = document.querySelector('button');
let cancelButton = document.querySelector('.cancel');
let moreButton = document.querySelectorAll('.icon');
let subscribesForm = document.querySelector('.subscribes');

// console.log(button, cancelButton, moreButton, subscribesForm)

button.addEventListener('click', (event) => {
    //Desable default loading of the page when button is get an event
    event.preventDefault();
});

//Select each more buttons then add active class to subscribes form when these are clicked

if(moreButton){
    for(let i = 0; i < moreButton.length; i++){
        // console.log(moreButton[i])
        moreButton[i].addEventListener('click', () => {
            subscribesForm.classList.add('active');
        });
    }
}

//Select each more buttons then remove active class to subscribes form when it's clicked

if(cancelButton){
    cancelButton.addEventListener('click', () => {
        subscribesForm.classList.remove('active');
    });
}