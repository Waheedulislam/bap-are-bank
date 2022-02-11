document.getElementById('login-submit').addEventListener('click', function () {
    // get user email
    const emaileField = document.getElementById('user-email');
    const userEmail = emaileField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // check email and password
    if (userEmail == 'sontan@baap.com' && userPassword == 'secret') {
        window.location.href = 'banking.html';
    }
})


