const downButton = document.querySelector('.down-button')
const upButton = document.querySelector('.up-button')
const sideBar = document.querySelector(".sidebar")
const mainSlide =document.querySelector(".main-slide")
const container = document.querySelector('.container')
const slidesCount = sideBar.childElementCount


let cureentSlideIndex = 0
const containerHeight = container.clientHeight
sideBar.style.top = `-${(slidesCount-1-cureentSlideIndex)*100}vh`
const changeSlide = (dicertion) => {
  switch(dicertion){
    case "up":
      cureentSlideIndex++
      if(cureentSlideIndex>slidesCount-1){cureentSlideIndex = 0}
      break
    case "down":
      cureentSlideIndex--
      if(cureentSlideIndex<0){cureentSlideIndex = slidesCount-1}
      break
    default: return
  }
  sideBar.style.transform = `translateY(${cureentSlideIndex*containerHeight}px)`
  mainSlide.style.transform = `translateY(-${cureentSlideIndex*containerHeight}px)`
}
const downButtonHandler = (event) => {
  changeSlide('down')
}
const upButtonHandler = (event) => {
  changeSlide("up")
}

downButton.addEventListener("click", downButtonHandler)
upButton.addEventListener("click", upButtonHandler)


