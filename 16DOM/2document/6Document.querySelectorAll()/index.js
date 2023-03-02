/*
The Document method querySelectorAll() returns a static (not live) NodeList 
representing a list of the document's elements that match the specified group of selectors.
*/

// basic
const element1 = document.querySelectorAll('td')
console.log(element1)       // NodeList(6) [td.first, td.first, td#second, td#second, td.first, td.second]

// useful in getting all the elements with same id
const element2 = document.querySelectorAll('.first')
console.log(element2)       // NodeList(3) [td.first, td.first, td.first]

const element3 = document.querySelectorAll('#second')
console.log(element3)       // NodeList(2) [td#second, td#second]
 


// getting mutiple elements
const mutiple1 = document.querySelectorAll('div#one, div#two')
console.log(mutiple1)       // NodeList(2) [div#one, div#two]


// accessing child using parent using '>' and accessing using attribute value 
const mutiple2 = document.querySelector('div.parent.using')
console.log(mutiple2)       
const mutiple3 = mutiple2.querySelectorAll('div.user-panel.main > input[name = "login"]')
console.log(mutiple3)       // NodeList [input]
const mutiple4 = mutiple2.querySelectorAll('div.user-panel.main > input[name = "login2"]')
console.log(mutiple4)       // NodeList [input]


// scope - gives unpredictable results
const select1 = document.querySelector('.select');
console.log(select1);
const inner1 = select1.querySelectorAll('.outer .inner')
console.log(inner1)          // NodeList [div.inner]

// In this case, the selector `.outer .inner` is used to select all elements with the class .inner that are descendants of .outer, including those that are descendants of .select.

// to avoid use this
const select2 = document.querySelector('.select')
const inner2 = select2.querySelectorAll(':scope .outer .inner')
console.log(inner2)          // NodeList []


// The reason why inner2 is an empty node list in your example is because the :scope selector is used to define the scope of the query to the .select element, but then the .outer .inner selector is used to look for elements that have the class .inner and are descendants of elements with the class .outer.

// In the HTML provided, there is no element with the class .outer that is a descendant of .select. Therefore, querySelectorAll() returns an empty node list.