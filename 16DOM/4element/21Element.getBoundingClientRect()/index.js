// getBoundingClientRect() is a method in JavaScript that returns the size and position of an element relative to the viewport (the visible area of the browser window).

// When you call getBoundingClientRect() on an element, it returns an object with properties top, left, right, bottom, width, and height. These properties represent the position and size of the element's bounding box (a rectangle that encloses the element) in pixels, relative to the top-left corner of the viewport.



function change() {
    const div = document.getElementById('div')
    console.log(div)
    const rect = div.getBoundingClientRect();
    console.log(rect);
    let p = document.getElementById('p')

    p.innerHTML = ''
    for (let i in rect) {
        if (typeof rect[i] !== 'function') {
            p.innerHTML += `
            <br>
            ${i}: ${rect[i]}`
        }
    }
} 

document.addEventListener('scroll', change)
