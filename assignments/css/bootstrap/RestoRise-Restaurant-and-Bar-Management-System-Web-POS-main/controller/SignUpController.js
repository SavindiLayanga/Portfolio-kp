import SignUpModel from '../model/SignUpModel.js';
import { users } from '../db/db.js';

function validateSignUp(email, userName, password, confirmPassword) {
    var errors = [];

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        errors.push("Please enter a valid email address.");m
    }

    if (!userName || userName.length < 4) {
        errors.push("Username must be at least 4 characters long.");
    }

    if (!password || password.length < 8) {
        errors.push("Password must be at least 8 characters long.");
    } else if (password !== confirmPassword) {
        errors.push("Passwords do not match.");
    }

    if (errors.length > 0) {
        alert(errors.join("\n"));
        return false;
    }

    return true;
}

$("#signUpSubmit").on('click', () => {
    var email = $('#signUp-Section-email').val();
    var userName = $('#signUp-Section-name').val();
    var address = $('#signUp-Section-address').val();
    var mobileNo = $('#signUp-Section-mobileNo').val();
    var password = $('#signUp-Section-password').val();
    var confirmPassword = $('#signUp-Section-confirm-password').val();


    // Basic validation
    if (!email || !userName || !address || !mobileNo || !password || !confirmPassword) {
        alert('All fields are required.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Assuming a basic email validation (you can improve this with a regex)
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    let user = new SignUpModel(
        email, userName, address, mobileNo, password, confirmPassword
    );

    users.push(user);

    if (user) {
        alert('SignUp successful!');
        $('#login-Section').show();
        $('#dashboard-section').hide();
        $('#navigation-bar').hide();
        $('#signUp-section').hide();
        // Proceed with login (e.g., redirect to another page)
        // window.location.href = "home.html"; // Example redirect
    } else {
        alert('Invalid email or password.');
    }
    // Show success message
});

// Simple email validation function
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.[^<>()[\]\.,;:\s@"]{2,}))$/i;
    return re.test(String(email).toLowerCase());
}

