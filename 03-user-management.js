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
    if (users[x].estAdmin) {
      adminList.push(users[x].nom); // ✅ Utiliser "nom" au lieu de "name"
    }
  }

  return adminList;
}

const myUsers = [
  { nom: "Naruto Uzumaki", age: 45, estAdmin: false },
  { nom: "Orochimaru", age: 45, estAdmin: false },
  { nom: "Itachi Uchiha", age: 75, estAdmin: true },
  { nom: "Kakashi Hatake", age: 35, estAdmin: true },
  { nom: "Gaara", age: 25, estAdmin: false },
];

console.log(whoIsAdmin(myUsers)); // ["Itachi Uchiha", "Kakashi Hatake"]

module.exports = { whoIsAdmin };
