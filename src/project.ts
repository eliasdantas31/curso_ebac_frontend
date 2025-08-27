// Função de multiplicação
function multiplicar(a: number, b: number): number {
  return a * b;
}

// Função de saudação
function saudar(nome: string): string {
  return "Olá " + nome;
}

// Exemplos de uso
const resultadoMultiplicacao = multiplicar(5, 3); 
console.log(resultadoMultiplicacao); // 15

const mensagem = saudar("Maria");
console.log(mensagem); // "Olá Maria"