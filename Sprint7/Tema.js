// 1. Returnează un boolean dacă un număr este divizibil cu 10
function divizibilCuZece(num){
  if (num % 10 === 0){
    return true
  } else {
    return false
  }
}
console.log(divizibilCuZece(20))