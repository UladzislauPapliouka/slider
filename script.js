const downButton = document.querySelector('.down-button')
const upButton = document.querySelector('.up-button')
const sideBar = document.querySelector(".sidebar")
const mainSlide =document.querySelector(".main-slide")

const slidesCount = sideBar.childElementCount


let cureentSlideIndex = 0

sideBar.style.top = `-${(slidesCount-1-cureentSlideIndex)*100}vh`
const changeSlide = (dicertion) => {
  switch(dicertion){
    case "up":
      cureentSlideIndex++
      if(cureentSlideIndex>3){cureentSlideIndex = 0}
      sideBar.style.top = `-${(slidesCount-1-cureentSlideIndex)*100}vh`
      mainSlide.style.top = `-${(cureentSlideIndex)*100}vh`
      
      break
    case "down":
      cureentSlideIndex--
      if(cureentSlideIndex<0){cureentSlideIndex = slidesCount-1}
      sideBar.style.top = `-${(slidesCount-1-cureentSlideIndex)*100}vh`
      mainSlide.style.top = `-${(cureentSlideIndex)*100}vh`
      
      break
    default: return
  }
  console.log(cureentSlideIndex);
}
const downButtonHandler = (event) => {
  changeSlide('down')
}
const upButtonHandler = (event) => {
  changeSlide("up")
}

downButton.addEventListener("click", downButtonHandler)
upButton.addEventListener("click", upButtonHandler)

