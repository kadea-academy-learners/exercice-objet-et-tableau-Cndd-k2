// Crée un tableau `notes` contenant 5 nombres
// Écrire une fonction averageNote avec `notes` comme parametre qui effectue les opérations suivantes :
// - Calcule la moyenne des notes
// - retourne un message "Réussi" si la moyenne est >= 10, sinon "Échoué"

function averageNote(notes) {
	let sum = 0;
	for (let i = 0; i < notes.length; i++) {
		sum += notes[i];
	}
	let averageNote = sum / notes.length;


	if (averageNote >= 10) {
		return {
			moyenne: averageNote,
			message: "Réussi",
			notes: notes,
		};
	} else{
		return "Échoué";
	}

} 

console.log(averageNote([4, 8, 15, 16, 23]));



module.exports = {
	averageNote,
};



