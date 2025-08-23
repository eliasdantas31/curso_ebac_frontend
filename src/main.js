//npm run build, para rodar o babel
const alunos = [
    {nome: "Ana", nota: 10},
    {nome: "Pedro", nota: 5},
    {nome: "João", nota: 9},
    {nome: "Maria", nota: 7}
]

function bestOfTheClass(alunos){
    let result = alunos.filter(aluno => aluno.nota >= 6).map(aluno => aluno.nome);
    return `Os melhores alunos foram ${result.join(", ")}.`;
}

const result = bestOfTheClass(alunos);
console.log(result);
