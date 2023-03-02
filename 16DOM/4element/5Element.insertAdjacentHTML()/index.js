// The insertAdjacentHTML() method to insert HTML content into a specified position relative to an element. The method takes two arguments:

//1.  The first argument is a string that specifies where to insert the HTML content relative to the element. The possible values are:
// 'beforebegin': Inserts the HTML content as a previous sibling of the element.
// 'afterbegin': Inserts the HTML content as the first child of the element.
// 'beforeend': Inserts the HTML content as the last child of the element.
// 'afterend': Inserts the HTML content as a next sibling of the element.
//2.  The second argument is a string that contains the HTML content to be inserted.


const ol = document.getElementById('orderedList')

// beforebegin
ol.insertAdjacentHTML('beforebegin', `<p>beforebegin</p>`)
console.log(document.body.children)     // HTMLCollection(4) [p, ol#orderedList, p, script, orderedList: ol#orderedList]

// afterbegin
ol.insertAdjacentHTML('afterbegin', `<p>afterbegin</p>`)
console.log(ol.children)     // HTMLCollection(2) [p, li]

// beforeend
ol.insertAdjacentHTML('beforeend', `<p>beforeend</p>`)
console.log(ol.children)     // HTMLCollection(3) [p, li, p]

// afterend
ol.insertAdjacentHTML('afterend', `<p>afterend</p>`)
console.log(document.body.children)     // HTMLCollection(4) [p, ol#orderedList, p, script, orderedList: ol#orderedList] 