    let email = document.getElementById('email')
    let password = document.getElementById('password')
    let showPassword = document.getElementById('showPassword')

function isEmpty() {
    let emailValue = email.value;
    let passwordValue = password.value;

    if (emailValue !== '' && passwordValue !== '') {
        document.getElementById('login-btn').classList.remove('disabled')
    } else {
        document.getElementById('login-btn').classList.add('disabled')
    }
}

function togglePassword() {
    if (password.type === 'password') {
        password.type = 'text';
        showPassword.textContent = 'Hide'
    } else {
        password.type = 'password';
        showPassword.textContent = 'Show'
    }
    console.log ('showing')
}