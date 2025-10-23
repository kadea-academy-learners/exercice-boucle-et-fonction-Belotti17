/*
  Énoncé :
  Écris une fonction nommée `multiplication(a, b)` qui retourne le résultat de a * b.

  Signature attendue :
    function multiplication(a, b) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function multiplication(a, b) {
  // Vérifie si les deux paramètres sont bien des nombres
  if (typeof a !== "number" || typeof b !== "number") {
    return undefined; // on ne log plus ici
  }

  // Calcule le résultat
  const resultat = a * b;

  // Corrige le cas où le résultat serait -0
  return Object.is(resultat, -0) ? 0 : resultat;
}

if (require.main === module) {
  const resultat = multiplication(5, 3);
  console.log("Résultat :", resultat);
}

// Ne pas modifier la ligne ci-dessous
module.exports = { multiplication };
