// Creați o șir de obiecte în care fiecare obiect descrie o carte și are proprietăți precum titlu (un șir de caractere - string), autor (un șir de caractere - string) și esteCitită (un boolean care indică dacă ați citit-o).
const carti = [
  { titlu: "Labirintul", autor: "James Dashner", esteCitita: true },
  { titlu: "Principiile Succesului", autor: "Dale Carnegie", esteCitita: true },
  { titlu: "Harry Potter", autor: "J.K. Rowling", esteCitita: false }
]

function functieVerificare(carti) {
  carti.forEach(carte => {
    console.log(`"${carte.titlu}" de ${carte.autor}`)
    if (carte.esteCitita === true) {
      console.log(`Ai citit "${carte.titlu}" de ${carte.autor}`)
    } else {
      console.log(`Trebuie sa citesti "${carte.titlu}" de ${carte.autor}`)
    }
  });
}
functieVerificare(carti)