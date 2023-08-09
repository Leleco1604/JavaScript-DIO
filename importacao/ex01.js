const { gets, print } = require('./funcoes-auxiliares');

const media = gets();

if(media < 50){
    print('Reprovado');
}else if(media >= 5 && media < 7){
    print('Recuperação');
}else{
    print('Aprovado');
}
