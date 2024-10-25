// Scrieți o funcție pentru a adăuga numere nelimitate

function addNumber(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(addNumber(1, 2, 3))