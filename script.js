const Presentation = "ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ!"
const titre = "Welcome"

document.getElementById("Presentation").innerHTML =Presentation;
document.getElementById("Titre").innerHTML =titre ;





//Afficchage d'erreur dans le champ
function afficherErreur() {
document.querySelector('#Erreur').innerHTML = "Aide toi des noms en rouge sur le côté";
}



//Fonction Page
function aller() {
  var valeur = document.getElementById("monChamp").value;
  var Page1 = "Page sur ";
  var Biographie = document.getElementById("Biographie");
  var Juzz = document.getElementById("Juzz");
  var Sourate = document.getElementById("Sourate");
  var Flashcard = document.getElementById("Flashcard");
  var Button = document.getElementById("new-card-button");
  var Ecouter = document.getElementById("Ecouter");
  var Histoire = document.getElementById("Histoire") ; 
  var Livre = document.getElementById("Livre");
  var Tadjweed=document.getElementById("#Tadjweed");
  // Masquer tous les éléments
  Prophete.style.display = "none";
  Juzz.style.display = "none";
  Sourate.style.display = "none";
  Ecouter.style.display = "none";
  Button.style.display = "none";
  Histoire.style.display = "none";
  Livre.style.display="none";
  Tadjweed.style.display="none";
  
      
  // Afficher l'élément correspondant
  if (valeur === "Prophete"){
    Prophete.style.display = "block";
    var nom = valeur;
    var message = Page1;
    document.querySelector('#Titre').innerHTML = "les Prophete";
    document.querySelector('#Erreur').innerHTML = "";
  } 
  else if (valeur === "Juzz"){
    Juzz.style.display = "block";
    var nom = valeur;
    var message = Page1;
    var titre = message + nom;
    document.querySelector('#Titre').innerHTML = titre;
    document.querySelector('#Erreur').innerHTML = "";
  }
  else if (valeur === "Sourate"){
    Sourate.style.display = "block";
    var nom = valeur;
    var message = Page1;
    var titre = message + nom;
    document.querySelector('#Titre').innerHTML = titre;
    document.querySelector('#Erreur').innerHTML = "";
  }
  else if (valeur === "Livre"){
    Livre.style.display = "block";
    Button.style.display = "block";
    var nom = valeur;
    var message = Page1;
    var titre = message + nom;
    document.querySelector('#Titre').innerHTML = titre;
    document.querySelector('#Erreur').innerHTML = "";
  }
  else if (valeur === "Ecouter"){
    Ecouter.style.display = "block";
    Button.style.display = "block";
    var nom = valeur;
    var message = Page1;
    var titre = message + nom;
    document.querySelector('#Titre').innerHTML = titre;
    document.querySelector('#Erreur').innerHTML = "";
  }
  else if(valeur==="Histoire"){
    Histoire.style.display="none";
    var nom=valeur;
    var message=Page1;
    var titre = message + nom;
    document.querySelector(#Titre).innerHTML=titre;
    document.querySelector("#Erreur")="";
  }
  else if (valeur==="Tadjweed"){
    Tadjweed.style.display="none";
    var nom=valeur;
    var message=Page1;
    var titre = message + nom;
    document.querySelector(#Titre).innerHTML=titre;
    document.querySelector("#Erreur")="";
  }
  else {
    afficherErreur();
  }
}
