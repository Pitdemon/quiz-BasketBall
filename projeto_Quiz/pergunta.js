const form = document.querySelector('form')
const criar = document.getElementById('criar')

FormData.onsubmit = (evento) => {
    const inputs = new FormData(evento.target)
    const pergunta  = inputs.get ('busca').toUpperCase()
}