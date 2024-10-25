// Scrieți o funcție care creează un obiect pentru a păstra informații despre rețeta ta preferată

function creareReteta(titlu, portii, ingrediente) {
  return {
    titlu: titlu,
    portii: portii,
    ingrediente: ingrediente,
  }
}

const obiect = creareReteta("pizza", 3, ["sunca", "cas", "ketchup"])
console.log(obiect.titlu)
console.log(obiect.portii)
console.log(obiect.ingrediente)