// Récupère l'objet form
var form = document.getElementById("formId");

// Récupère l'élément input
var input = form.elements.inputName;

// Récupère la valeur de l'élément input
var inputValue = input.value;

// Récupère l'objet form
var form = document.getElementById("formId");

// Ajoute un gestionnaire d'événements à l'événement submit du formulaire
form.addEventListener("submit", function(event) {
  // Empêche le formulaire de soumettre les données
  event.preventDefault();

  // Récupère l'élément input
  var input = form.elements.inputName;

  // Récupère la valeur de l'élément input
  var inputValue = input.value;

  // Affiche la valeur de l'élément input
  alert(inputValue);
});
