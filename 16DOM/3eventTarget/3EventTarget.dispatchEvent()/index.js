/*
to dispatch an event automatically by JavaScript without manually giving the action like click
*/

// In the Document Object Model (DOM) in JavaScript, the dispatchEvent() method is used to trigger an event on a DOM element.

// manual Event 
const manualButton = document.getElementById('mannualButton')
manualButton.addEventListener('click', () =>{
    console.log('manual button pressed')
})
 

// automatic event
const automaticButton = document.getElementById('automaticButton')
automaticButton.addEventListener('click',  () =>{
    console.log('automaticButton button pressed')
})

const clickEvent = new Event('click')
automaticButton.dispatchEvent(clickEvent)


// custom event
const customButton = document.getElementById('customButton')
customButton.addEventListener('anyName',()=>{
    console.log('customButton is pressed')
})

const customEvent = new Event('anyName');
customButton.dispatchEvent(customEvent)




const myElement = document.getElementById('myElement');

myElement.addEventListener('myEvent', function(event) {
    console.log(event.detail.message);
});


// create a new custom event
const myEvent = new CustomEvent('myEvent', { detail: { message: 'Hello world!' } });

// dispatch the event on the element
myElement.dispatchEvent(myEvent);
