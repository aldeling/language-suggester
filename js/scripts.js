function hideSuggesterResults() {
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("swift").setAttribute("class", "hidden");
}

window.onload = function() {
  hideSuggesterResults();
  const form = document.querySelector("form");
  form.onsubmit = function(event){
    event.preventDefault();
    hideSuggesterResults();
    const petSelection = document.querySelector("input[name='pet']:checked").value;

    if (petSelection === "cat") {
      document.getElementById("ruby").removeAttribute("class");
    } else if (petSelection === "dog") {
      document.getElementById("python").removeAttribute("class");
    } else if (petSelection === "unicorn") {
      document.getElementById("swift").removeAttribute("class");
    }
  };
};
