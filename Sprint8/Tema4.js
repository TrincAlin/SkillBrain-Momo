// Returnează numărul de vocale dintr-un șir de caractere (string)
const arr = ["calculate"]
const string = [...arr][0]
function vowelNum(string) {
  let i = 0
  const vowels = "aeouAEIOU"
  for (let char of string) {
    if (vowels.includes(char)) {
      i++
    }
  }
  return i
}

console.log(vowelNum(string))