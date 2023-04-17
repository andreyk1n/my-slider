let prev = document.getElementById('prev')
let next = document.getElementById('next')
let slideIndex = 1

showSlide(slideIndex)

function prevSlide(n) {
    slideIndex -= n
}

function nextSlide(n) {
    slideIndex += n
}

function showSlide(n) {
    let i 
    let slide = document.getElementsByClassName("slide")
    if (n > slide.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slide.length
    }
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = 'none'
    } 
    slide[slideIndex-1].style.display = 'block'
}

next.addEventListener('click', function() {
  nextSlide(1)
  showSlide(slideIndex)
})

prev.addEventListener('click', function() {
  prevSlide(1)
  showSlide(slideIndex)
})
