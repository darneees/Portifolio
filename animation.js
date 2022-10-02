const menuDiv = document.getElementById('menu-mobile')
const btnAnimation = document.getElementById('btn-menu')

menuDiv.addEventListener('click' , animationMenu)

function animationMenu() {
    
    menuDiv.classList.toggle('opened')
    btnAnimation.classList.toggle('actived')

    const btn = document.getElementById('btn-menu')
    btn.classList.toggle('activation')
}


