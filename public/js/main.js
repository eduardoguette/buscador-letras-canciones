import * as UI from './interfaz.js'
import API from './api.js'

UI.formulario.addEventListener('submit', buscarCancion)

function buscarCancion(e) {
  e.preventDefault()
  const artista = document.querySelector('#artista').value
  const cancion = document.querySelector('#cancion').value

  if (artista === '' || cancion == '') {
    imprimerMensaje('Todos los campos son obligarotios')
    return
  }

  const busqueda = new API(artista, cancion)
  UI.resultadoLetra.textContent = ""
  UI.resultadoNombreLetra.textContent = ""
  

}




export function imprimerMensaje(mensaje) {
  UI.divMensaje.innerHTML = `${mensaje}`
  UI.divMensaje.classList.remove('hidden')

  setTimeout(() => {
    UI.divMensaje.classList.add('hidden')
    UI.divMensaje.innerHTML = ''
  }, 3000)
}

