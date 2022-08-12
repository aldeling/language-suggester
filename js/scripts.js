function hideSuggesterResults() {
  document.getElementById("ruby").setAttribute("class", "hidden");
}

window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event){
      event.preventDefault();
      const pet = document.querySelector("input#pet").value;

    if (pet === "cat") {
      document.getElementById("ruby").removeAttribute("class");
    }
    };
  };
