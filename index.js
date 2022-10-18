const urlApi = 'https://randomfox.ca/floof/'
const app = document.querySelector('#app')
const btn = document.querySelector('#button')

const fetchDataLink = async (url) => {
  let response = await fetch(url)
  let data = await response.json()

  return data.image
}

const createImageNode = async () => {
  const container = document.createElement('div')
  container.className = 'container'

  const img = document.createElement('img')
  img.className = 'img'
  img.alt = 'Fox image'
  img.src = await fetchDataLink(urlApi)

  container.appendChild(img)
  app.appendChild(container)
}

btn.addEventListener('click', createImageNode)
