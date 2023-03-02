const p = document.getElementById('p')
const button = document.getElementById('button')


button.addEventListener('click',()=>{
    const newTextNode = document.createTextNode('YES ')  
    p.append(newTextNode)
})


const button1 = document.createElement('button');
button1.className = "btn"
button1.textContent = "append 'OKAY'"
document.body.append(button1);

button1.addEventListener("click" , ()=>{
    const newTextNode1 = document.createTextNode('OKAY');
    p.append(newTextNode1)
})
 