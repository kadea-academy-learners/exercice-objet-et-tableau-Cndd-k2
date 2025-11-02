[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/Wz3VSMgN)

# JavaScript Exercises
This repository contains several JavaScript exercises to practice **functions, arrays, objects, and basic logic**. Each exercise includes test files using **Jest**.

---

## 📁 Exercises

### 1. Create User (`createUser`)
**Description:**  
Create a function `createUser(nom, age, estConnecté)` that returns a user object with the given properties.

**Function signature:**
```js
createUser(nom: string, age: number, estConnecté: boolean) => object


Example:

createUser("John", 30, true);
// Returns: { nom: "John", age: 30, estConnecté: true }

2. Who Is Admin (whoIsAdmin)

Description:
Create a function whoIsAdmin(users) that receives an array of user objects and returns an array of names of users who are admins.

Function signature:

whoIsAdmin(users: Array<{ nom: string, age: number, estAdmin: boolean }>) => string[]


Example:

const users = [
  { nom: "Alice", age: 30, estAdmin: true },
  { nom: "Bob", age: 25, estAdmin: false }
];

whoIsAdmin(users); // ["Alice"]

3. Show Student Bulletin (showStudentBulletin)

Description:
Create a function showStudentBulletin(eleves) that returns a bulletin for each student including:

nom

moyenne (average of grades, rounded to 2 decimals)

commentaire (based on average):

>=16 → "Excellent"

>=14 → "Très Bien"

>=12 → "Bien"

>=10 → "Passable"

<10 → "À revoir"

Function signature:

showStudentBulletin(eleves: Array<{ nom: string, notes: number[] }>) => Array<{ nom: string, moyenne: number, commentaire: string }>


Example:

const eleves = [{ nom: "Alice", notes: [18,16,17] }];
showStudentBulletin(eleves);
// Returns: [{ nom: "Alice", moyenne: 17, commentaire: "Excellent" }]

4. Authentication System (auth_system)

Description:
Implement a basic authentication system with the following functions:

signUp(nom, email, password, confirmPassword):

Checks if email exists

Checks if passwords match

Adds user to the database if valid

login(email, password):

Checks credentials

Returns the connected user object or an error message

Handles blocked users

Database structure example:

{
  id: 1,
  nom: "Alice",
  email: "alice@email.com",
  password: "123456",
  estConnecte: false,
  estBloque: false
}

🧪 Running Tests

All exercises have corresponding test files using Jest.
To run the tests:

npm install
npm test

📝 Notes

Always match property names exactly (nom vs name, estConnecté vs estConnecte)

Follow the exact messages expected in tests (accents, punctuation, capitalization)

Use array methods or loops as needed to solve each exercise

💡 Author

Candide Khb – JavaScript learner passionate about clean code and testing