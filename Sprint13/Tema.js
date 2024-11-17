class Masina{
  constructor(marca, model, culoare, kilometraj){
    this.marca = marca;
    this.model = model;
    this.culoare = culoare;
    this.kilometraj = kilometraj;
  }

  get proprietati(){
    return `MASINA[MARCA=${this.marca}MODEL=${this.model}CULOARE=${this.culoare}KILOMETRAJ=${this.kilometraj}]`
  }
}

function main() {
  const masina1 = new Masina("VOLVO","XC-60","Negru","234 000")
  const masina2 = new Masina("MAZDA","CX-5","Verde","111 000")
  const masina3 = new Masina("DACIA","BIGGSTER","Albastru","20 000")

  console.log(masina1.proprietati);
  console.log(masina2.proprietati);
  console.log(masina3.proprietati);

}

main()


