class Masina{
  constructor(marca, model, culoare, kilometraj){
    this.marca = marca;
    this.model = model;
    this.culoare = culoare;
    this.kilometraj = kilometraj;
  }
  get proprietati() {
    return `Masina[marca=${this.marca}, model=${this.model}, culoare=${this.culoare}, kilometraj=${this.kilometraj}]`;
  }
}
class MasinaDeCurse extends Masina{
  constructor(marca, model, culoare, kilometraj){
    super(marca, model, culoare, kilometraj);
  }

  participaLaCampionat(pozitiaInCampionat){
    if (pozitiaInCampionat > 0){
      console.log(`Am castigat locul ${pozitiaInCampionat}`)
    } else {
      console.log(`Nu am castigat niciun premiu`)
    }
  }
}

function main(){
  const masina1s = new MasinaDeCurse("Toyota", "Turbo", "Rosu", 100000)
  masina1s.participaLaCampionat(30)

  console.log(masina1s.proprietati)
}

main();