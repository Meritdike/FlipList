// const toastElList = document.querySelectorAll('.toast')
// const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl, option))

window.onload = (event) => {
    let pageAlert = document.querySelector('.toast');
    let bsAlert = new bootstrap.Toast(pageAlert);
    bsAlert.show()
}

function openNav() {
    document.getElementById("sidebar").style.width = "18rem";
    document.getElementById("main-body").style.marginLeft = "18rem";
  }
  
  function closeNav() {
    document.getElementById("sidebar").style.width = "4.4rem";
    document.getElementById("main-body").style.marginLeft= "4.4rem";
  }