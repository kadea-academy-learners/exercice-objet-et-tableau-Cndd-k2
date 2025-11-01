// Tu disposes d'un tableau nommé `eleves` dont chaque élément est un objet ayant la structure suivante :
// {
//   nom: string,      // Le nom de l'élève
//   notes: number[]   // Un tableau de notes (nombres) obtenues par l'élève
// }
//
// Écris une fonction `showStudentBulletin(eleves)` qui, pour chaque élève du tableau, retourne un bulletin scolaire contenant :
// - Son nom
// - Sa moyenne (calculée à partir de ses notes, arrondie à deux décimales)
// - Un commentaire basé sur la moyenne obtenue :
//     - Moyenne >= 16 : "Excellent"
//     - Moyenne >= 14 : "Très Bien"
//     - Moyenne >= 12 : "Bien"
//     - Moyenne >= 10 : "Passable"
//     - Moyenne < 10  : "À revoir"
// Dans le cas où l'élève n'a pas de notes, la moyenne doit être considérée comme 0 et le commentaire "À revoir".
function showStudentBulletin(eleves) {
	let averageNote = []

	for (let i in eleves) {
		if (eleves[i].notes.length < 1) {
			averageNote.push({
				nom : eleves[i].name,
				moyenne : 0,
				commentaire : "A revoir"
			})
		} else {
			let sum = 0
			for(let j = 0; j < eleves[i].notes.length; j++) {
				sum += eleves[i].notes[j]
			}

			let average = sum / eleves[i].notes.length
			let comment = ""

			if(average >= 16) {
				comment = "Excellent"
			} else if (average < 16 && average >= 14) {
				comment = "Très Bien"
			} else if (average < 14 && average >= 12) {
				comment = "Bien"
			} else if (average < 12 && average >= 10) {
				comment = "Passable"
			} else {
				comment = "A revoir"
			}

			averageNote.push({
				nom : eleves[i].name,
				moyenne : average,
				commentaire : comment
			})
		}
	}

	return averageNote
}

const students = [
	{
		name: "Judah",
		notes: [15, 18, 20, 14],
	},
	{
		name: "Randy",
		notes: [8, 12, 10],
	},
	{
		name: "Francois",
		notes: [],
	},
	{
		name: "Geoffrey",
		notes: [13, 14, 15, 16],
	},
];
console.log(showStudentBulletin(students));



module.exports = {
	showStudentBulletin,
};