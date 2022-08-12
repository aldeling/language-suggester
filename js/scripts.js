function hideSuggesterResults() {
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("swift").setAttribute("class", "hidden");
}

window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event){
      event.preventDefault();
     //hideResults();
      const pet = document.querySelector("input#pet").value;

    if (pet === "cat") {
      document.getElementById("ruby").removeAttribute("class");
    } else if (pet === "dog") {
        document.getElementById("python").removeAttribute("class");
    } else if (pet === "hamster") {
        document.getElementById("swift").removeAttribute("class");
    }
    };
  };
