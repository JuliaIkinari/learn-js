let button = document.getElementById('button')
let img = document.querySelector('img')
button.style.backgroundColor = 'lightblue'
button.addEventListener('click' , onclick)
function onclick () {
  console.log('Jopa', new Date())

  if (img.style.width === '100px') {
    img.style.width = '300px'
  }
  else {
    img.style.width = '100px'
  }
}