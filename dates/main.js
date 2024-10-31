const selectWays = document.querySelector(".selectWays")
const oneWay = document.querySelector(".oneWay")
const returnWay = document.querySelector(".returnWay")
const bookBtn = document.querySelector(".book")

const date = new Date();
const newDate = (`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`)

//idk what is the select listener so i used click (wrong btw)
selectWays.addEventListener("click", () => {
    if (selectWays.value === "oneWay") {
        returnWay.setAttribute("disabled", "")
    } else {
        returnWay.removeAttribute("disabled")
    }
})

oneWay.addEventListener("input", () => {
    if (oneWay.value.toString() < newDate.toString()) {
        bookBtn.setAttribute("disabled", "")
        bookBtn.textContent = "Please book a valid date";
        returnWay.setAttribute("disabled", "")
    } else {
        bookBtn.removeAttribute("disabled")
        bookBtn.textContent = "Book!";
        returnWay.removeAttribute("disabled")
    }
})

returnWay.addEventListener("input", () => {
    if (returnWay.value.toString() < oneWay.value.toString() || returnWay.value.toString() < newDate.toString() || oneWay.value.toString() < newDate.toString()){
        bookBtn.setAttribute("disabled", "")
        bookBtn.textContent = "Please book a valid date for return";
    } else {
        bookBtn.removeAttribute("disabled")
        bookBtn.textContent = "Book!";        
    }
})