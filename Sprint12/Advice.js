const button = document.getElementById("button")
const bubble = document.getElementById("advice")
const id = document.getElementById("id")

function renderAdvice(adviceArea){
  bubble.textContent = adviceArea
}

function renderId(idArea){
  id.textContent = idArea
}

async function getAdvice() {
  const url = "https://api.adviceslip.com/advice"

  let adviceArea = ""
  let idArea = ""
  try {
    const response = await fetch(url)
    const data = await response.json()

    if (data.slip.advice) {
      adviceArea = `${data.slip.advice} `
    } else {
      adviceArea = data.slip.advice
    }

    console.log(adviceArea)
  }
  catch (e) {
    console.log(e)
  }



  try {
    const response = await fetch(url)
    const data = await response.json()

    if (data.slip.id) {
      idArea = `ADVICE #${data.slip.id} `
    } else {
      idArea = data.slip.id
    }

    console.log(idArea)
  }
  catch (e) {
    console.log(e)
  }
  renderAdvice(adviceArea)
  renderId(idArea)
}



button.addEventListener('click', getAdvice)