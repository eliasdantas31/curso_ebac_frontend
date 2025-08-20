function Animal(nome, idade){
    this.nome = nome;
    this.idade = idade;
    this.fazerSom = function(){
        console.log(`O ${this.nome} está fazendo um som.`);
    }
}

function Cachorro(nome, idade, raca){
    Animal.call(this, nome, idade);
    this.raca = raca;
    this.latir = function(){
        console.log(`O ${this.nome} está latindo.`);
    }
}

function Gato(nome, idade, raca){
    Animal.call(this, nome, idade);
    this.raca = raca;
    this.miar = function(){
        console.log(`O ${this.nome} está miando.`);
    }
}

const cachorro1 = new Cachorro('Rex', 5, 'Labrador');
const gato1 = new Gato('Garfield', 3, 'Persa');
const cachorro2 = new Cachorro('Toby', 8, 'Golden Retriever');

console.log(cachorro1);
cachorro1.fazerSom();

console.log(gato1);
gato1.fazerSom();

console.log(cachorro2);
cachorro2.fazerSom();