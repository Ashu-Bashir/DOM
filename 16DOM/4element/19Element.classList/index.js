// classname
// className is a property that returns a string containing all the class names of an element separated by space. It can be used to get or set the value of the class attribute of an element.

//classlist

// classList, on the other hand, is an object that contains methods for adding, removing, and toggling classes of an element. It has a more powerful API than className, which only allows setting the entire list of classes as a single string.


const p = document.getElementsByTagName('p')[0]
console.log(p.className)        // one two


// listing className
console.log(p.classList)        // DOMTokenList(2) ['one', 'two', value: 'one two']



// adding class name
p.classList.add('three', 'someThree', 'someFour')
console.log(p.classList)        // DOMTokenList(5) ['one', 'two', 'three', 'someThree', 'someFour', value: 'one two three someThree someFour']

// replacing class name
p.classList.replace('three', 'someNewClassName')
console.log(p.classList)        // DOMTokenList(5) ['one', 'two', 'someNewClassName', 'someThree', 'someFour', value: 'one two someNewClassName someThree someFour']

// removing class name
p.classList.remove('someNewClassName', 'someThree', 'someFour')
console.log(p.classList)        // DOMTokenList(2) ['one', 'two', value: 'one two']





// toggle class name - add if not present - remove if already present
p.classList.toggle('three')
console.log(p.classList)        // DOMTokenList(3) ['one', 'two', 'three', value: 'one two three']

p.classList.toggle('three')
console.log(p.classList)        // DOMTokenList(2) ['one', 'two', value: 'one two']


// toggle based on condition
const i = 20
p.classList.toggle('three', i<10)
console.log(p.classList)        // DOMTokenList(2) ['one', 'two', value: 'one two']

p.classList.toggle('three', i>10)
console.log(p.classList)        // DOMTokenList(3) ['one', 'two', 'three', value: 'one two three']
