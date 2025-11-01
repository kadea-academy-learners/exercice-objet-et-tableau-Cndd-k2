// Crée une fonction whoIsAdmin qui affiche les noms des utilisateurs qui sont admin qui prends 
// en paramètre un tableau d'objet d'utilisateurs .
// Chaque objet utilisateur a les propriétés suivantes :
// - nom (string)
// - age (number)
// - estAdmin (boolean)
// La fonction doit retourner un tableau contenant les noms des utilisateurs qui sont admin.

function whoIsAdmin(users) {

	let adminList = [];
	for (let x in users) {
		if ( users[x].estAdmin ) {
			name: "Gaara",
			age: 25,
			estAdmin: false,
		},
	]


console.log(whoIsAdmin(myUsers))

module.exports = {
	whoIsAdmin,
};


