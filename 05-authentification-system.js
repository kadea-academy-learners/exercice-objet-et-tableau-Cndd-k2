// 1. Crée un tableau nommé `baseDeDonnees` qui contiendra des objets représentant des utilisateurs.
//    Chaque utilisateur doit avoir les propriétés suivantes :
//    - id: number (identifiant unique)
//    - nom: string
//    - email: string
//    - password: string
//    - estConnecte: boolean (indique si l'utilisateur est connecté)
//    - estBloque: boolean (indique si l'utilisateur est bloqué)

// 2. Écris une fonction `signUp(nom, email, password, confirmPassword)` qui :
//    - Vérifie si l'email existe déjà dans `baseDeDonnees`. Si oui, retourne un message d'erreur.
//    - Vérifie si `password` et `confirmPassword` sont identiques. Si non, retourne un message d'erreur.
//    - Sinon, ajoute le nouvel utilisateur à `baseDeDonnees` (avec un id unique, estConnecte à false, estBloque à false) et retourne l'objet utilisateur créé.

// 3. Écris une fonction `login(email, password)` qui :
//    - Recherche l'utilisateur correspondant à l'email dans `baseDeDonnees`.
//    - Si l'utilisateur n'existe pas ou si le mot de passe est incorrect, retourne un message d'erreur.
//    - Si l'utilisateur est bloqué (`estBloque` à true), retourne un message d'erreur spécifique.
//    - Sinon, met à jour `estConnecte` à true pour cet utilisateur et retourne l'objet utilisateur connecté.

const baseDeDonnees = [
  { id: 1, name: "Fayila", email: "fayila@gmail.com", password: "123456", estConnecte: true, estBloque: false },
  { id: 2, name: "Simeon", email: "Simeon@com", password: "654321", estConnecte: false, estBloque: false },
  { id: 3, name: "Cherubin", email: "Cherubin@com", password: "112233", estConnecte: false, estBloque: true },
  { id: 4, name: "Abel", email: "Abel@com", password: "445566", estConnecte: true, estBloque: false },
  { id: 5, name: "David", email: "David@com", password: "778899", estConnecte: false, estBloque: false }
];

function signUp(name, email, password, confirmPassword) {
  if (password !== confirmPassword) {
    return "Erreur : Les mots de passe ne correspondent pas.";
  }

  for (let i = 0; i < baseDeDonnees.length; i++) {
    if (baseDeDonnees[i].email === email) {
      return "Erreur : L'email existe déjà.";
    }
  }

  const newUser = {
    id: baseDeDonnees.length + 1,
    name,
    email,
    password,
    estConnecte: false,
    estBloque: false
  };

  baseDeDonnees.push(newUser);
  return newUser;
}

function login(email, password) {
  const user = baseDeDonnees.find(u => u.email === email);
  if (!user) return "Erreur : Utilisateur introuvable.";
  if (user.password !== password) return "Erreur : Mot de passe incorrect.";
  if (user.estBloque) return "Erreur : Utilisateur bloqué.";

  user.estConnecte = true;
  return user;
}

console.log(baseDeDonnees);

console.log(signUp("Fayila", "fayila@gmail.com", "123456", "123456"));

console.log(login("Simeon@com", "654321"));

module.exports = { baseDeDonnees, signUp, login };
