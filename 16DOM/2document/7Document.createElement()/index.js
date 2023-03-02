// creating the element and appending to body
const down = document.getElementById('down')

const newElement = document.createElement('p')
newElement.className = 'newElementClassName'
newElement.innerHTML = '<strong>hi</strong> this is new message'

document.body.append(newElement)


 


const up = document.getElementById("#up");
const upElement = document.createElement('div')
upElement.className = "upElement"
upElement.innerHTML = 'Hi My Name is <i><b>Ashu</b></i>';
document.body.appendChild(upElement)