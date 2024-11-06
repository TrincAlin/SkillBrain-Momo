// Scrieți o funcție pentru a găsi numărul de apariții al unei litere într-un șir

const sir = "Vreau sa lucrez in IT";
const litera = "v"

function letterCount(sir, litera) {
  const arr = sir.toLowerCase().split('')
  let counter = 0;
  arr.forEach(element => {
    if (litera === element) {
      counter++
    }
  });
  return counter
}

console.log(letterCount(sir, litera))
