import * as UI from './interfaz.js'
import { imprimerMensaje } from './main.js'

class API {
  constructor(artista, cancion) {
    this.artista = artista
    this.cancion = cancion
    this.consultarAPI()
  }
  consultarAPI() {
    const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`
    fetch(url, {
      headers: {
        accept: '*/*',
        'accept-language': 'es-ES,es;q=0.9,en-US;q=0.8,en;q=0.7',
        'cache-control': 'no-cache',
      },
    })
      .then((resp) => resp.json())
      .then((json) => {
        if (json.lyrics) {
          let { lyrics } = json
          console.log(UI)
          UI.resultadoLetra.classList.remove('hidden')
          UI.resultadoNombreLetra.classList.remove('hidden')

          lyrics = lyrics.replaceAll('\n', '<br>')

          UI.resultadoLetra.innerHTML = lyrics
          UI.resultadoNombreLetra.textContent = `${this.cancion} - ${this.artista}`
        } else {
          alert('aquii')
          imprimerMensaje('Sin resultados')
        }
      })
  }
}
export default API
