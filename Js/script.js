'use strict'
const slides = document.querySelectorAll('.slide')
const rightBtn = document.querySelector('.arrRight')
const leftBtn = document.querySelector('.arrLeftt')
slides.forEach((el, i)=> {
    el.style.transform = `translateX(${i * 100}%)`
});

function toSlide(s){
    slides.forEach((slide, i)=>slide.style.transform=`translateX(${(i - s)* 100})%`)
}
let curslide = 0
rightBtn.addEventListener('click', function(){
    console.log('clicked')
    if(curslide === slides.length - 1) return
    else{
        curslide++
    }
    toSlide(curslide)
})
leftBtn.addEventListener('click', function(){
    console.log('clicked')
    if(curslide === 0) return
    else{
        curslide--
    }
    toSlide(curslide)
})
