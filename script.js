const Presentation = "ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ!"
const titre = "Welcome"

document.getElementById("Presentation").innerHTML =Presentation;
document.getElementById("Titre").innerHTML =titre ;


// Charger les éléments de la liste depuis le stockage local
var items = JSON.parse(localStorage.getItem("items")) || [];

// Ajouter les éléments à la liste
var list = document.getElementById("myList");
for (var i = 0; i < items.length; i++) {
  var li = document.createElement("li");
  li.textContent = items[i];
  list.appendChild(li);
}

// Fonction pour ajouter un élément à la liste
function addItem() {
  var newItem = document.getElementById("newItem").value;
  items.push(newItem);
  localStorage.setItem("items", JSON.stringify(items));
  var li = document.createElement("li");
  li.textContent = newItem;
  list.appendChild(li);
}

// Fonction pour supprimer un élément de la liste
function removeItem() {
  var itemToRemove = document.getElementById("itemToRemove").value;
  items = items.filter(function(item) {
    return item !== itemToRemove;
  });
  localStorage.setItem("items", JSON.stringify(items));
  var lis = document.querySelectorAll("#myList li");
  for (var i = 0; i < lis.length; i++) {
    if (lis[i].textContent === itemToRemove) {
      lis[i].parentNode.removeChild(lis[i]);
      break;
    }
  }
}


//Afficchage d'erreur dans le champ
function afficherErreur() {
document.querySelector('#Erreur').innerHTML = "Aide toi des noms en rouge sur le côté";
}



//Fonction Page
function aller() {
  var valeur = document.getElementById("monChamp").value;
  var Page1 = "Page sur ";
  var Prophete = document.getElementById("Prophete");
  var Juzz = document.getElementById("Juzz");
  var Sourate = document.getElementById("Sourate");
  var Flashcard = document.getElementById("Flashcard");
  var Button = document.getElementById("new-card-button");
  var Afficchage = document.getElementById("Affichage")
      
  // Masquer tous les éléments
  Prophete.style.display = "none";
  Juzz.style.display = "none";
  Sourate.style.display = "none";
  Flashcard.style.display = "none";
  Button.style.display = "none";
  Afficchage.style.display = "none";
  
      
  // Afficher l'élément correspondant
  if (valeur === "Prophete") {
    Prophete.style.display = "block";
    var nom = valeur;
    var message = Page1;
    var titre = message + nom;
    document.querySelector('#Titre').innerHTML = titre;
    document.querySelector('#Erreur').innerHTML = "";
  } 
  else if (valeur === "Juzz") {
    Juzz.style.display = "block";
    var nom = valeur;
    var message = Page1;
    var titre = message + nom;
    document.querySelector('#Titre').innerHTML = titre;
    document.querySelector('#Erreur').innerHTML = "";
  }
  else if (valeur === "Sourate") {
    Sourate.style.display = "block";
    var nom = valeur;
    var message = Page1;
    var titre = message + nom;
    document.querySelector('#Titre').innerHTML = titre;
    document.querySelector('#Erreur').innerHTML = "";
  }
  else if (valeur === "Flashcard") {
    Flashcard.style.display = "block";
    Button.style.display = "block";
    var nom = valeur;
    var message = Page1;
    var titre = message + nom;
    document.querySelector('#Titre').innerHTML = "Revisions";
    document.querySelector('#Erreur').innerHTML = "";
  }
  else if (valeur === "Affichage") {
    Afficchage.style.display = "block";
    Button.style.display = "block";
    var nom = valeur;
    var message = Page1;
    document.querySelector('#Titre').innerHTML = "Ajouter et Supprimer li";
    document.querySelector('#Erreur').innerHTML = "";
  }
  else {
    afficherErreur();
  }
}
