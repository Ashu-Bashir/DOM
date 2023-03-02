// The attributes property of an HTML element to get a NamedNodeMap object that represents a collection of all the attributes of the element. The attributes property returns an array-like object, where each item represents an attribute of the element.



const element = document.getElementById('input')
console.log(element.attributes)
/*
NamedNodeMap {0: type, 1: name, 2: id, 3: userattribute, type: type, name: name, id: id, userattribute: userattribute, length: 4}
*/
