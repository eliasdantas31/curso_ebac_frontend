function multiplicar(a: number, b: number): number {
  return a * b;
}

function saudar(nome: string): string {
  return "Olá " + nome;
}

const resultadoMultiplicacao = multiplicar(5, 3); 
console.log(resultadoMultiplicacao); // 15

const mensagem = saudar("Maria");
console.log(mensagem); // "Olá Maria"