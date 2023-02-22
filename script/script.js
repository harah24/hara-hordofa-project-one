
/* the objective is to allow customers to enter their information so that Bar-One can contact them about their inquires */

//use the method getElementID to store the contact form in a variable

const contactForm = document.getElementById('contactForm');

// use eventListener to listen for a submit event by the user submitting their infromation and the callback function to execute event 

contactForm.addEventListener('submit', function(event){

// stop the default setting on the page
        event.preventDefault();

// target the elements required for the form & get the information 
        const name = document.getElementById('userName');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        //if user doesn't enter information 
        if (name.value === '' || email.value === '' || message.value === ''){
                alert('Please complete all fields!');
        } 
        // if user enters all required information 
        else {
                alert('Thank you for contacting us; we will get back to you ASAP!')};
});







        



    

