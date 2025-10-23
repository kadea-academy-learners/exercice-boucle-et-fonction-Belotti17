/*
  Énoncé :
  Crée une fonction `max(a, b)` qui retourne :
    - le plus grand des deux nombres
    - la chaîne "Les deux nombres sont égaux" si les deux sont identiques
    - null si un argument n'est pas un nombre valide

  Signature attendue :
    function max(a, b) -> number | string | null

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function max(a, b) {
  // Vérification du nombre d'arguments
  if (arguments.length !== 2) return null;

  // Vérification des types
  if (typeof a !== "number" || typeof b !== "number") return null;
  if (isNaN(a) || isNaN(b)) return null;

  // Comparaison
  if (a === b) return "Les deux nombres sont égaux";
  return a > b ? a : b;
}
console.log("max(7, 3) =", max(7, 3)); // Affiche : 7
console.log("max(5, 5) =", max(5, 5)); // Affiche : Les deux nombres sont égaux
console.log("max('5', 10) =", max("5", 10)); // Affiche : null

// Ne pas modifier la ligne ci-dessous
module.exports = { max };
