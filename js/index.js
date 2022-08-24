function isEmpty() {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    if (email !== '' && password !== '') {
        document.getElementById('login-btn').classList.remove('disabled')
    } else {
        document.getElementById('login-btn').classList.add('disabled')
    }
}