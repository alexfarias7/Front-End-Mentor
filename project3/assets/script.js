const btnMobile= document.querySelector('.btnMobile')

function ToogleMenu(){
    const nav= document.querySelector('.navPages')
    nav.classList.toggle('active')
}
btnMobile.addEventListener('click', ToogleMenu)