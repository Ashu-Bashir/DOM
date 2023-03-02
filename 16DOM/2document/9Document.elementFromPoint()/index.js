window.addEventListener('click',(e) => {
    console.log(e);
    let x = e.clientX;
    let y = e.clientY;
    const ele = document.elementFromPoint(x,y)
    ele.style.backgroundColor = 'aqua'
})