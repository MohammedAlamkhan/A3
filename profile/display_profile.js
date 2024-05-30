"use strict";
$(document).ready(() => {
    // display data from session storage
    const email = sessionStorage.getItem('email');
    const phone = sessionStorage.getItem('phone');
    const postal = sessionStorage.getItem('postal');
    const dob = sessionStorage.getItem('dob');

    if (email) {
        $("#email").text(email);
    }
    if (phone) {
        $("#phone").text(phone);
    }
    if (postal) {
        $("#postal").text(postal);
    }
    if (dob) {
        $("#dob").text(dob);
    }

    $("#back").click(() => {
        // code for back button goes here
        window.history.back();
    });
});