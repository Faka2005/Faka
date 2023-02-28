const message = 'ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ!' // Try edit me
const message2="Welcome"
// Update header text
document.querySelector('#Presentation').innerHTML = message;
document.querySelector('#titre').innerHTML = message2;

//Fonction qui active les Div
function AffichePage() {
  // Récupérer la valeur saisie dans le champ
  var valeur = document.getElementById("monChamp").value;
  
  // Masquer toutes les div
  var divs = document.getElementsByClassName("maDiv");
  for (var i = 0; i < divs.length; i++) {
    divs[i].style.display = "none";
  }
  
  // Afficher la div correspondante
  var divAffichee = document.getElementById(valeur);
  if (divAffichee) {
    divAffichee.style.display = "block";
  }
}