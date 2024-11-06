// Scrieți o funcție pentru a genera un număr aleatoriu mai mare sau egal cu o variabilă start și strict mai mic decât o variabilă end . Aceste două variabile sunt capetele intervalului pentru numărul general: [start, end)

function getRandom(start, end) {
  return Math.floor(Math.random() * (end - start) + start)
}

console.log(getRandom(5, 10))