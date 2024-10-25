// Returnează numărul de vocale dintr-un șir de caractere (string)
const arr = ["calculate"]
function vowelNum(arr) {
  let i = 0
  const vowels = "aeouAEIOU"
  for (let char of arr[0]) {
    if (vowels.includes(char)) {
      i++
    }
  }
  return i
}

console.log(vowelNum(arr))