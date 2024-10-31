const selectWays = document.querySelector(".selectWays")
const oneWay = document.querySelector(".oneWay")
const returnWay = document.querySelector(".returnWay")
const bookBtn = document.querySelector(".book")
const date = new Date();



selectWays.addEventListener("click", () => {
    if (selectWays.value === "oneWay") {
        bookBtn.setAttribute("disabled", "")
    } else{
        bookBtn.removeAttribute("disabled")
    }
})