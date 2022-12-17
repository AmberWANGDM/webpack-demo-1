import x from './x'
import png from './assets/1.png'

const div = document.getElementById('app')

div.innerHTML = `
  <img width="100px" src="${png}">
`
const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = () => {
  const promise = import('./lazy')
  promise.then(
    (module) => {
      module.default()
    },
    () => {}
  )
}

div.appendChild(button)
