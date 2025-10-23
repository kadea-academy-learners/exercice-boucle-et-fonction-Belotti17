/*
  Énoncé :
  Écris une fonction `nombreDeVoyelles(phrase)` qui retourne le nombre de voyelles
  (a, e, i, o, u, y) dans une chaîne, insensible à la casse.

  Signature attendue :
    function nombreDeVoyelles(phrase) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function nombreDeVoyelles(texte) {
  if (typeof texte !== "string") return 0;

  const voyelles = "aeiouyAEIOUY";
  let compteur = 0;

  for (let char of texte) {
    if (voyelles.includes(char)) {
      compteur++;
    }
  }

  return compteur;
}

// Ligne d'affichage ajoutée
console.log(
  "nombreDeVoyelles('Bonjour le monde') =",
  nombreDeVoyelles("Je suis Belotti")
);
// Ne pas modifier la ligne ci-dessous
module.exports = { nombreDeVoyelles };
