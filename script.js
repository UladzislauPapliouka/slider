const downButton = document.querySelector('.down-button')
const upButton = document.querySelector('.up-button')
const sideBar = document.querySelector(".sidebar")
const mainSlide =document.querySelector(".main-slide")

const slidesCount = sideBar.childElementCount
sideBar.style.top = `-${(slidesCount-1)*100}vh`

const downButtonHandler = (event) => {
  
  console.log(event.target);
}
const upButtonHandler = (event) => {
  console.log(event.target);
}

downButton.addEventListener("click", downButtonHandler)
upButton.addEventListener("click", upButtonHandler)