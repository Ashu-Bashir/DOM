/*
by using Element.innerHTML we can get and change the value of the element
the changes are live.

remember <script> won't have any effect on changing or adding
*/


const ele = document.getElementById('name')
console.log(document.body.innerHTML)
/*
<p id="name">ashu</p>    
<script src="index.js"></script>
*/ 
console.log(ele.innerHTML)      // ashu
console.log(ele)                // <p id="name">ashu</p>

setTimeout(() => document.body.innerHTML = '<p>changed to ashu</p>', 1000)
setTimeout(() => document.body.innerHTML = '<p>ashu changed back</p>', 2000)
setTimeout(() => console.log(document.body.innerHTML) , 2000)           // <p>ashu changed back</p>
