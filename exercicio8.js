let animais = ["cachorro", "gato", "coelho", "papagaio", "hamster"];
let animaisSelecionados = animais.slice(1, 3);

console.log ("Array original:", animais);
console.log("Array modificado :", animaisSelecionados);

console.log("O array original foi alterado? No slice(), Não! Veja o tamanho:", animais.length);