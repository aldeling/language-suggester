function handleLanguage(event){
  event.preventDefault();
  const pet=document.querySelector("input[name='pet']:checked").value;
}
window.addEventListener("load", function() {
  document.getElementById("questions").addEventListener("submit", handleLanguage);
});