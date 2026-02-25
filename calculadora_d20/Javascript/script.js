const forBase = document.getElementById("forBase")
const forD20 = document.getElementById("forD20")
const forMod = document.getElementById("forMod")
const forTotal = document.getElementById("forTotal")

const desBase = document.getElementById("desBase")
const desD20 = document.getElementById("desD20")
const desMod = document.getElementById("desMod")
const desTotal = document.getElementById("desTotal")

const conBase = document.getElementById("conBase")
const conD20 = document.getElementById("conD20")
const conMod = document.getElementById("conMod")
const conTotal = document.getElementById("conTotal")

const intBase = document.getElementById("intBase")
const intD20 = document.getElementById("intD20")
const intMod = document.getElementById("intMod")
const intTotal = document.getElementById("intTotal")

const sabBase = document.getElementById("sabBase")
const sabD20 = document.getElementById("sabD20")
const sabMod = document.getElementById("sabMod")
const sabTotal = document.getElementById("sabTotal")

const carBase = document.getElementById("carBase")
const carD20 = document.getElementById("carD20")
const carMod = document.getElementById("carMod")
const carTotal = document.getElementById("carTotal")

function gerarNumeroAleatorio() {
    const array_numeros_aleatorios = []

    for(let i = 0; i < 6; i++) {
        array_numeros_aleatorios[i] = Math.floor(20 * Math.random() + 1)
    }
    return array_numeros_aleatorios
}

function camposD20() {
   numeros_d20 = gerarNumeroAleatorio()

   forD20.value = numeros_d20[0]
   desD20.value = numeros_d20[1]
   conD20.value = numeros_d20[2]
   intD20.value = numeros_d20[3]
   sabD20.value = numeros_d20[4]
   carD20.value = numeros_d20[5]
   modificador(numeros_d20)
}

function modificador(array_numeros_aleatorios){
    let numero_d20 = array_numeros_aleatorios
    let mod = []
    for(let i = 0; i < 6; i++) {
        let valor = numero_d20[i]
        
        if(valor > 15){
            mod [i] = Math.round(1 + (valor/1.2))
        } else if (valor > 7) {
            mod[i] = (0 + (valor/1.2)).toFixed(0)
        } else {
            mod[i] = Math.round(- 1 + (valor / 1.2))
        }

    }
    forMod.value = mod[0]
    desMod.value = mod[1]
    conMod.value = mod[2]
    intMod.value = mod[3]
    sabMod.value = mod[4]
    carMod.value = mod[5]
}

function calcular(){
    forTotal.value = Number(forBase.value) + Number(forMod.value)
    desTotal.value = Number(desBase.value) + Number(desMod.value)
    conTotal.value = Number(conBase.value) + Number(conMod.value)
    intTotal.value = Number(intBase.value) + Number(intMod.value)
    sabTotal.value = Number(sabBase.value) + Number(sabMod.value)
    carTotal.value = Number(carBase.value) + Number(carMod.value)
}

function recarregarpagina() {
    window.location.reload(true)
}

const btnCalcular = document.getElementById("calcular")
const btnDado = document.getElementById("dado")
const btnResetar = document.getElementById("resetar")

btnCalcular.addEventListener("click", calcular)
btnDado.addEventListener("click", camposD20)
btnResetar.addEventListener("click", recarregarpagina)