import "./styles.css";

const sana = "koira"
const sanalista = sana.split('')
let laskuri = 0;


const btnReady = document.getElementById("btnReady")
const rakenne = document.getElementById("ristikko")

btnReady.addEventListener("click", () => {
  let kirjainLista = []
  let k1 = document.getElementById("k1")
  let k2 = document.getElementById("k2")
  let k3 = document.getElementById("k3")
  let k4 = document.getElementById("k4")
  let k5 = document.getElementById("k5")
  
  kirjainLista.push(k1)
  kirjainLista.push(k2)
  kirjainLista.push(k3)
  kirjainLista.push(k4)
  kirjainLista.push(k5)
  console.log(kirjainLista)
  if (k1.value.length + k2.value.length + k3.value.length + k4.value.length + k5.value.length == 5) {
    
    for(let i=0; i<5; i++) {
      if (sanalista.includes(kirjainLista[i].value)) {
        kirjainLista[i].setAttribute("class", "yellow")
      }
    }

    for(let i=0; i<5; i++) {
      if (kirjainLista[i].value == sanalista[i]) {
        kirjainLista[i].setAttribute("class", "green")
      }
    }
    
    let j = 0
    kirjainLista.forEach((obj) => {
      if (obj.hasAttribute("class")) {
        j++
      }

      if (j == 5) {
        btnReady.remove
        let endText = document.createElement("p")
        endText.innerText = "Voitit pelin"
        rakenne.appendChild(endText)
      }
    }) 


    k1.removeAttribute("id")
    k2.removeAttribute("id")
    k3.removeAttribute("id")
    k4.removeAttribute("id")
    k5.removeAttribute("id")

    laskuri++

    if (laskuri > 5) {
      btnReady.remove
      let endText = document.createElement("p")
      endText.innerText = "Hävisit pelin"
      rakenne.appendChild(endText)
      
    }

    let rivi = document.createElement("div")
    let i1 = document.createElement("input")
    i1.setAttribute("id", "k1")
    i1.setAttribute("type", "text")
    i1.setAttribute("style", "width: 20px;")
    i1.setAttribute("maxlength", "1")
    rivi.appendChild(i1)

    let i2 = document.createElement("input")
    i2.setAttribute("id", "k2")
    i2.setAttribute("type", "text")
    i2.setAttribute("style", "width: 20px;")
    i2.setAttribute("maxlength", "1")
    rivi.appendChild(i2)

    let i3 = document.createElement("input")
    i3.setAttribute("id", "k3")
    i3.setAttribute("type", "text")
    i3.setAttribute("style", "width: 20px;")
    i3.setAttribute("maxlength", "1")
    rivi.appendChild(i3)

    let i4 = document.createElement("input")
    i4.setAttribute("id", "k4")
    i4.setAttribute("type", "text")
    i4.setAttribute("style", "width: 20px;")
    i4.setAttribute("maxlength", "1")
    rivi.appendChild(i4)

    let i5 = document.createElement("input")
    i5.setAttribute("id", "k5")
    i5.setAttribute("type", "text")
    i5.setAttribute("style", "width: 20px;")
    i5.setAttribute("maxlength", "1")
    rivi.appendChild(i5)

    rakenne.appendChild(rivi)




  } else {
    let prompt = document.createElement("p")
    prompt.innerText = "Syötä sana ensin kokonaan"
    rakenne.appendChild(prompt)
  }

})
