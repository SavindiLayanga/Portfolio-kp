
    $(document).ready(function(){

        $('#login-section').css({display: 'block'});
        $('#signUp-section').css({display: 'none'});
        $('#navigation-bar').css({display: 'none'});
        $('#dashboard-section').css({display: 'none'});
        $('#items-section').css({display: 'none'});
        $('#order-section').css({display: 'none'});
        $('#customer-section').css({display: 'none'});
        $('#staff-section').css({display: 'none'});

        $('#loginSection-register').on('click', () => {

            $('#login-Section').css({display: 'none'});
            $('#signUp-section').css({display: 'block'});
            $('#dashboard-section').css({display: 'none'});
            $('#items-section').css({display: 'none'});
            $('#order-section').css({display: 'none'});
            $('#customer-section').css({display: 'none'});
            $('#staff-section').css({display: 'none'});
        });

/*        $('#loginSection-btnLogin').on('click', () => {

            $('#login-Section').css({display: 'none'});
            $('#signUp-section').css({display: 'none'});
            $('#dashboard-section').css({display: 'block'});
            $('#navigation-bar').css({display: 'block'});
            $('#items-section').css({display: 'none'});
            $('#order-section').css({display: 'none'});
            $('#customer-section').css({display: 'none'});
            $('#staff-section').css({display: 'none'});
        });*/

    $('#nav-dashboard').on('click', () => {
        $('#login-section').css({display: 'none'});
        $('#signUp-section').css({display: 'none'});
    $('#dashboard-section').css({display: 'block'});
    $('#items-section').css({display: 'none'});
    $('#order-section').css({display: 'none'});
    $('#customer-section').css({display: 'none'});
    $('#staff-section').css({display: 'none'});
});
    $('#nav-item').on('click', () => {
        $('#login-section').css({display: 'none'});
        $('#signUp-section').css({display: 'none'});
    $('#dashboard-section').css({display: 'none'});
    $('#items-section').css({display: 'block'});
    $('#order-section').css({display: 'none'});
    $('#customer-section').css({display: 'none'});
    $('#staff-section').css({display: 'none'});
});
    $('#nav-customer').on('click', () => {
        $('#login-section').css({display: 'none'});
        $('#signUp-section').css({display: 'none'});
    $('#dashboard-section').css({display: 'none'});
    $('#items-section').css({display: 'none'});
    $('#order-section').css({display: 'none'});
    $('#customer-section').css({display: 'block'});
    $('#staff-section').css({display: 'none'});
});

    $('#nav-order').on('click', () => {
        $('#login-section').css({display: 'none'});
        $('#signUp-section').css({display: 'none'});
    $('#dashboard-section').css({display: 'none'});
    $('#items-section').css({display: 'none'});
    $('#order-section').css({display: 'block'});
    $('#customer-section').css({display: 'none'});
    $('#staff-section').css({display: 'none'});
});

    $('#nav-staff').on('click', () => {
        $('#login-section').css({display: 'none'});
        $('#signUp-section').css({display: 'none'});
    $('#dashboard-section').css({display: 'none'});
    $('#items-section').css({display: 'none'});
    $('#order-section').css({display: 'none'});
    $('#customer-section').css({display: 'none'});
    $('#staff-section').css({display: 'block'});
});
        $('#btn-backOnAction').on('click', () => {

            $('#login-Section').css({display: 'block'});
            $('#signUp-section').css({display: 'none'});
            $('#dashboard-section').css({display: 'none'});
            $('#items-section').css({display: 'none'});
            $('#order-section').css({display: 'none'});
            $('#customer-section').css({display: 'none'});
            $('#staff-section').css({display: 'none'});
        });

            // Listen for click events on dropdown items and set the text of the button
            $('.job-category').on('click', function() {
                $('#jobCategory').text($(this).text());
            });

             $('.item-category').on('click', function() {
                $('#itemCategory').text($(this).text());
            });
        document.addEventListener('DOMContentLoaded', () => {
            const signUpForm = document.getElementById('signUp-section');
            new SignUpController(signUpForm);
        });

});

/*+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|*/

    $(document).ready(function () {

        const loadingScreen = document.querySelector('.home');
        loadingScreen.style.display = 'none';

        const loadingScreen3 = document.querySelector('#navBar');
        loadingScreen3.style.display = 'none';

        const loadingScreen2 = document.querySelector('.customer');
        loadingScreen2.style.display = 'none';

        const loadingScreen4 = document.querySelector('.item');
        loadingScreen4.style.display = 'none';

        const loadingScreen5 = document.querySelector('.order');
        loadingScreen5.style.display = 'none';

        const loadingScreen6 = document.querySelector('.order_Details');
        loadingScreen6.style.display = 'none';


        var counter = 0;
        var c = 0;
        var i = setInterval(function () {
            $(".loading-page>.counter>h1").html(c + "%");
            $(".loading-page>.counter>hr").css("width", c + "%");
            counter++;
            c++;

            if (counter == 102) {
                clearInterval(i);
                const loadingScreen = document.querySelector('.loading-page');
                loadingScreen.style.display = 'none';
                myFunction();

            }
        }, 1);
    });


    const myFunction = function () {
        const loadingScreen = document.querySelector('.home');
        loadingScreen.style.display = 'block';

        const loadingScreen3 = document.querySelector('#navBar');
        loadingScreen3.style.display = 'block';

        const loadingScreen2 = document.querySelector('.customer');
        loadingScreen2.style.display = 'none';

        const loadingScreen4 = document.querySelector('.item');
        loadingScreen4.style.display = 'none';

        const loadingScreen5 = document.querySelector('.order');
        loadingScreen5.style.display = 'none';

        const loadingScreen6 = document.querySelector('.order_Details');
        loadingScreen6.style.display = 'none';

    }

    const myFunction1 = function () {
        const loadingScreen = document.querySelector('.home');
        loadingScreen.style.display = 'none';

        const loadingScreen3 = document.querySelector('#navBar');
        loadingScreen3.style.display = 'block';

        const loadingScreen2 = document.querySelector('.customer');
        loadingScreen2.style.display = 'block';

        const loadingScreen4 = document.querySelector('.item');
        loadingScreen4.style.display = 'none';

        const loadingScreen5 = document.querySelector('.order');
        loadingScreen5.style.display = 'none';

        const loadingScreen6 = document.querySelector('.order_Details');
        loadingScreen6.style.display = 'none';

    }

    const myFunction2 = function () {
        const loadingScreen = document.querySelector('.home');
        loadingScreen.style.display = 'none';

        const loadingScreen3 = document.querySelector('#navBar');
        loadingScreen3.style.display = 'block';

        const loadingScreen2 = document.querySelector('.customer');
        loadingScreen2.style.display = 'none';

        const loadingScreen4 = document.querySelector('.item');
        loadingScreen4.style.display = 'block';

        const loadingScreen5 = document.querySelector('.order');
        loadingScreen5.style.display = 'none';

        const loadingScreen6 = document.querySelector('.order_Details');
        loadingScreen6.style.display = 'none';

    }

    const myFunction3 = function () {
        const loadingScreen = document.querySelector('.home');
        loadingScreen.style.display = 'none';

        const loadingScreen3 = document.querySelector('#navBar');
        loadingScreen3.style.display = 'block';

        const loadingScreen2 = document.querySelector('.customer');
        loadingScreen2.style.display = 'none';

        const loadingScreen4 = document.querySelector('.item');
        loadingScreen4.style.display = 'none';

        const loadingScreen5 = document.querySelector('.order');
        loadingScreen5.style.display = 'block';

        const loadingScreen6 = document.querySelector('.order_Details');
        loadingScreen6.style.display = 'none';

    }

    const myFunction4 = function () {
        const loadingScreen = document.querySelector('.home');
        loadingScreen.style.display = 'none';

        const loadingScreen3 = document.querySelector('#navBar');
        loadingScreen3.style.display = 'block';

        const loadingScreen2 = document.querySelector('.customer');
        loadingScreen2.style.display = 'none';

        const loadingScreen4 = document.querySelector('.item');
        loadingScreen4.style.display = 'none';

        const loadingScreen5 = document.querySelector('.order');
        loadingScreen5.style.display = 'none';

        const loadingScreen6 = document.querySelector('.order_Details');
        loadingScreen6.style.display = 'block';

    }


