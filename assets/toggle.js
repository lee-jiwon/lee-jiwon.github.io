function toggleAbstract(abstractId) {
  var abstract = document.getElementById(abstractId);
  var button = document.getElementById('toggle' + abstractId.charAt(0).toUpperCase() + abstractId.slice(1));
  
  if (abstract.style.display === "none") {
    abstract.style.display = "block";
    button.textContent = "Hide Abstract";
  } else {
    abstract.style.display = "none";
    button.textContent = "Show Abstract";
  }
}
