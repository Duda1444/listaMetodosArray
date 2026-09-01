const alunos = ["Janaina","Pedro","Carlos","Silvia","Maria"];
const nomeBusca = "Silvia";
const posicao = alunos.indexOf(nomeBusca);

if (posicao !== -1) {
    console.log(`O aluno ${nomeBusca} está na posição ${posicao} do array.`);
} else {
    console.log(`O aluno ${nomeBusca} não foi encontrado no array.`);
}