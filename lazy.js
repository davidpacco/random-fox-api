const options = {
  threshold: .5,
}

function loadImage (entries, observer) {
  const container = entries[0].target
  const image = container.querySelector('img')
  const url = image.dataset.src

  if (entries[0].isIntersecting) {
    image.src = url
    observer.unobserve(container)
  }
}

const observer = new IntersectionObserver(loadImage, options)

export const registerImage = image => {
  observer.observe(image)
}