"use strict";

// This function retrieves the value of a cookie by its name
const getCookieByName = name => {
   // Construct the string to search for in the cookie string
   const nameEQ = name + "=";
   // Split the cookie string into an array of individual cookie key-value pairs
   const cookies = document.cookie.split(';');
   // Loop through the array of cookies
   for(let i = 0; i < cookies.length; i++) {
       let cookie = cookies[i];
       // Remove any leading spaces from the cookie string
       while (cookie.charAt(0) == ' ') cookie = cookie.substring(1, cookie.length);
       // Check if the current cookie starts with the string we're looking for
       if (cookie.indexOf(nameEQ) == 0) return cookie.substring(nameEQ.length, cookie.length);
   }
   // If the cookie wasn't found, return null
   return null;
};

// This function sets a cookie with a specified name, value, and expiration time (in days)
const setCookie = (name, value, days) => {
   // Initialize an empty string to store the expiration date
   let expires = "";
   // If the 'days' parameter is provided
   if (days) {
       // Create a new Date object
       const date = new Date();
       // Calculate the expiration date by adding the number of days to the current date
       date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
       // Convert the expiration date to a UTC string
       expires = "; expires=" + date.toUTCString();
   }
   // Construct the cookie string and set it in the document.cookie property
   document.cookie = name + "=" + (value || "") + expires + "; path=/";
};

// This function deletes a cookie by setting its expiration date to a past date
const deleteCookie = name => {
   document.cookie = name + "=; Max-Age=-99999999;";
};

// This function navigates to the specified URL
const goToPage = url => {
   window.location.href = url;
};
