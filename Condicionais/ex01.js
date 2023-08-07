const nota1 = 7;
const nota2 = 8;
const nota3 = 5;

const media = (nota1 + nota2 + nota3) / 3;

cosole.log('Sua média é: ' + media);

if(media > 7){
    console.log("Parabéns, você passou por média.")
}else if (media <= 5){
    console.log("Você está de recuperação.")
}else if (media < 5){
    console.log("Você está reprovado.")
}