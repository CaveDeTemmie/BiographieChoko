let btnEnvoyerFormulaire = document.getElementById("FilsDePute");
console.log(btnEnvoyerFormulaire);

btnEnvoyerFormulaire.addEventListener("click", () => {
   //récupérer les donnée du formulaire
   let genre = document.querySelectorAll("input[name = 'genre']");

   for (i = 0; i < genre.length; i++) {
      if (genre[i].ariaChecked === true) {
         leGenre = genre[i].value;
      }
   }

   //stocker des saisies dans le local Storage
   localStorage.setItem("Mail", document.querySelector("#mail").value);
   localStorage.setItem("Mdp", document.querySelector("#mdp").value);

   console.log(document.querySelector("#homme"));
});
