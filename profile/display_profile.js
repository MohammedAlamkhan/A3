"use strict";
$(document).ready(() => {
   // This code runs when the document is ready (fully loaded)

   // Retrieve data from the session storage
   // 6 start
   const email = sessionStorage.getItem('email');
   const phone = sessionStorage.getItem('phone');
   const postal = sessionStorage.getItem('postal');
   const dob = sessionStorage.getItem('dob');

   // If email data exists in session storage, display it in the element with id 'email'
   if (email) {
       $("#email").text(email);
   }

   // If phone data exists in session storage, display it in the element with id 'phone'
   if (phone) {
       $("#phone").text(phone);
   }

   // If postal data exists in session storage, display it in the element with id 'postal'
   if (postal) {
       $("#postal").text(postal);
   }

   // If date of birth data exists in session storage, display it in the element with id 'dob'
   if (dob) {
       $("#dob").text(dob);
   }
    //6 end
   // When the element with id 'back' is clicked
   $("#back").click(() => {
       // Go back to the previous page in the browser history
       //7 start
       window.history.back();
       //7 end
   });
});