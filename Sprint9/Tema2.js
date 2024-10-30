// Scrieți o funcție care returnează un obiect nou fără proprietățile furnizate

function creareObiectNou(obiect, proprietate) {
  const obiectNou = { ...obiect }
  delete obiectNou[proprietate]
  return obiectNou
}

console.log(creareObiectNou({ a: 1, b: 2 }, "b"))