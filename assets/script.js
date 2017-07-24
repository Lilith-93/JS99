//POUR LE VERRE
  //On crée la variable score
  var scorev = 0;

  //Fonction pour annoncer la variable score selon la variable score
function displayScorev(){
  return document.getElementById("scorev").innerHTML = scorev;
  }

  //Fonction pour compter le nombre de clics
function v() {
  scorev++;
  return displayScorev() + scorev;
  }
  
  //POUR LE CUIVRE 
  var scorec = 0;

function displayScorec(){
  return document.getElementById("scorec").innerHTML = scorec;
  }

function c() {
  scorec++;
  return displayScorec() + scorec;
  }
  
//POUR L'AMPOULE 
  var scoreamp = 0;

function displayScoreamp(){
  return document.getElementById("scoreamp").innerHTML = scoreamp;
  }

function amp() {
  scoreamp++;
  return displayScoreamp() + scoreamp;
  }
  
