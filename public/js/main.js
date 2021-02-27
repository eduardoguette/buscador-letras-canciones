const btnMenuMobile = document.querySelector('#show-menu-mobile');
const menuMobile = document.querySelector('#menu-mobile');

btnMenuMobile.addEventListener('click', () => {
  menuMobile.classList.toggle('hidden')
});

const btnPerfil = document.querySelector('#profile')
const menuProfile = document.querySelector('#menu-profile')

btnPerfil.addEventListener('click', () => {
  menuProfile.classList.toggle('hidden')
})