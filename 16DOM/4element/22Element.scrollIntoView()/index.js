const content = document.getElementById('content')
content.addEventListener('click',() =>{
    div.scrollIntoView()
    
} ) 


function scrollToDiv() {
    console.log("clicked");
  let div = document.getElementById("my-div");
  div.scrollIntoView({ behavior: "smooth", block: "end" });
}

