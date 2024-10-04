// 1. Returnează un boolean dacă un număr este divizibil cu 10
function divizibil(num){
  if (num % 10 === 0){
    console.log(`${num} este divizibil cu 10!`)
  } else {
    console.log(`${num} nu este divizibil cu10!`)
  }
}


// 2.Scrieți o funcție numită tellFortune
function tellFortune(numarCopii,numePartener,locatieGeografica,locMunca){
  console.log(`Vei fi un ${locMunca} în ${locatieGeografica} căsătorit cu ${numePartener} și vei avea ${numarCopii}`)
}


// 3.Folosind instrucțiunea JavaScript switch se va obține ziua săptămânii
let day;
let weekSwitch = 2;
switch (weekSwitch){
  case 1:
    day = "Luni";
    break;
  case 2:
    day = "Marți";
    break;
  case 3:
    day = "Miercuri";
    break;
  case 4:
    day = "Joi";
    break;
  case 5:
    day = "Vineri";
    break;
  case 6:
    day = "Sâmbătă";
    break;
  case 7:
    day = "Duminică";
    break;
  default:
    day = "Zi invalidă";
    break;
}