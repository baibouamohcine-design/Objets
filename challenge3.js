const prompt= require("prompt-sync")();
const enterLargeur = Number(prompt("entré largeur pour calcule l'air de la rectangle : "))
const enterLongeur = Number(prompt("entré longeur pour calcule l'air de la rectangle  "))


function calcurLair(enterLargeur,enterLongeur){
    return enterLargeur*enterLongeur
}
let resultat = calcurLair(enterLargeur,enterLongeur)
console.log(`l'air de cette rectangle  est : ${resultat}`)
