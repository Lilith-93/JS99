//Fonction pour compter le nombre de clique sur nbclick
function count(){
//On crée la variable nbclick
	var nbclick = 0;
//A chaque click, on augmente nbclick d'un. Grâce à la propriété onclick en html. On enregistre le nbclick dans une variable appelée result
	var result = nbclick++;	
//On retourne result
	return result;
}
