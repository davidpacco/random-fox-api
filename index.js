import { registerImage } from './lazy.js'

const urlApi = 'https://randomfox.ca/floof/'
const app = document.querySelector('#app')
const addBtn = document.querySelector('#add-button')
const removeBtn = document.querySelector('#remove-button')

const fetchDataLink = async (url) => {
  let response = await fetch(url)
  let data = await response.json()

  return data.image
}

const createImageNode = async () => {
  const container = document.createElement('div')
  container.className = 'container'
  app.appendChild(container)

  const img = document.createElement('img')
  img.className = 'img'
  img.alt = 'Fox image'
  img.dataset.src = await fetchDataLink(urlApi)

  container.appendChild(img)
  registerImage(container)
}

const clearImages = () => {
  [...app.childNodes].forEach(child => {
    if (child.nodeName === 'DIV') {
      child.remove()
    }
  });
}

addBtn.addEventListener('click', createImageNode)
removeBtn.addEventListener('click', clearImages)