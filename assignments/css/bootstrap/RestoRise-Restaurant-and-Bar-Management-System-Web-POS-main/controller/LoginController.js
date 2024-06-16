import { users } from '../db/db.js';

// Login script
$("#loginSection-btnLogin").on('click', () => {
    var email = $('#loginSection-email').val();
    var password = $('#loginSection-password').val();

    // Basic validation
    if (!email || !password) {
        alert('Email and password are required.');
        return;
    }

    // Check if user exists
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert('Login successful!');
        $('#login-Section').hide();
        $('#dashboard-section').show();
        $('#navigation-bar').show();
        // Proceed with login (e.g., redirect to another page)
        // window.location.href = "home.html"; // Example redirect
    } else {
        alert('Invalid email or password.');
    }
});
