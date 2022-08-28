// const toastElList = document.querySelectorAll('.toast')
// const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl, option))

window.onload = (event) => {
    let pageAlert = document.querySelector('.toast-d');
    let bsAlert = new bootstrap.Toast(pageAlert);
    bsAlert.show()
}

function openNav() {
    document.getElementById("sidebar").style.width = "18rem";
    document.getElementById("main-body").style.marginLeft = "18rem";
    document.getElementById("prop-nav").style.paddingLeft = "1rem";
    document.getElementById("prop-import").style.marginTop = "0rem";
    document.getElementById("btn-black").style.width = "95%";
    document.getElementById("fixed-top").style.position = "static";
  }
  
  function closeNav() {
    document.getElementById("sidebar").style.width = "4.4rem";
    document.getElementById("main-body").style.marginLeft= "0";
    document.getElementById("prop-nav").style.paddingLeft = "7rem";
    document.getElementById("prop-import").style.marginTop = "4.7rem";
    document.getElementById("btn-black").style.width = "87%";
    document.getElementById("fixed-top").style.position = "fixed";
  }


const toastTrigger = document.getElementById('showMsgBtn')
const toastLiveExample = document.getElementById('showMsg')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}