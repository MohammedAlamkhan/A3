"use strict";

// This function checks if the provided text is a valid date in the format MM/DD/YYYY
const isDate = text => {
   // Use a regular expression to check if the text matches the MM/DD/YYYY format
   if (!/^[01]?\d\/[0-3]\d\/\d{4}$/.test(text)) {
       return false;
   }

   // Find the indices of the first and second slash characters
   const index1 = text.indexOf("/");
   const index2 = text.indexOf("/", index1 + 1);

   // Extract the month, day, and year values
   const month = parseInt(text.substring(0, index1));
   const day = parseInt(text.substring(index1 + 1, index2));

   // Check if the month is between 1 and 12
   if (month < 1 || month > 12) {
       return false;
   } else {
       // Check the validity of the day based on the month
       switch (month) {
           case 2: // February
               return (day > 28) ? false : true;
           case 4: // April
           case 6: // June
           case 9: // September
           case 11: // November
               return (day > 30) ? false : true;
           default: // Other months
               return (day > 31) ? false : true;
       }
   }
};

$(document).ready(() => {
   // This code runs when the document is ready (fully loaded)

   $("#save").click(() => {
       // Clear any previous error messages
       $("span").text("");

       // Initialize the isValid flag
       let isValid = true;

       // Get the values entered by the user
       const email = $("#email").val();
       const phone = $("#phone").val();
       const postal = $("#postal").val();
       const dob = $("#dob").val();

       // Validate email
       if (email === "" || !email.match(/^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/)) {
           isValid = false;
           $("#email").next().text("Please enter a valid email.");
       }

       // Validate phone number
       if (phone === "" || !phone.match(/^\d{3}-\d{3}-\d{4}$/)) {
           isValid = false;
           $("#phone").next().text("Please enter a phone number in NNN-NNN-NNNN format.");
       }

       // Validate postal code
       if (postal === "" || !postal.match(/^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i)) {
           isValid = false;
           $("#postal").next().text("Please enter a valid postal code.");
       }

       // Validate date of birth
       if (dob === "" || !isDate(dob)) {
           isValid = false;
           $("#dob").next().text("Please enter a valid date in MM/DD/YYYY format.");
       }

       // If all inputs are valid
       if (isValid) {
           // Save the profile information in the session storage
            //3 start
           sessionStorage.setItem('email', email);
           sessionStorage.setItem('phone', phone);
           sessionStorage.setItem('postal', postal);
           sessionStorage.setItem('dob', dob);
            //3 end
           // Navigate to the profile.html page
           //4 start
           window.location.href = 'profile.html';
           //4 end
       }
       // Set focus on the email input field
       $("#email").focus();
   });

   // Set focus on the email input field when the page loads
   $("#email").focus();
});