// const toastElList = document.querySelectorAll('.toast')
// const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl, option))

window.onload = (event) => {
    let pageAlert = document.querySelector('.toast');
    let bsAlert = new bootstrap.Toast(pageAlert);
    bsAlert.show()
}