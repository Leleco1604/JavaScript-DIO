class Carro {
    marca;
    cor;
    gastoMedioporKm;

    constructor (marca, cor , gastoMedioporKm){
        this.marca = marca;
        this.cor = cor; 
        this.gastoMedioporKm = gastoMedioporKm;
    }
    calcularGastodePercurso(distanciaEmKm,precoCombustivel){
        return distanciaEmKm * this.gastoMedioporKm * precoCombustivel;

    }
}

const uno = new Carro('HB20', 'Prata', 1/10);
console.log(uno.calcularGastodePercurso(70,5));
const palio = new palio('Fiat','Preto' , 1/10);
console.log(palio.calcularGastodePercurso(70,5));
