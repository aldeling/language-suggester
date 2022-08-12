//this section is for answers
function hideLanguageResults(){
  document.getElementById("ruby").setAttribute("class", "hidden");
}

//this section is for question
function handleLanguage(event){
   event.preventDefault();
 const pet = document.querySelector("input[name='pet']:checked]]").value;


window.addEventListener("load", function() {
  document.getElementById("questions").addEventListener("submit", handleLanguage);


  if (pet === cat){
    document.getElementById("ruby").removeAttribute("class");
  }
});
}