const inputCel = document.querySelector(".forC")
const inputFar = document.querySelector(".forF")


inputCel.addEventListener("input" , () => {
    inputFar.value = Math.round((9/5)*inputCel.value + 32)
})

inputFar.addEventListener("input" , () => {
    inputCel.value = Math.round((inputFar.value-32) * 5/7)
})