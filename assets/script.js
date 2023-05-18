const mediaQuery = window.matchMedia('(max-width: 667px)')

const testimonials = document.getElementById('testimonials')
const hamburger = document.getElementById('hamburger')
const nav = document.getElementById('nav')
const overlay = document.getElementById('overlay')


function toggleMenu(){
    if(window.matchMedia("(max-width: 667px)").matches){
        hamburger.style.display = 'block'
        hamburger.addEventListener('click', () => {
        nav.classList.toggle("active")
        overlay.classList.toggle('active')
        })
    }else{
        hamburger.style.display = 'none'
    }
}

window.addEventListener('resize', toggleMenu)



