/*
by using Element.outerHTML we can get the whole element and change the whole element
the changes are live.

it's not changing the value inserted it inserts a new element in the place of the tag.
the reference will still refer to the old element.
*/


const ele = document.getElementById('name');
console.log(ele)                // <p id="name">ashu</p>
console.log(ele.parentNode)  //< body>....</body>

console.log(ele.outerHTML)      //<div id="name"><p>ashu</p></div>



setTimeout(() => ele.outerHTML = '<p>changed to ashu</p>', 1000)
// after changing the parent node will be changed to null
setTimeout(() => console.log(ele.parentNode), 1000)           // null
// new value is inserted but still the 'ele' refers to the old element
setTimeout(() => console.log(ele.outerHTML), 1000)           // as string <div id="name"><p>ashu</p></div>
setTimeout(() => console.log(document.body.firstElementChild), 1000)        // <p>changed to ashu</p>



