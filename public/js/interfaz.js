export const formulario = document.querySelector('#formulario-buscar'),
  inputArtista =  document.querySelector('#artista'),
  inputCancion =  document.querySelector('#cancion'),
  divMensaje =  document.querySelector('.mensaje'),
  resultadoNombreLetra =  document.querySelector('.resultado h1'),
  resultadoLetra =  document.querySelector('.resultado p')




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