// get user email

document.getElementById('login-button').addEventListener('click', function(){
    const emailField = document.getElementById('userr-email');
    const userEmail = emailField.value;
    
    // get user password

    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    if (userEmail == 'rasel@gmail.com' && userPassword == 'rasel'){
        window.location.href = "banking.html"
    }
});

