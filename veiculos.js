function Caminhao(tipo, marca, modelo) {
    this.tipo = tipo;
    this.marca = marca;
    this.modelo = modelo;
}

function Moto(tipo, marca, modelo, rodas) {
    Caminhao.call(this, tipo, marca, modelo);
    this.rodas = rodas;
}

function Carro(tipo, marca, modelo, tetoSolar) {
    Caminhao.call(this, tipo, marca, modelo);
    this.tetoSolar = tetoSolar;
}

const Truck = new Caminhao("Caminhao", "Daf", "XF FTS 480")
const harleyDavidson = new Moto("Moto", "Harley Davidson", "Breakout 114 FXBRS", 2)
const Ferrari = new Carro("Carro", "Ferrari", "296 GTB", true)

console.log(Truck);
console.log(harleyDavidson);
console.log(Ferrari);