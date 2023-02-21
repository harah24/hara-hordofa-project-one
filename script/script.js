
/* the objective is to allow customers to enter their information so that Bar-One can contact them about their inquires */

//use the method getElementID to store the contact form in a variable

// const contactForm = document.getElementById('contactForm');

// use eventListener to listen for a submit event by the user submitting their infromation and the callback function to execute event 

// contactForm.addEventListener('submit', (e) => {
// // stop the default setting on the page
//         e.preventDefault();

// target the elements required for the form & get the information 
//         const name = document.getElementById('name');
//         const email = document.getElementById('email');
//         const message = document.getElementById('message');

//         //if user doesn't enter information 
//         if (name.value ==='' && email.value ==='' && message.value === ''){
//                 alert('Please fill out all fields');
//         } 
//         // if user enters information 
//         else {
//                 alert('Thanks for reaching out to us; we will get back to you ASAP!')};

// });

const contactForm = document.getElementById('contactForm');

const name = document.getElementById('userName');
const email = document.getElementById('email');
const message = document.getElementById('message');

contactForm.addEventListener('submit', function(e){
        e.preventDefault(); 
        if (userName.value ==='' && email.value ==='' && message.value === ''){
              alert('Please fill out all fields');
         } 
         else{
                alert('Thanks for reaching out to us; we will get back to you  ASAP!')}
});











        



    

