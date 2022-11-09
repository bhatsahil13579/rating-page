const container = document.querySelector(".main-container")
const button = document.querySelector(".button")
const containersecond = document.querySelector(".container2")
const circle = document.querySelectorAll(".circle")
const rate = document.querySelector("#rate")


circle.forEach(ratee => {
   ratee.addEventListener("click", (enable) => {
      rate.textContent = ratee.textContent
      if (enable) {
         button.style.backgroundColor = " #fb7413"
         button.removeAttribute("disabled")
      }

   })
})

button.addEventListener("click", (click) => {

   container.style.display = "none"
   containersecond.style.display = "block"

   if (click) {

      click = setTimeout(reset, 2000)
   }

   function reset() {
      container.style.display = "block"
      containersecond.style.display = "none"
      button.setAttribute("disabled", "")
      button.style.backgroundColor = " #7c8798"



   }

})












