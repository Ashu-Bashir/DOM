
// pageXOffset and pageYOffset are properties in JavaScript that refer to the number of pixels that the current document has been scrolled horizontally and vertically, respectively.

// These properties are part of the window object and are equivalent to the scrollX and scrollY properties

function onScrollFunction(){
    const p = document.getElementById('p')
    p.innerHTML = `
    window.pageXOffset = ${window.pageXOffset.toFixed()}`
} 