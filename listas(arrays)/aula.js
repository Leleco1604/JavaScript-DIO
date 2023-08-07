
const alunos = ['Leonardo', 'Davi', 'Ana vitoria'];


// // adicionando a lista
alunos.push('Renan');

alunos[4] = 'Leonardo';

// // removendo da lista
alunos.pop

 console.log(alunos[0]);
 console.log(alunos[1]);
 console.log(alunos[2]);
 console.log(alunos);

// tamanho as notas
alunos.length();


const notas =  [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

const soma = notas[0] +  notas[1] +  notas[2] +  notas[3] +  notas[4];
console.log( soma / notas.length);



//Explicando o For
const nome = 'Leonardo Gabriel Barbosa de Melo';


for (let i = 0; i <nome.length; i++) {
    const letra = nome[i];
    console.log(letra);
}