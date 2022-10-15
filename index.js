const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
})

const linkMenu = document.querySelectorAll('.menu-lateral__link')

function addListenerMouseOverOut(item) 
{
    item.addEventListener('mouseover', onMouseOverOut)
    item.addEventListener('mouseout', onMouseOverOut)
}

function onMouseOverOut() 
{
    this.classList.toggle('menu-lateral__link--ativo')
}

linkMenu.forEach(addListenerMouseOverOut)
